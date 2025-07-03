"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const navItems = [
  { label: "About Us", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Resources", href: "#resources" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Logo />

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-blue-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Link
            href="/auth/sign-up"
            className="hidden md:inline-block bg-white text-primary font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Get started
          </Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(true)}
            className="md:hidden text-white"
          >
            <HiOutlineMenu size={28} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div className="relative w-full h-full flex flex-col items-center justify-center gap-10 text-white">
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute top-5 right-6 text-white"
            >
              <HiOutlineX size={32} />
            </button>

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-semibold hover:text-blue-200 transition"
              >
                {item.label}
              </a>
            ))}

            <Link
              href="/auth/sign-up"
              className="mt-4 inline-block bg-white text-primary font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition"
              onClick={() => setOpen(false)}
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
