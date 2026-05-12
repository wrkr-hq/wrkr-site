import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

/* ── inline SVG components ─────────────────────────────────────────── */

function BuildingIllustration() {
  return (
    <svg
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Pediment / roof */}
      <path d="M60 200 L300 60 L540 200" stroke="#1B2068" strokeWidth="2" opacity="0.15" />
      {/* Entablature */}
      <rect x="60" y="200" width="480" height="18" stroke="#1B2068" strokeWidth="1.5" opacity="0.12" />
      {/* Columns */}
      {[100, 160, 220, 280, 340, 400, 460].map((x) => (
        <rect key={x} x={x} y="218" width="14" height="240" stroke="#1B2068" strokeWidth="1.2" opacity="0.10" />
      ))}
      {/* Stylobate */}
      <rect x="60" y="455" width="480" height="10" stroke="#1B2068" strokeWidth="1.5" opacity="0.12" />
      <rect x="40" y="465" width="520" height="8" stroke="#1B2068" strokeWidth="1.5" opacity="0.10" />
      {/* Steps */}
      <rect x="20" y="473" width="560" height="6" stroke="#1B2068" strokeWidth="1" opacity="0.08" />
    </svg>
  );
}

function AfricaMap() {
  const countries = [
    { x: 182, y: 190, label: "Nigeria", primary: true },
    { x: 152, y: 215, label: "Ghana", primary: false },
    { x: 338, y: 195, label: "Kenya", primary: false },
    { x: 316, y: 188, label: "Uganda", primary: false },
    { x: 322, y: 208, label: "Rwanda", primary: false },
    { x: 338, y: 240, label: "Tanzania", primary: false },
    { x: 282, y: 295, label: "Zambia", primary: false },
  ];

  return (
    <svg viewBox="0 0 500 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg ml-auto">
      {/* Africa outline — simplified */}
      <path
        d="M148,18 L190,10 L230,14 L268,8 L308,16 L340,30 L368,52 L384,78 L390,108
           L386,130 L396,152 L400,178 L392,204 L408,228 L414,258 L404,290
           L386,318 L366,344 L342,370 L316,396 L290,416 L264,428
           L238,432 L212,426 L188,410 L166,388 L144,360 L122,328
           L102,296 L88,264 L78,232 L72,200 L70,170 L78,144
           L68,124 L64,104 L72,82 L90,62 L112,44 L148,18 Z"
        stroke="#1B2068"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
      {/* Region highlights */}
      <path
        d="M148,120 L220,110 L240,140 L230,170 L200,185 L165,180 L140,160 L132,140 Z"
        stroke="#1B2068"
        strokeWidth="0.8"
        fill="#EDECEA"
        opacity="0.6"
      />
      <path
        d="M280,140 L360,132 L380,165 L370,200 L340,215 L300,210 L278,185 L272,160 Z"
        stroke="#1B2068"
        strokeWidth="0.8"
        fill="#EDECEA"
        opacity="0.6"
      />
      {/* Internal borders (simplified) */}
      <path d="M140,150 L240,145" stroke="#1B2068" strokeWidth="0.6" opacity="0.3" />
      <path d="M278,170 L380,165" stroke="#1B2068" strokeWidth="0.6" opacity="0.3" />
      <path d="M200,140 L200,185" stroke="#1B2068" strokeWidth="0.6" opacity="0.3" />
      <path d="M310,150 L316,210" stroke="#1B2068" strokeWidth="0.6" opacity="0.3" />

      {/* Latitude lines */}
      <line x1="60" y1="80" x2="440" y2="80" stroke="#1B2068" strokeWidth="0.4" strokeDasharray="4 4" opacity="0.2" />
      <line x1="60" y1="180" x2="440" y2="180" stroke="#1B2068" strokeWidth="0.4" strokeDasharray="4 4" opacity="0.2" />
      <line x1="60" y1="320" x2="440" y2="320" stroke="#1B2068" strokeWidth="0.4" strokeDasharray="4 4" opacity="0.2" />
      <text x="62" y="76" fontSize="9" fill="#1B2068" opacity="0.35" fontFamily="monospace">+23.5°</text>
      <text x="62" y="176" fontSize="9" fill="#1B2068" opacity="0.35" fontFamily="monospace">8°</text>
      <text x="62" y="316" fontSize="9" fill="#1B2068" opacity="0.35" fontFamily="monospace">-23.5°</text>

      {/* Compass */}
      <circle cx="448" cy="40" r="14" stroke="#1B2068" strokeWidth="1" opacity="0.5" />
      <polygon points="448,26 452,40 448,34 444,40" fill="#1B2068" opacity="0.5" />
      <polygon points="448,54 444,40 448,46 452,40" fill="#1B2068" opacity="0.2" />
      <text x="445" y="24" fontSize="8" fill="#1B2068" opacity="0.6" fontFamily="monospace">N</text>

      {/* Country dots + labels */}
      {countries.map((c) => (
        <g key={c.label}>
          {c.primary ? (
            <>
              <circle cx={c.x} cy={c.y} r="7" stroke="#B08835" strokeWidth="1.5" fill="none" />
              <circle cx={c.x} cy={c.y} r="3.5" fill="#B08835" />
            </>
          ) : (
            <circle cx={c.x} cy={c.y} r="4" fill="#B08835" opacity="0.75" />
          )}
          <text
            x={c.x + (c.label === "Ghana" ? -8 : c.label === "Uganda" || c.label === "Rwanda" ? 8 : 10)}
            y={c.y + (c.label === "Ghana" ? 14 : c.label === "Tanzania" ? 12 : -6)}
            fontSize="9.5"
            fontWeight="600"
            fill="#1B2068"
            fontFamily="sans-serif"
            textAnchor={c.label === "Ghana" ? "middle" : "start"}
          >
            {c.label}
          </text>
        </g>
      ))}

      {/* Legend */}
      <g transform="translate(60,470)">
        <circle cx="6" cy="6" r="5" stroke="#B08835" strokeWidth="1.5" fill="none" />
        <circle cx="6" cy="6" r="2.5" fill="#B08835" />
        <text x="16" y="10" fontSize="9" fill="#1B2068" opacity="0.6" fontFamily="sans-serif">Primary base</text>

        <circle cx="110" cy="6" r="4" fill="#B08835" opacity="0.75" />
        <text x="120" y="10" fontSize="9" fill="#1B2068" opacity="0.6" fontFamily="sans-serif">Active engagement</text>

        <rect x="214" y="2" width="10" height="8" stroke="#1B2068" strokeWidth="1" fill="none" opacity="0.5" />
        <text x="230" y="10" fontSize="9" fill="#1B2068" opacity="0.6" fontFamily="sans-serif">Region of focus</text>
      </g>
    </svg>
  );
}

