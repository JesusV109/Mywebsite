import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Jesus Vazquez · Built with Next.js & Tailwind
        </p>
        <div className="flex gap-5">
          <a href="https://github.com/JesusV109" target="_blank" className="hover:text-blue-600"> <Github size={18} /> </a>
          <a href="https://www.linkedin.com/in/jesus-vazquez-02b450202/" target="_blank" className="hover:text-blue-600"> <Linkedin size={18} /> </a>
          <a href="mailto:albertovazquez86av@gmail.com" className="hover:text-blue-600"> <Mail size={18} /> </a>
        </div>
      </div>
    </footer>
  );
}
