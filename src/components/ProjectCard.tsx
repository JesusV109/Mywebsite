"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  demo?: string;
  tags?: string[];
  thumbnail?: string;
}

export function ProjectCard({ title, description, link, demo, tags, thumbnail }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 250 }}
      className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg flex flex-col"
    >
      {thumbnail && (
        <div className="relative w-full h-40 mb-4">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 flex-grow">{description}</p>

      <div className="flex gap-2 flex-wrap mt-3">
        {tags?.map((tag, idx) => (
          <span key={idx} className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-4">
        <a href={link} target="_blank" className="inline-flex items-center gap-1 text-blue-500 hover:underline">
          <ExternalLink size={14} /> GitHub
        </a>
        {demo && (
          <a href={demo} target="_blank" className="inline-flex items-center gap-1 text-blue-500 hover:underline">
            <ExternalLink size={14} /> Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
