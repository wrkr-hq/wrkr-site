import Link from "next/link";

function WrkrLogoFooter() {
  return (
    <div className="flex items-center gap-2.5">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 4 L3 14 Q3 20 11 20 Q19 20 19 14 L19 4"
          stroke="#ffffff"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-base font-black tracking-tight text-white">WRKR</span>
        <span className="text-[8px] font-semibold tracking-[0.18em] uppercase text-white/40">
          Holding Co.
        </span>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1B2068] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/">
            <WrkrLogoFooter />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-[220px]">
            We build digital infrastructure for the institutions that hold
            society together. Rooted in Africa. Working globally.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold mb-5 uppercase text-[9px] tracking-[0.2em] text-white/40">Company</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="/team" className="hover:text-white transition-colors">Team</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Portfolio */}
        <div>
          <h4 className="font-bold mb-5 uppercase text-[9px] tracking-[0.2em] text-white/40">Portfolio</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href="#" className="hover:text-white transition-colors">Orchestrate</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Piipul</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Slice Finance</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Wavepoint</Link></li>
          </ul>
        </div>

        {/* Work */}
        <div>
          <h4 className="font-bold mb-5 uppercase text-[9px] tracking-[0.2em] text-white/40">Work</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href="/work" className="hover:text-white transition-colors">Digital Public Infrastructure</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Payment solutions</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Policy advisory</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Implementation</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap gap-x-4 gap-y-2 items-center text-xs text-gray-500">
          <span>© 2026 WRKR Holding Co.</span>
          <span>·</span>
          <Link href="/" className="hover:text-gray-300 transition-colors">getwrkr.com</Link>
          <span>·</span>
          <a href="mailto:info@getwrkr.com" className="hover:text-gray-300 transition-colors">info@getwrkr.com</a>
          <span>·</span>
          <a href="tel:+16466316118" className="hover:text-gray-300 transition-colors">+1 646 631 6118</a>
          <span>·</span>
          <span>Rooted in Africa. Working globally.</span>
        </div>
      </div>
    </footer>
  );
}
