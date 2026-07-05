import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { contact, experiences, projects, skills } from "@/data/portfolio";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const fieldNotes = [
  ["Fixing warehouse workflows", "Turning broken manual steps into clearer tools and support paths."],
  ["Building internal tools", "Small apps, APIs, and utilities that make daily operations easier."],
  ["Debugging SQL/reporting jobs", "Tracing data issues through SQL Server, SSRS, and scheduled jobs."],
  ["Automating file movement", "EDI/SFTP workflows, imports, exports, and job handoffs."],
  ["Running Linux/Docker services", "Homelab services, reverse proxies, SSL, SSH, and server troubleshooting."],
  ["Experimenting with AI agents", "Prompt pipelines, scoring flows, research bots, and automation ideas."],
];

const systemFlows = [
  ["Warehouse Labels", "UI", "API", "SQL", "Worker", "BarTender", "Zebra"],
  ["AI Pipeline", "Prompt", "Agent", "Score", "Review", "Store"],
  ["Infrastructure", "Linux", "Docker", "Reverse Proxy", "SSL", "Service"],
  ["Business Systems", "Dynamics 365 Business Central", "SQL", "SSRS", "Report", "User"],
  ["EDI Flow", "SFTP", "File Watcher", "Import Job", "Error Log", "Fix"],
];

const featuredProjects = projects.filter((project) => !project.hackathon);
const hackathonProjects = projects.filter((project) => ["Hole in the Wall", "OptiBuy"].includes(project.title));

