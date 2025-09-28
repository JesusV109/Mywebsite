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
    description: "Incident reporting platform with map visualization and an admin dashboard.",
    link: "https://github.com/JesusV109/safeCity",
    tags: ["Next.js", "Maps", "Full-stack"],
    logo: "/safecity.svg",
  },
  {
    title: "Custom Alarm Clock",
    description: "Arduino RTC + ultrasonic sensor + LED matrix & buzzer. Wave to silence the alarm.",
    link: "https://github.com/JesusV109/alarmClock",
    tags: ["Arduino", "C/C++", "Hardware"],
    video: "/alarm.mp4", // ✅ convert to mp4/webm instead of .mov
  },
  {
    title: "Carbon Footprint (HackRU)",
    description: "Next.js + Prisma + Tailwind app that uses Google Maps transit data to calculate emissions and rank users.",
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
          {/* Media section: logo, video, or fallback */}
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata" // ✅ lighter load for mobile
              className="rounded-xl shadow-md mb-4 w-full h-40 object-cover"
            />
          ) : project.logo ? (
            <div className="w-full h-40 flex items-center justify-center bg-gray-900/20 rounded-xl shadow-md mb-4">
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          ) : null}

          {/* Project details */}
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
}
