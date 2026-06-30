"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "About",     href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Work",      href: "/work" },
  { name: "Team",      href: "/team" },
  { name: "Contact",   href: "/contact" },
];

function Mark({ height = 22, color = "currentColor" }: { height?: number; color?: string }) {
  // WRKR brand mark — smile curve + dot. viewBox fitted to the artwork ink box.
  return (
    <svg
      height={height}
      width={height * (425 / 176)}
      viewBox="547 1084 425 176"
      fill={color}
      aria-hidden="true"
    >
      <path
        d="m 0,0 0.036,-41.136 c -15.986,6.842 -30.048,18.049 -42.073,33.621 -22.755,-27.9 -50.054,-41.863 -81.729,-41.89 -27.879,-0.025 -51.345,9.475 -70.344,28.441 -21.608,21.513 -32.397,48.758 -32.426,81.735 l 41.817,0.037 c 0.022,-25.382 7.01,-44.985 21.017,-58.912 11.4,-11.435 24.72,-17.09 39.906,-17.077 15.242,0.013 28.553,5.692 39.933,17.147 13.926,13.951 20.88,33.565 20.857,58.948 l 41.818,0.036 C -21.165,34.32 -14.802,14.662 -2.098,2.037 -1.417,1.36 -0.681,0.68 0,0"
        transform="matrix(1.3333333,0,0,-1.3333333,859.43813,1184.0104)"
      />
      <path
        d="m 0,0 c 0.391,-17.091 -13.146,-31.264 -30.238,-31.655 -17.091,-0.391 -31.263,13.146 -31.655,30.238 -0.392,17.091 13.146,31.263 30.238,31.655 C -14.564,30.629 -0.392,17.091 0,0"
        transform="matrix(1.3333333,0,0,-1.3333333,961.93493,1134.9993)"
      />
    </svg>
  );
}

function WrkrLogo({ dark = false }: { dark?: boolean }) {
  const indigo = "#23258c";
  const color = dark ? "#ffffff" : indigo;
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="WRKR Holding Co. — home">
      <Mark height={24} color={color} />
      <div className="flex flex-col leading-none">
        <span
          className="text-[18px] font-[800] tracking-[-0.02em]"
          style={{ fontFamily: "'Gilroy','Inter',sans-serif", color }}
        >
          WRKR
        </span>
        <span
          className="text-[8.5px] font-semibold tracking-[0.32em] uppercase"
          style={{ color: dark ? "rgba(255,255,255,0.7)" : "#6b6e88", marginTop: 1 }}
        >
          HOLDING&nbsp;CO.
        </span>
      </div>
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: "rgba(247,246,241,0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottomColor: "#efeee7",
      }}
    >
      <div className="max-w-[1280px] mx-auto flex items-center gap-8 px-8 py-4">
        <WrkrLogo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7 flex-1 ml-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-[14px] font-medium pb-0.5 border-b-2 transition-colors",
                pathname === link.href
                  ? "text-[#23258c] border-[#23258c]"
                  : "text-[#0e0e1a] border-transparent hover:text-[#23258c]"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex ml-auto">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-[800] text-white rounded-[6px] transition-colors"
            style={{
              fontFamily: "'Gilroy','Inter',sans-serif",
              background: "#23258c",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1c1d70")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#23258c")}
          >
            Get in touch <ArrowRight size={13} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden ml-auto text-[#23258c]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 border-b p-6 flex flex-col gap-4 shadow-lg"
          style={{ background: "#f7f6f1", borderBottomColor: "#efeee7" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-base font-medium py-1",
                pathname === link.href ? "text-[#23258c] font-semibold" : "text-[#0e0e1a]"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center gap-2 text-white px-5 py-3 text-sm font-bold mt-2 rounded-[6px]"
            style={{ background: "#23258c", fontFamily: "'Gilroy','Inter',sans-serif" }}
          >
            Get in touch <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </nav>
  );
}

export { WrkrLogo };
