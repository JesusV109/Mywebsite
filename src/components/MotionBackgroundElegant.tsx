"use client";

import { motion } from "framer-motion";

export default function MotionBackgroundElegant({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-[#0a192f] text-white overflow-hidden">
      {/* Animated Bubbles */}
      <motion.div
        className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] rounded-full bg-[#1f3a60] opacity-30 blur-3xl"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[10%] w-[700px] h-[700px] rounded-full bg-[#064e3b] opacity-30 blur-3xl"
        animate={{ y: [0, -60, 0], x: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] left-[50%] w-[500px] h-[500px] rounded-full bg-[#312e81] opacity-30 blur-3xl"
        animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[20%] w-[400px] h-[400px] rounded-full bg-[#1c1c1c] opacity-40 blur-2xl"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />

      {/* Foreground */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
