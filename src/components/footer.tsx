import Link from "next/link";

function Mark({ height = 24, color = "#ffffff" }: { height?: number; color?: string }) {
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

export function Footer() {
  return (
    <footer style={{ background: "#23258c", color: "#fff" }}>
      <div className="max-w-[1280px] mx-auto px-8 pt-20 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_2fr] gap-16 pb-14">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="WRKR Holding Co. — home">
              <Mark height={24} color="#fff" />
              <div className="flex flex-col leading-none">
                <span
                  className="text-[18px] font-[800] tracking-[-0.02em] text-white"
                  style={{ fontFamily: "'Gilroy','Inter',sans-serif" }}
                >
                  WRKR
                </span>
                <span
                  className="text-[8.5px] font-semibold tracking-[0.32em] uppercase"
                  style={{ color: "rgba(255,255,255,0.7)", marginTop: 1 }}
                >
                  HOLDING&nbsp;CO.
                </span>
              </div>
            </Link>
            <p className="text-[14px] leading-relaxed max-w-[300px]" style={{ color: "rgba(255,255,255,0.8)" }}>
              We build digital infrastructure for the institutions that hold society together. Rooted in Africa. Working globally.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p
                className="text-[11px] font-[800] tracking-[0.22em] uppercase mb-4"
                style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Gilroy','Inter',sans-serif" }}
              >
                Company
              </p>
              <ul className="space-y-2 text-[14px]" style={{ color: "rgba(255,255,255,0.85)" }}>
                <li><Link href="/about"   className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/team"    className="hover:text-white transition-colors">Team</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <p
                className="text-[11px] font-[800] tracking-[0.22em] uppercase mb-4"
                style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Gilroy','Inter',sans-serif" }}
              >
                Portfolio
              </p>
              <ul className="space-y-2 text-[14px]" style={{ color: "rgba(255,255,255,0.85)" }}>
                <li><a href="https://orchestrate.global"   target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Orchestrate</a></li>
                <li><a href="https://piipul.co"            target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Piipul</a></li>
                <li><a href="https://slicefinance.africa"  target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Slice Finance</a></li>
                <li><a href="https://wavepoint.africa"     target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Wavepoint</a></li>
              </ul>
            </div>

            <div>
              <p
                className="text-[11px] font-[800] tracking-[0.22em] uppercase mb-4"
                style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Gilroy','Inter',sans-serif" }}
              >
                Work
              </p>
              <ul className="space-y-2 text-[14px]" style={{ color: "rgba(255,255,255,0.85)" }}>
                <li><Link href="/work" className="hover:text-white transition-colors">Digital Public Infrastructure</Link></li>
                <li><Link href="/work" className="hover:text-white transition-colors">Payment solutions</Link></li>
                <li><Link href="/work" className="hover:text-white transition-colors">Policy advisory</Link></li>
                <li><Link href="/work" className="hover:text-white transition-colors">Implementation</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.18)" }}>
        <div className="max-w-[1280px] mx-auto px-8 py-5 flex flex-wrap gap-x-3 gap-y-1 items-center text-[12px]" style={{ color: "rgba(255,255,255,0.65)" }}>
          <span>© 2026 WRKR Holding Co.</span>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>·</span>
          <Link href="/" className="hover:text-white transition-colors">getwrkr.com</Link>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>·</span>
          <a href="mailto:info@getwrkr.com" className="hover:text-white transition-colors">info@getwrkr.com</a>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>·</span>
          <a href="tel:+16466316118" className="hover:text-white transition-colors">+1 646 631 6118</a>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>·</span>
          <span>Rooted in Africa. Working globally.</span>
        </div>
      </div>
    </footer>
  );
}