function Heading({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return (
    <div className="mb-10 max-w-3xl sm:mb-14">
      <p className="eyebrow">{label}</p>
      <h2 className="section-title"><span>{title}</span></h2>
      {copy && <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">{copy}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="about" className="section-shell section-spacing scroll-mt-20">
        <Reveal>
          <Heading label="01 / About" title="Close to the code. Close to the work." />
          <div className="grid gap-10 lg:grid-cols-[1.5fr_0.7fr]">
            <div className="space-y-5 text-lg leading-8 text-slate-300">
              <p>I&apos;m a CS student and software engineer who likes building tools close to real operations.</p>
              <p className="text-slate-400">At PDR, I build C#/.NET internal apps and APIs, code and support Microsoft Dynamics 365 Business Central workflows, and troubleshoot SQL reporting, warehouse printing, EDI/SFTP automation, and Linux infrastructure. Outside of work, I build full-stack apps, AI agent pipelines, research bots, and hackathon projects.</p>
            </div>
            <div className="panel p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">Education</p>
              <p className="mt-4 font-semibold text-white">B.S. Computer Science</p>
              <p className="mt-1 text-sm text-slate-400">Kean University</p>
              <div className="my-5 h-px bg-white/[0.07]" />
              <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">Focus</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">Backend engineering, applied AI, infrastructure, and software for real operating teams.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="system-section section-shell pb-20 sm:pb-28">
        <Reveal>
          <Heading label="02 / Field notes" title="What I actually work on." />
          <div className="field-notes-grid stagger-group">
            {fieldNotes.map(([title, description], index) => (
              <div className="field-note" style={{ "--item-index": index } as React.CSSProperties} key={title}><span>0{index + 1} / NOTE</span><h3>{title}</h3><p>{description}</p></div>
            ))}
          </div>
          <div className="system-board mt-8" aria-label="Examples of system flows">
            <div className="board-header"><span>SYS.MAP / LIVE ROUTES</span><span><i />5 pipelines online</span></div>
            {systemFlows.map(([label, ...nodes], rowIndex) => <div className="flow-row" key={label} style={{ "--row-index": rowIndex } as React.CSSProperties}>
              <strong>{label}</strong><div className="flow-chain">{nodes.map((node, index) => <span className="flow-node" key={node}>{node}{index < nodes.length - 1 && <b>→</b>}</span>)}</div><i className="flow-pulse" />
            </div>)}
          </div>
        </Reveal>
      </section>

      <section id="projects" className="section-shell section-spacing scroll-mt-20">
        <Reveal><Heading label="03 / Featured work" title="Built to solve a specific problem." copy="Projects from the places I spend most of my time: warehouse tools, SQL/reporting, AI experiments, and Linux servers." /></Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {featuredProjects.map((project, index) => <Reveal delay={(index % 3) * 70} key={project.title} className={`h-full ${index < 2 ? "lg:col-span-3" : index % 3 === 2 ? "lg:col-span-4" : "lg:col-span-2"}`}><ProjectCard project={project} /></Reveal>)}
        </div>
      </section>

      <section id="hackathons" className="section-shell section-spacing scroll-mt-20">
        <Reveal><Heading label="04 / Hackathon builds" title="Fast projects built under pressure." copy="Fast projects built under pressure — useful for practicing product thinking, collaboration, demos, and rapid debugging." /></Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {hackathonProjects.map((project, index) => <Reveal delay={index * 70} key={project.title} className="h-full"><ProjectCard project={project} compact /></Reveal>)}
        </div>
      </section>

      <section id="experience" className="section-shell section-spacing scroll-mt-20">
        <Reveal><Heading label="05 / Experience" title="The systems behind day-to-day operations." /></Reveal>
        <div className="space-y-5">
          {experiences.map((experience, index) => (
            <Reveal key={experience.company} delay={index * 80}>
              <article className="experience-card panel grid gap-6 p-6 sm:p-8 lg:grid-cols-[260px_1fr]">
                <div>
                  <p className="font-mono text-xs text-cyan-400">LOG / EXP-0{index + 1}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{experience.role}</h3>
                  <p className="mt-1 text-sm text-slate-400">{experience.company}</p>
                </div>
                <ul className="operations-log grid gap-3 text-sm leading-6 text-slate-300 sm:grid-cols-2">
                  {experience.bullets.map((bullet, bulletIndex) => <li key={bullet} style={{ "--item-index": bulletIndex } as React.CSSProperties} className="experience-bullet flex gap-3"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />{bullet}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="skills" className="section-shell section-spacing scroll-mt-20">
        <Reveal><Heading label="06 / Skills" title="Tools I use to get the work done." /></Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal delay={(index % 3) * 60} key={group.category} className={group.category === "Tools" ? "lg:col-span-3" : ""}>
              <div className="tool-rack panel h-full p-6">
                <h3><span>RACK {String(index + 1).padStart(2, "0")}</span>{group.category}<i /></h3>
                <div className="mt-4 flex flex-wrap gap-2">{group.items.map((skill, skillIndex) => <span className="chip" style={{ "--item-index": skillIndex } as React.CSSProperties} key={skill}>{skill}</span>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="resume" className="section-shell section-spacing scroll-mt-20">
        <Reveal>
          <div className="resume-cta relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.12] via-slate-900/80 to-blue-500/[0.08] p-7 sm:p-12">
            <p className="eyebrow">07 / Resume</p>
            <span className="resume-ready"><i />ATS PDF ready</span>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Experience across applications, databases, and infrastructure.</h2>
            <p className="mt-5 max-w-3xl leading-7 text-slate-300">A scanner-friendly, single-column resume covering C#/.NET applications, APIs, Microsoft Dynamics 365 Business Central, SQL/reporting, warehouse systems, and full-stack projects.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/resume" className="button button-primary">View web resume <ArrowUpRight size={16} /></Link>
              <a href="/resume.pdf" className="button button-secondary" download><Download size={16} /> Download ATS Resume</a>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="contact-section section-shell section-spacing scroll-mt-20 text-center">
        <Reveal>
          <p className="eyebrow justify-center">08 / Contact</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">Have a workflow, app, or system that needs building?</h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">I&apos;m open to software engineering, AI automation, infrastructure, and Dynamics 365 Business Central work.</p>
          <div className="contact-terminal"><div><span>CONTACT.SHELL</span><i />ready</div><p><b>&gt;</b> contact --jesus</p><p><b>&gt;</b> github <em>ready</em></p><p><b>&gt;</b> resume <em>ready</em></p><p><b>&gt;</b> email <em>ready</em></p></div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${contact.email}`} className="button button-primary"><Mail size={16} /> Email me</a>
            <a href={contact.github} target="_blank" rel="noreferrer" className="button button-secondary"><Github size={16} /> GitHub</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="button button-secondary"><Linkedin size={16} /> LinkedIn</a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
