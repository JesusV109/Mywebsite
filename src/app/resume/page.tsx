import type { Metadata } from "next";
import { contact, experiences, profile, projects, skills } from "@/data/portfolio";
import { Download } from "lucide-react";

export const metadata: Metadata = { title: "Resume", description: `${profile.name} — ${profile.headline}` };

export default function ResumePage() {
  const selectedProjects = projects.filter((project) => ["PDR Labeling System", "Ordex", "AI Ad Factory"].includes(project.title));

  return (
    <main className="resume-page mx-auto max-w-5xl px-5 pb-20 pt-28 sm:px-8">
      <div className="no-print mb-6 flex flex-wrap items-center justify-end gap-3"><span className="text-sm text-slate-400">Single-column and scanner-friendly</span><a className="button button-primary" href="/resume.pdf" download><Download size={16} /> Download ATS Resume</a></div>
      <article className="resume-sheet border-l-2 border-cyan-400/50 bg-slate-900/75 p-6 shadow-[12px_12px_0_rgba(34,211,238,0.05)] sm:p-10">
        <header className="border-b border-white/10 pb-7">
          <h1 className="text-4xl font-semibold tracking-tight text-white">Jesus Vazquez</h1>
          <p className="mt-2 text-lg text-cyan-400">Software Engineer / IT Assistant — PDR</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-400">
            <a href={`mailto:${contact.email}`}>{contact.email}</a><a href={contact.github}>GitHub</a><a href={contact.linkedin}>LinkedIn</a>
          </div>
        </header>

        <ResumeSection title="Education">
          <div className="flex flex-wrap justify-between gap-2 text-sm"><strong className="text-white">B.S. in Computer Science</strong><span className="text-slate-400">Kean University · Union, NJ</span></div>
        </ResumeSection>

        <ResumeSection title="Technical Skills">
          <div className="space-y-2">{skills.map((group) => <p className="text-sm text-slate-300" key={group.category}><strong className="text-white">{group.category}:</strong> {group.items.join(", ")}</p>)}</div>
        </ResumeSection>

        <ResumeSection title="Relevant Experience">
          <div className="space-y-7">{experiences.map((item) => <div key={item.company}><div className="flex flex-wrap justify-between gap-2"><h3 className="font-semibold text-white">{item.role}</h3><span className="text-sm text-slate-400">{item.company}</span></div><ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-5 text-slate-300">{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div>)}</div>
        </ResumeSection>

        <ResumeSection title="Selected Projects">
          <div className="space-y-5">{selectedProjects.map((project) => <div key={project.title}><h3 className="font-semibold text-white">{project.title}</h3><p className="text-xs text-cyan-400">{project.category}</p><p className="mt-1 text-sm leading-5 text-slate-300">{project.description}</p><p className="mt-1 text-xs text-slate-400">{project.tags.join(" · ")}</p></div>)}</div>
        </ResumeSection>

        <ResumeSection title="Hackathon Experience">
          <div className="space-y-5">
            <div><h3 className="font-semibold text-white">Hole in the Wall | HackPrinceton</h3><ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-5 text-slate-300"><li>Built a rapid Next.js/React hackathon prototype using Firebase, TypeScript, and Tailwind CSS.</li><li>Collaborated under a short deadline on product direction, frontend flow, debugging, and demo preparation.</li></ul></div>
            <div><h3 className="font-semibold text-white">OptiBuy | Columbia Hackathon</h3><ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-5 text-slate-300"><li>Built a price-comparison hackathon web app with AI shopping assistance, price history, and smart-alert concepts.</li><li>Used Next.js, TypeScript, Tailwind CSS, Prisma, Recharts, and authentication/data validation tooling.</li></ul></div>
          </div>
        </ResumeSection>
      </article>
    </main>
  );
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="border-b border-white/10 py-7 last:border-0 last:pb-0"><h2 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">{title}</h2>{children}</section>;
}
