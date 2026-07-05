import { contact } from "@/data/portfolio";

const COPYRIGHT_YEAR = 2026;

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="section-shell flex flex-col gap-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {COPYRIGHT_YEAR} Jesus Vazquez</p>
        <div className="flex gap-5">
          <a className="hover:text-white" href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:text-white" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-white" href={`mailto:${contact.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
