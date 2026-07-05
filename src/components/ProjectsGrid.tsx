import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

export default function ProjectsGrid() {
  return <div className="grid gap-5 md:grid-cols-2">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>;
}
