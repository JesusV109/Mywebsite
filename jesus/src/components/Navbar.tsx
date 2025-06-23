"use client"; // Required for client-side interactivity

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-lg font-bold">
          Hello!
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link href="/projects" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Projects
            </Link>
            <Link href="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
