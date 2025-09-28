"use client";

import { ProjectCard } from "@/components/ProjectCard";

export default function HighlightedProjects() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <ProjectCard
        title="Ordex"
        description="Fully functional logistics app — live and deployed."
        link="https://github.com/JesusV109/Ordex"
        demo="https://pdrapp.vercel.app"
        tags={["Next.js", "TypeScript", "Firebase", "Prisma"]}
      />
      <ProjectCard
        title="safeCity"
        description="Incident reporting app with map interface and admin dashboard."
        link="https://github.com/JesusV109/safeCity"
        tags={["Next.js", "Maps", "Full-stack"]}
      />
    </div>
  );
}
