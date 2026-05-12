"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Work", href: "/work" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

function WrkrLogo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 4 L3 14 Q3 20 11 20 Q19 20 19 14 L19 4"
          stroke={dark ? "#ffffff" : "#1B2068"}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span className={cn("text-base font-black tracking-tight", dark ? "text-white" : "text-primary")}>
          WRKR
        </span>
        <span className={cn("text-[8px] font-semibold tracking-[0.18em] uppercase", dark ? "text-white/50" : "text-gray-400")}>
          Holding Co.
        </span>
      </div>
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <WrkrLogo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary font-semibold" : "text-gray-600"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Get in touch <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-base font-medium py-1",
                pathname === link.href ? "text-primary font-semibold" : "text-gray-600"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 text-sm font-semibold mt-2"
          >
            Get in touch <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </nav>
  );
}

export { WrkrLogo };
