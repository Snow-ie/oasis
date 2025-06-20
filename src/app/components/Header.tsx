"use client";

import Link from "next/link";
import { Logo } from "./Logo";

export default function Header() {
  return (
    <header className="w-full bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-blue-100">
            About Us
          </a>
          <a href="#features" className="hover:text-blue-100">
            Features
          </a>
          <a href="#resources" className="hover:text-blue-100">
            Resources
          </a>
        </nav>

        <Link href="/auth">
          <button className="bg-white text-primary font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition">
            Get started
          </button>
        </Link>
      </div>
    </header>
  );
}
