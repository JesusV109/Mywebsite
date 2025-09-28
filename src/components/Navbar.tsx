"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const Item = ({ href, label }: { href: string; label: string }) => {
    const active =
      (pathname === "/" && href.startsWith("/#")) ||
      pathname === href;
    return (
      <Link
        href={href}
        className={`px-3 py-2 rounded-lg text-sm transition hover:bg-gray-100 dark:hover:bg-gray-800 ${
          active ? "font-semibold" : "text-gray-600 dark:text-gray-300"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold">JV</Link>
        <div className="flex items-center gap-1">
          <Item href="/" label="Home" />
          <Item href="/about" label="About" />
          <Item href="/projects" label="Projects" />
          <Item href="/#contact" label="Contact" />
        </div>
      </nav>
    </header>
  );
}
