import Image from "next/image";
import Link from "next/link";
import { ArrowDown, FileText, Github, Mail } from "lucide-react";
import { contact } from "@/data/portfolio";

const tags = ["C# / .NET apps", "API development", "Dynamics 365 Business Central", "SQL reporting", "Warehouse systems", "Linux / homelab"];

export default function Hero() {
  return (
    <section id="home" className="hero relative flex min-h-[90vh] items-center overflow-hidden pt-20">
      <div className="hero-scanline" aria-hidden="true" />
      <div className="section-shell grid items-center gap-14 py-16 lg:grid-cols-[1fr_300px] lg:py-24">
        <div>
          <p className="eyebrow hero-enter hero-eyebrow">Jesus Vazquez / Software Engineer</p>
          <h1 className="hero-title mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.5rem]">
            <span className="hero-line"><span>Software Engineer building</span></span>
            <span className="hero-line"><span>the systems between software,</span></span>
            <span className="hero-line"><span>infrastructure, and operations.</span></span>
          </h1>
          <p className="hero-enter hero-copy mt-7 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            I build C#/.NET applications and APIs that connect real work to clean software — including Dynamics 365 Business Central, SQL reporting, Linux servers, and warehouse workflows.
          </p>
          <div className="mt-7 flex max-w-3xl flex-wrap gap-2">
            {tags.map((tag, index) => <span className="chip hero-chip" style={{ "--item-index": index } as React.CSSProperties} key={tag}>{tag}</span>)}
          </div>
          <div className="hero-actions mt-9 flex flex-wrap gap-3">
            <Link href="#projects" className="button button-primary">View Work <ArrowDown size={16} /></Link>
            <Link href="/resume" className="button button-secondary"><FileText size={16} /> Resume</Link>
            <a href={contact.github} target="_blank" rel="noreferrer" className="button button-secondary"><Github size={16} /> GitHub</a>
            <a href={`mailto:${contact.email}`} className="button button-ghost"><Mail size={16} /> Contact</a>
          </div>
        </div>

        <div className="hero-portrait relative mx-auto w-full max-w-[300px]">
          <div className="portrait-frame relative overflow-hidden border border-white/10 bg-slate-900 p-2">
            <Image src="/me.jpg" alt="Portrait of Jesus Vazquez" width={3024} height={4032} sizes="(max-width: 1024px) 240px, 300px" className="aspect-[4/5] w-full object-cover object-top" priority quality={78} />
          </div>
          <div className="system-stamp absolute -bottom-5 -left-5 border border-cyan-400/30 bg-slate-950 px-4 py-3 font-mono text-[11px] leading-5 text-slate-300">
            <span className="status-dot" aria-hidden="true" /><span className="text-cyan-400">status</span> / building<br />New Jersey, USA
          </div>
          <div className="hero-terminal" aria-label="System initialization status">
            <div><i /><i /><i /><span>ops.console</span></div>
            <p><b>&gt;</b> init portfolio</p>
            <p><b>&gt;</b> loading systems...</p>
            <p><b>&gt;</b> ui / api / sql / linux / ai <em>online</em></p>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to about section"><span />Scroll</a>
    </section>
  );
}