/* ── page ───────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* HERO */}
      <section className="relative pt-28 pb-20 px-6 bg-[#EDECEA] overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute right-0 top-0 w-[55%] h-full opacity-100 pointer-events-none">
          <BuildingIllustration />
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          {/* Badge */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-0.5 h-5 bg-primary" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
                WRKR Holding Co. · Est. 2019
              </span>
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn delay={0.1}>
            <h1 className="text-[clamp(48px,7vw,88px)] font-black leading-[0.95] tracking-tight text-primary max-w-[720px] mb-10">
              We build{" "}
              <span className="text-[#3B54D4]">digital<br />infrastructure</span>{" "}
              for the<br />
              institutions that hold<br />
              society together.
            </h1>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <FadeIn delay={0.2} className="space-y-8">
              <p className="text-gray-600 text-base leading-relaxed max-w-sm">
                Public agencies. Regulated industries. The work that has to be
                right. We invest in operators building the systems governments
                and businesses depend on.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 text-sm font-bold hover:bg-primary/90 transition-colors"
                >
                  See the portfolio <ArrowRight size={15} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-primary text-primary px-7 py-3.5 text-sm font-bold hover:bg-primary/5 transition-colors"
                >
                  Work with us
                </Link>
              </div>
            </FadeIn>

            {/* Stats card */}
            <FadeIn delay={0.35} className="lg:justify-self-end">
              <div>
                <p className="font-bold text-primary text-sm mb-1">Rooted in Africa.</p>
                <p className="text-gray-400 text-sm font-mono mb-4">Working globally.</p>
                <div className="space-y-0.5 text-gray-400 text-sm font-mono">
                  <p>11 countries</p>
                  <p>26 state govts</p>
                  <p>100+ companies served</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TWO-COLUMN PROPOSITION */}
      <section className="py-20 px-6 bg-[#EDECEA]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <FadeIn>
            <div className="bg-white p-12 space-y-4 h-full">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#3B54D4]">WE INVEST</p>
              <h3 className="text-2xl font-bold text-primary leading-snug">
                Operators in payments, identity, banking, and compliance.
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Verticals where reliability isn't optional. We back founders
                building the connective tissue of regulated digital services —
                and stay in for the long arc.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="bg-white p-12 space-y-4 h-full">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#B08835]">WE BUILD</p>
              <h3 className="text-2xl font-bold text-primary leading-snug">
                Digital public infrastructure for African governments.
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Advisory, implementation, and co-investment in public projects
                — identity systems, licensing, payments, and the policy
                frameworks that make them last.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* THE STACK WE BELIEVE IN */}
      <section className="py-24 px-6 bg-[#F4F3EE]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn className="space-y-6 lg:pt-8">
            <div className="flex items-center gap-3">
              <div className="w-6 h-0.5 bg-[#B08835]" />
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#B08835]">
                THE STACK WE BELIEVE IN
              </p>
            </div>
            <h2 className="text-4xl font-black text-primary leading-tight tracking-tight">
              Four layers.<br />Built to interoperate.
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm max-w-sm">
              Identity, payments, compliance, and banking are the connective
              tissue between citizens, businesses, and governments. We invest
              and build at each layer — because none of them work in isolation,
              and the value compounds when they do.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-2">
              {/* Column headers */}
              <div className="grid grid-cols-[180px_1fr_1fr_1fr] gap-2 pb-1">
                <div />
                {["CITIZENS", "BUSINESSES", "GOV'T"].map((h) => (
                  <p key={h} className="text-[9px] uppercase tracking-[0.15em] font-bold text-gray-400 text-center">
                    {h}
                  </p>
                ))}
              </div>
              {/* Divider lines under headers */}
              <div className="grid grid-cols-[180px_1fr_1fr_1fr] gap-2 pb-2">
                <div />
                {[0, 1, 2].map((i) => (
                  <div key={i} className="border-t border-gray-300" />
                ))}
              </div>

              {[
                { name: "Identity", sub: "Who you are", bg: "bg-[#2D3B9E]" },
                { name: "Payments", sub: "How value moves", bg: "bg-[#3B4CC0]" },
                { name: "Compliance", sub: "What gets recorded", bg: "bg-[#B08835]" },
                { name: "Banking", sub: "Where capital sits", bg: "bg-[#1A1A2E]" },
              ].map((layer) => (
                <div
                  key={layer.name}
                  className={`${layer.bg} grid grid-cols-[180px_1fr_1fr_1fr] gap-2 px-4 py-4 items-center`}
                >
                  <div>
                    <p className="text-white font-bold text-sm">{layer.name}</p>
                    <p className="text-white/55 text-xs">{layer.sub}</p>
                  </div>
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="flex justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    </div>
                  ))}
                </div>
              ))}

              <div className="pt-3 border-t border-gray-300">
                <p className="text-[9px] uppercase tracking-[0.15em] font-bold text-gray-400">
                  Digital Public Infrastructure · WRKR Holding Co.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-24 px-6 bg-[#EDECEA]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-0.5 bg-primary" />
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">PORTFOLIO</p>
              </div>
              <h2 className="text-4xl font-black text-primary tracking-tight">
                Four operators. One thesis.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2.5 text-sm font-bold hover:bg-primary hover:text-white transition-colors shrink-0"
            >
              Explore the portfolio <ArrowRight size={14} />
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                initial: "O",
                iconBg: "bg-[#2D3B9E]",
                iconText: "text-white",
                category: "DIGITAL PAYMENTS",
                name: "Orchestrate",
                desc: "Integrated payment infrastructure for governments and regulated commerce.",
                link: "orchestrate.global",
                imgTag: "Payments · photo",
                imgDesc: "Wide shot of port / customs hall — commerce flows",
              },
              {
                initial: "P",
                iconBg: "bg-[#B08835]",
                iconText: "text-white",
                category: "DIGITAL IDENTITY",
                name: "Piipul",
                desc: "Identity verification infrastructure — the foundation layer for everything downstream.",
                link: "piipul.co",
                imgTag: "Identity · photo",
                imgDesc: "Hands holding national ID card — close, dignified",
              },
              {
                initial: "S",
                iconBg: "bg-[#1A1A2E]",
                iconText: "text-white",
                category: "COMPLIANCE & REGULATION",
                name: "Slice Finance",
                desc: "Compliance infrastructure for regulated industries.",
                link: "slicefinance.africa",
                imgTag: "Compliance · photo",
                imgDesc: "Trading floor or regulator office — controlled, formal",
              },
              {
                initial: "W",
                iconBg: "bg-white border border-primary",
                iconText: "text-primary",
                category: "BANKING-AS-A-SERVICE",
                name: "Wavepoint",
                desc: "Banking infrastructure for fintechs, platforms, and embedded finance providers.",
                link: "wavepoint.africa",
                imgTag: "Banking · photo",
                imgDesc: "Modern bank facade — architectural, head-on",
              },
            ].map((op, i) => (
              <FadeIn key={op.name} delay={i * 0.08}>
                <div className="bg-white flex flex-col h-full">
                  {/* Photo placeholder */}
                  <div className="bg-gray-200 h-44 relative p-3 flex items-start justify-between">
                    <span className="text-[10px] bg-white/90 px-2 py-1 text-gray-600 font-medium">
                      {op.imgTag}
                    </span>
                    <span className="text-[10px] text-gray-500 italic max-w-[110px] text-right leading-snug">
                      {op.imgDesc}
                    </span>
                  </div>
                  {/* Card body */}
                  <div className="p-6 space-y-3 flex flex-col flex-1">
                    <div
                      className={`w-10 h-10 flex items-center justify-center font-bold text-base ${op.iconBg} ${op.iconText}`}
                    >
                      {op.initial}
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.18em] text-gray-400 font-bold mb-0.5">
                        {op.category}
                      </p>
                      <h4 className="text-base font-bold text-primary">{op.name}</h4>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1">{op.desc}</p>
                    <Link
                      href="#"
                      className="text-sm text-[#3B54D4] font-medium hover:underline inline-flex items-center gap-1"
                    >
                      {op.link} <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* STATS — PROOF · TRACK RECORD */}
      <section className="py-24 px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-white/35 mb-16">
            PROOF · TRACK RECORD
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-8">
            {[
              { val: "$100M+", label: "Processed through our payments infrastructure" },
              { val: "11", label: "Countries served across Africa, Europe, and North America" },
              { val: "26", label: "State governments served across Nigeria" },
              { val: "100+", label: "Companies served across our markets" },
              { val: "89%", label: "Reduction in fraud across implementations" },
              { val: "142%", label: "Revenue growth for government partners" },
            ].map((stat) => (
              <FadeIn key={stat.val} direction="up">
                <div>
                  <p className="text-5xl md:text-6xl font-black tracking-tight mb-2">{stat.val}</p>
                  <p className="text-sm text-white/50 leading-snug max-w-[200px]">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE WE WORK */}
      <section className="py-24 px-6 bg-[#EDECEA]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-6 h-0.5 bg-primary" />
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">WHERE WE WORK</p>
            </div>
            <h2 className="text-4xl font-black text-primary leading-tight tracking-tight">
              Rooted in Africa.<br />Working globally.
            </h2>

            <div className="space-y-0">
              {[
                {
                  region: "AFRICA",
                  countries: "Nigeria · Ghana · Zambia · Rwanda · Tanzania · Kenya · Uganda",
                },
                {
                  region: "EUROPE",
                  countries: "United Kingdom · France",
                },
                {
                  region: "NORTH AMERICA",
                  countries: "United States · Canada",
                },
              ].map((r) => (
                <div key={r.region} className="py-4 border-t border-gray-300">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#3B54D4] mb-1">
                    {r.region}
                  </p>
                  <p className="text-gray-600 text-sm">{r.countries}</p>
                </div>
              ))}
              <div className="border-t border-gray-300" />
            </div>

            <div className="bg-[#1A1A2E] text-white p-7 space-y-2">
              <p className="text-[9px] uppercase tracking-[0.18em] font-bold text-gray-500">
                STRATEGIC GOAL · 2030
              </p>
              <p className="text-lg font-bold leading-tight">
                15 African countries served with interoperable digital systems.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <AfricaMap />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#0F0F1A] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-12">
          <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight max-w-xl">
            Building something that has to be right? Let's talk.
          </h2>
          <div className="space-y-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#B08835] text-white px-8 py-4 text-sm font-bold hover:bg-[#9A7628] transition-colors"
            >
              Get in touch <ArrowRight size={16} />
            </Link>
            <p className="text-gray-500 text-sm">info@getwrkr.com · +1 646 631 6118</p>
          </div>
        </div>
      </section>

    </div>
  );
}
