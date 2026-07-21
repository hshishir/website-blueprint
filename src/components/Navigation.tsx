"use client";

import { useState } from "react";
import { siteConfig } from "../../config/site";

export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/85 backdrop-blur-xl">
      <div className="container-shell flex h-18 items-center justify-between">
        <a href="#" className="focus-ring font-semibold tracking-tight">
          <span className="text-[#c8ff00]">●</span> {siteConfig.shortName}
        </a>
        <button
          type="button"
          className="focus-ring rounded-lg border border-white/15 px-3 py-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {siteConfig.navigation.map((item) => (
            <a key={item.href} href={item.href} className="focus-ring text-sm text-[#9a9a9a] hover:text-white">
              {item.label}
            </a>
          ))}
          <a href={siteConfig.primaryCta.href} className="focus-ring rounded-full bg-[#c8ff00] px-5 py-2.5 text-sm font-semibold text-black">
            {siteConfig.primaryCta.label}
          </a>
        </nav>
      </div>
      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="container-shell grid gap-4 border-t border-white/10 py-5 md:hidden">
          {siteConfig.navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
