"use client";

import Image from "next/image";
import Link from "next/link"; // ✅ Import Next.js Link
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/me.jpg"
            alt="Jesus Vazquez"
            width={140}
            height={140}
            className="rounded-full border-4 border-gray-300 dark:border-gray-700 shadow-xl"
            priority
          />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold mt-6 text-white"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Jesus Vazquez
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-gray-300 mt-3 max-w-xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Software Engineer · Machine Learning Enthusiast · IT Assistant
        </motion.p>

        <motion.div
          className="flex gap-4 mt-8"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link
            href="/#projects"
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base shadow-lg transition"
          >
            View Projects
          </Link>
          <Link
            href="/resume.pdf"
            className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100/10 backdrop-blur-sm hover:bg-gray-200/20 text-white text-sm sm:text-base shadow-lg transition"
          >
            Download Resume
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
