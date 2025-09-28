"use client";
import { motion } from "framer-motion";

export default function Section({ children, className = "" }: { children: React.ReactNode; className?: string; }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-16 px-6 max-w-6xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
}
