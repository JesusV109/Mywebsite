"use client";

import { ProjectCard } from "@/components/ProjectCard";
import Image from "next/image";

const projects = [
  {
    title: "Ordex",
    description:
      "Fully deployed logistics app with Next.js + Firebase + Prisma. Tracks pallets, inventory, and streamlines warehouse ops. Use jesus@gmail.com and password 1234567890 to log in",
    link: "https://github.com/JesusV109/Ordex",
    demo: "https://pdrapp.vercel.app",
    tags: ["Next.js", "TypeScript", "Firebase", "Prisma"],
    logo: "/ordex.png",
  },
  {
    title: "safeCity",
    description:
      "Incident reporting platform with map visualization and an admin dashboard.",
    link: "https://github.com/JesusV109/safeCity",
    tags: ["Next.js", "Maps", "Full-stack"],
    logo: "/safecity.svg",
  },
  {
    title: "Custom Alarm Clock",
    description:
      "Arduino RTC + ultrasonic sensor + LED matrix & buzzer. Wave to silence the alarm.",
    link: "https://github.com/JesusV109/alarmClock",
    tags: ["Arduino", "C/C++", "Hardware"],
    video: "/alarm.mov", // 🎥 video instead of thumbnail
  },
  {
    title: "Carbon Footprint (HackRU)",
    description:
      "Next.js + Prisma + Tailwind app that uses Google Maps transit data to calculate emissions and rank users.",
    link: "https://github.com/JesusV109/hackru",
    tags: ["Next.js", "Prisma", "Tailwind", "Google Maps"],
    logo: "/hackru.svg",
  },
];

export default function ProjectsGrid() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, idx) => (
        <div key={idx} className="flex flex-col">
          {/* Media section (fixed size container for consistency) */}
          <div className="w-full h-40 flex items-center justify-center bg-gray-900/10 rounded-xl mb-4 overflow-hidden">
            {project.video ? (
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-auto object-contain"
              />
            ) : project.logo ? (
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                width={200}
                height={200}
                className="max-h-full max-w-full object-contain"
              />
            ) : null}
          </div>

          {/* Project details */}
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
}
