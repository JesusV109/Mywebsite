"use client";

import nextDynamic from "next/dynamic";
import Section from "@/components/Section";

// Dynamically load the grid (lazy loading)
const ProjectsGrid = nextDynamic(() => import("@/components/ProjectsGrid"), {
  loading: () => <p className="text-center py-20">Loading projects...</p>,
  ssr: false,
});

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Section className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">My Projects</h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Here are some of the apps, tools, and experiments I’ve worked on —
          ranging from production-ready logistics software to fun hackathon builds.
        </p>
      </Section>

      <ProjectsGrid />
    </div>
  );
}
