"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["Home", "#home"], ["About", "#about"], ["Projects", "#projects"], ["Experience", "#experience"],
  ["Skills", "#skills"], ["Resume", "#resume"], ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = links.map(([, href]) => document.getElementById(href.slice(1))).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (current) setActive(current.target.id);
    }, { rootMargin: "-20% 0px -65%", threshold: [0, 0.25] });
    sections.forEach((section) => observer.observe(section));

    let ticking = false;
    const updateProgress = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const height = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(height > 0 ? Math.min(100, (window.scrollY / height) * 100) : 0);
        ticking = false;
      });
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", updateProgress); };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-slate-950/95 supports-[backdrop-filter]:bg-slate-950/85 supports-[backdrop-filter]:backdrop-blur-md">
      <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" />
      <nav className="section-shell flex h-16 items-center justify-between" aria-label="Primary navigation">
        <Link href="/#home" className="font-mono text-sm font-semibold tracking-wider text-white" onClick={() => setOpen(false)}>JV<span className="text-cyan-400">.</span></Link>
        <button className="rounded-lg p-2 text-slate-300 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-menu" aria-label="Toggle navigation">{open ? <X size={20} /> : <Menu size={20} />}</button>
        <div id="primary-menu" className={`nav-menu ${open ? "nav-menu-open" : ""} absolute inset-x-4 top-[4.5rem] flex flex-col gap-1 rounded-xl border border-white/10 bg-slate-950 p-3 shadow-xl md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
          {links.map(([label, href]) => <Link key={href} href={`/${href}`} aria-current={active === href.slice(1) ? "page" : undefined} onClick={() => setOpen(false)} className={`nav-link rounded-lg px-3 py-2 text-sm transition ${active === href.slice(1) ? "nav-link-active" : "text-slate-400"}`}>{label}</Link>)}
        </div>
      </nav>
    </header>
  );
}
