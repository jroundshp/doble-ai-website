"use client";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold tracking-tight">
          doble<span className="text-orange-500">AI</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-[#a3a3a3]">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#work" className="hover:text-white transition-colors">Our Work</a>
          <a href="/translation" className="hover:text-white transition-colors">Translation</a>
          <a href="/blog" className="hover:text-white transition-colors">Blog</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-400 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
          >
            Free Audit
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-5 bg-white transition-transform duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-transform duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-white/[0.06] px-6 py-4 flex flex-col gap-4 text-sm text-[#a3a3a3]">
          <a href="#services" onClick={close} className="hover:text-white transition-colors py-1">Services</a>
          <a href="#work" onClick={close} className="hover:text-white transition-colors py-1">Our Work</a>
          <a href="/translation" onClick={close} className="hover:text-white transition-colors py-1">Translation</a>
          <a href="/blog" onClick={close} className="hover:text-white transition-colors py-1">Blog</a>
          <a href="#about" onClick={close} className="hover:text-white transition-colors py-1">About</a>
          <a href="#contact" onClick={close} className="hover:text-white transition-colors py-1">Contact</a>
        </div>
      )}
    </nav>
  );
}
