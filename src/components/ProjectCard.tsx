import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <article className="project-card group flex h-full flex-col overflow-hidden border border-white/[0.08] bg-slate-900/70">
      {project.image && (
        <div className="relative flex h-40 w-full items-center justify-center overflow-hidden border-b border-white/[0.06] bg-slate-950/70 p-8">
          <Image
            src={project.image}
            alt={`${project.title} project artwork`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-8 transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </div>
      )}
      <div className={`flex flex-1 flex-col ${compact ? "p-5" : "p-6 sm:p-7"}`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
          <span className="project-label">{project.label}</span>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">{project.category}</p>
          </div>
          <span className="module-status"><i />{project.status}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>
        {!compact && <div className="project-readout mt-5 grid gap-4 sm:grid-cols-2">
          <div><span>Problem</span><p>{project.problem}</p></div>
          <div><span>Built / worked on</span><p>{project.built}</p></div>
        </div>}
        {!compact && project.architecture && <div className="mini-pipeline" aria-label={`${project.title} architecture`}>{project.architecture.map((node, index) => <span key={node}><b>{node}</b>{index < project.architecture!.length - 1 && <i>→</i>}</span>)}</div>}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="chip text-[11px]">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-5 pt-6 text-sm font-medium">
          {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="link"><Github size={15} /> Source</a>}
          {project.demo && <span className="inline-flex items-center gap-1.5 text-slate-400"><ArrowUpRight size={15} /> {project.demo}</span>}
        </div>
      </div>
    </article>
  );
}
