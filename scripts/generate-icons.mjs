import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const appDir = path.join(root, "src", "app");
const svg = await readFile(path.join(appDir, "icon.svg"));

async function png(size) {
  return sharp(svg).resize(size, size).png().toBuffer();
}

await writeFile(path.join(appDir, "apple-icon.png"), await png(180));

// ICO supports PNG-compressed frames. Include the common browser-tab sizes.
const frames = await Promise.all([16, 32, 48].map(png));
const headerSize = 6 + frames.length * 16;
let offset = headerSize;
const directory = Buffer.alloc(headerSize);
directory.writeUInt16LE(0, 0);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(frames.length, 4);

frames.forEach((frame, index) => {
  const entry = 6 + index * 16;
  const size = [16, 32, 48][index];
  directory.writeUInt8(size, entry);
  directory.writeUInt8(size, entry + 1);
  directory.writeUInt8(0, entry + 2);
  directory.writeUInt8(0, entry + 3);
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(frame.length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += frame.length;
});

await writeFile(path.join(appDir, "favicon.ico"), Buffer.concat([directory, ...frames]));
