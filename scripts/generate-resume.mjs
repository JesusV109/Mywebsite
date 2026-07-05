import fs from "node:fs";

// Dependency-free, single-page ATS resume generator. The PDF uses standard
// Helvetica fonts and a linear reading order so text extractors can parse it.
const page = { width: 612, height: 792, left: 42, right: 570, top: 756, bottom: 35 };
const commands = [];
let y = page.top;

const escapePdf = (value) => value
  .replaceAll("\\", "\\\\")
  .replaceAll("(", "\\(")
  .replaceAll(")", "\\)")
  .replaceAll("—", "\\227");

function text(value, { x = page.left, size = 8.5, bold = false, leading = 10 } = {}) {
  commands.push(`BT /${bold ? "F2" : "F1"} ${size} Tf ${x} ${y} Td (${escapePdf(value)}) Tj ET`);
  y -= leading;
}

function rule() {
  commands.push(`0.35 w ${page.left} ${y + 2.5} m ${page.right} ${y + 2.5} l S`);
}

function section(title) {
  y -= 3.5;
  text(title, { size: 9, bold: true, leading: 10.5 });
  rule();
  y -= 1.5;
}

function wrapped(value, options = {}) {
  const { prefix = "", continuation = "", width = 112, ...textOptions } = options;
  const words = value.split(/\s+/);
  const rows = [];
  let row = prefix;
  for (const word of words) {
    const candidate = row ? `${row} ${word}` : word;
    if (candidate.length > width && row) {
      rows.push(row);
      row = `${continuation}${word}`;
    } else {
      row = candidate;
    }
  }
  if (row) rows.push(row);
  rows.forEach((line) => text(line, textOptions));
}

function bullet(value) {
  wrapped(value, { prefix: "-", continuation: "  ", width: 114, leading: 9.5 });
}

text("Jesus Vazquez", { size: 18, bold: true, leading: 21 });
text("Software Engineer / IT Assistant — PDR", { size: 9.5, bold: true, leading: 12 });
text("albertovazquez86av@gmail.com | linkedin.com/in/jesus-vazquez-02b450202 | github.com/JesusV109 | Portfolio", { size: 7.7, leading: 11 });

section("EDUCATION");
text("Kean University | Union, NJ", { bold: true, leading: 8.8 });
text("B.S. in Computer Science", { leading: 8.8 });

section("TECHNICAL SKILLS");
wrapped("Languages: C#, SQL, TypeScript, JavaScript, Python, Java, HTML/CSS", { leading: 9.25 });
wrapped("Frameworks / Tools: .NET, WPF, Next.js, React, Node.js, Tailwind CSS, Prisma, Git, GitHub, VS Code", { leading: 9.25 });
wrapped("Business Systems: Microsoft Dynamics 365 Business Central, SQL Server, SSRS, SQL Agent, EDI, SFTP, BarTender, Zebra Printers", { leading: 9.25 });
wrapped("Infrastructure: Linux, Ubuntu, Proxmox, Docker, SSH, Apache, Reverse Proxy, SSL, Windows Server", { leading: 9.25 });
wrapped("AI / Data: AI Agents, Automation Pipelines, Pandas, DuckDB, Research Logging", { leading: 9.25 });

section("RELEVANT EXPERIENCE");
text("Software Engineer / IT Assistant — PDR", { size: 8, bold: true, leading: 9.6 });
bullet("Build and maintain internal applications using C#, .NET, APIs, SQL Server, and warehouse and business workflow logic.");
bullet("Create API endpoints and backend workflows for internal tools used in logistics, reporting, label printing, and operations.");
bullet("Code and support Microsoft Dynamics 365 Business Central customizations, workflows, permissions, reports, data issues, and warehouse processes.");
bullet("Develop and troubleshoot SQL Server queries, stored procedures, SSRS reports, SQL Agent jobs, and operational data flows.");
bullet("Support EDI/SFTP workflows, file movement jobs, imports/exports, BarTender and Zebra printing, reprints, and print-job troubleshooting.");
bullet("Troubleshoot Windows/Linux servers, Apache, reverse proxies, SSL, hosted reporting pages, and remote connectivity.");
y -= 1.5;
text("YBF Beauty | Web Developer", { size: 8, bold: true, leading: 9.6 });
bullet("Built and maintained Shopify storefront pages, product listings, responsive UI/UX, ecommerce content, and media assets.");

section("PROJECTS");
text("PDR Labeling System", { size: 8, bold: true, leading: 9.2 });
bullet("Built and supported internal label-printing architecture using C#, .NET, WPF, REST APIs, SQL Server, worker services, BarTender, and Zebra printers.");
bullet("Worked on print workflows, previews, printer configuration, reprints, SSCC/carton/pallet/item label logic, and SQL stored procedures.");
text("Ordex", { size: 8, bold: true, leading: 9.2 });
bullet("Built a Next.js, TypeScript, Firebase, Prisma, and Tailwind CSS logistics app for orders, pallets, inventory, locations, and warehouse workflows.");
text("AI Ad Factory", { size: 8, bold: true, leading: 9.2 });
bullet("Built a self-hosted n8n, PostgreSQL, Docker, Telegram, and AI-agent pipeline for generation, scoring, revision memory, and human review.");

section("HACKATHON EXPERIENCE");
text("Hole in the Wall | HackPrinceton", { size: 8, bold: true, leading: 9.2 });
bullet("Built a rapid Next.js/React hackathon prototype using Firebase, TypeScript, and Tailwind CSS.");
bullet("Collaborated under a short deadline on product direction, frontend flow, debugging, and demo preparation.");
text("OptiBuy | Columbia Hackathon", { size: 8, bold: true, leading: 9.2 });
bullet("Built a price-comparison hackathon web app with AI shopping assistance, price history, and smart-alert concepts.");
bullet("Used Next.js, TypeScript, Tailwind CSS, Prisma, Recharts, and authentication/data validation tooling.");

if (y < page.bottom) throw new Error(`Resume exceeds one page by ${page.bottom - y} points.`);

const stream = commands.join("\n");
const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>",
  `<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream`,
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
];

let pdf = "%PDF-1.4\n";
const offsets = [0];
objects.forEach((object, index) => {
  offsets.push(Buffer.byteLength(pdf));
  pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
});
const xref = Buffer.byteLength(pdf);
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n${offsets.slice(1).map((offset) => `${String(offset).padStart(10, "0")} 00000 n `).join("\n")}\n`;
pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;

fs.writeFileSync(new URL("../public/resume.pdf", import.meta.url), pdf);
console.log(`Generated one-page ATS resume (${Math.round((y - page.bottom) * 10) / 10}pt remaining).`);
