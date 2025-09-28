"use client";

import { motion } from "framer-motion";

export default function MotionBackgroundElegant({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Animated blobs */}
      <motion.div
        className="absolute w-[350px] h-[350px] bg-blue-500/20 rounded-full blur-2xl"
        animate={{ x: [0, 60, -60, 0], y: [0, -40, 40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "10%", left: "15%" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-green-500/15 rounded-full blur-2xl"
        animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "15%", right: "20%" }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] bg-purple-500/15 rounded-full blur-2xl"
        animate={{ x: [0, 40, -40, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "25%", left: "10%" }}
      />

      {/* Foreground content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
