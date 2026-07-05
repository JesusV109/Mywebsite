import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

export default function HighlightedProjects() {
  return <div className="grid gap-5 md:grid-cols-2">{projects.filter((project) => project.featured).map((project) => <ProjectCard key={project.title} project={project} />)}</div>;
}
