import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

/* ── CivicArch — colonnade/parliament background for hero ────────────── */
function CivicArch() {
  return (
    <svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      style={{ width: "100%", height: "100%", position: "absolute", inset: 0, opacity: 0.78 }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#f7f6f1" />
          <stop offset="100%" stopColor="#efeee7" />
        </linearGradient>
      </defs>
      <rect width="1200" height="600" fill="url(#sky)" />
      {/* horizon */}
      <line x1="0" y1="460" x2="1200" y2="460" stroke="#23258c" strokeWidth="1.2" opacity="0.35" />
      {/* distant building blocks */}
      <g opacity="0.18" fill="#23258c">
        <rect x="40"  y="370" width="120" height="90" />
        <rect x="180" y="350" width="80"  height="110" />
        <rect x="980" y="360" width="120" height="100" />
        <rect x="1120" y="380" width="60" height="80" />
      </g>
      {/* colonnade — stylized capitol/parliament */}
      <g>
        {/* base/steps */}
        <rect x="280" y="440" width="640" height="22" fill="#23258c" opacity="0.85" />
        <rect x="260" y="462" width="680" height="14" fill="#23258c" opacity="0.55" />
        {/* pediment */}
        <polygon points="280,260 600,180 920,260 920,280 280,280" fill="#23258c" opacity="0.92" />
        <polygon points="320,260 600,200 880,260" fill="#a3651f" opacity="0.55" />
        {/* columns */}
        {Array.from({ length: 9 }).map((_, i) => {
          const x = 300 + i * 76;
          return (
            <rect
              key={i}
              x={x}
              y="280"
              width="36"
              height="160"
              fill="#23258c"
              opacity={0.78 - i * 0.02}
            />
          );
        })}
        {/* central seal */}
        <circle cx="600" cy="230" r="10" fill="#a3651f" />
      </g>
      {/* foreground band */}
      <rect x="0" y="476" width="1200" height="124" fill="#0e0e1a" opacity="0.06" />
      {/* dot grid as 'people' */}
      <g fill="#23258c" opacity="0.4">
        {Array.from({ length: 24 }).map((_, i) => (
          <circle key={i} cx={120 + i * 40} cy={520 + (i % 3) * 4} r="2.2" />
        ))}
      </g>
    </svg>
  );
}

/* ── ConceptStack — layered DPI illustration ──────────────────────────── */
function ConceptStack() {
  const layers = [
    { y: 70,  label: "Identity",   sub: "Who you are",        color: "#23258c" },
    { y: 155, label: "Payments",   sub: "How value moves",    color: "#3a3cb0" },
    { y: 240, label: "Compliance", sub: "What gets recorded", color: "#a3651f" },
    { y: 325, label: "Banking",    sub: "Where capital sits", color: "#0e0e1a" },
  ];
  return (
    <svg viewBox="0 0 560 460" className="w-full h-auto" aria-hidden="true">
      <g
        fontFamily='"Gilroy","Inter",sans-serif'
        fontWeight="800"
        fontSize="11"
        letterSpacing="2.4"
        fill="#6b6e88"
      >
        <text x="30"  y="30">CITIZENS</text>
        <text x="230" y="30">BUSINESSES</text>
        <text x="420" y="30">GOV'T</text>
      </g>
      {[60, 280, 460].map((x, i) => (
        <line key={i} x1={x} y1="40" x2={x} y2="65" stroke="#c4c6d4" strokeWidth="1" />
      ))}
      {layers.map((l, i) => (
        <g key={i}>
          <rect x="30" y={l.y} width="500" height="60" fill={l.color} opacity={i === 2 ? 1 : 0.92} />
          <text
            x="50"
            y={l.y + 26}
            fontFamily='"Gilroy","Inter",sans-serif'
            fontWeight="800"
            fontSize="16"
            fill="#fff"
          >
            {l.label}
          </text>
          <text x="50" y={l.y + 46} fontFamily='"Inter",sans-serif' fontSize="11" fill="rgba(255,255,255,0.78)">
            {l.sub}
          </text>
          {[260, 330, 400, 470].map((x, k) => (
            <circle key={k} cx={x} cy={l.y + 30} r="2.5" fill="rgba(255,255,255,0.55)" />
          ))}
        </g>
      ))}
      <line x1="30" y1="410" x2="530" y2="410" stroke="#0e0e1a" strokeWidth="1.5" />
      <text x="30" y="435" fontFamily='"JetBrains Mono",monospace' fontSize="10" fill="#6b6e88">
        DIGITAL PUBLIC INFRASTRUCTURE · WRKR HOLDING CO.
      </text>
    </svg>
  );
}

/* ── AfricaMap — region-based silhouette with WRKR country markers ────── */
function AfricaMap() {
  const markers = [
    { x: 290, y: 478, n: "Nigeria",  big: true,  off: "l" },
    { x: 240, y: 510, n: "Ghana",    off: "l" },
    { x: 615, y: 482, n: "Uganda",   off: "r" },
    { x: 632, y: 502, n: "Rwanda",   off: "r" },
    { x: 660, y: 470, n: "Kenya",    off: "r" },
    { x: 640, y: 555, n: "Tanzania", off: "r" },
    { x: 460, y: 685, n: "Zambia",   off: "l" },
  ] as { x: number; y: number; n: string; big?: boolean; off: string }[];

  return (
    <svg viewBox="0 0 900 1020" className="w-full h-auto max-w-lg ml-auto" aria-hidden="true">
      <defs>
        <pattern id="dotgridGeo" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.7" fill="#23258c" opacity="0.18" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="900" height="1020" fill="url(#dotgridGeo)" />

      {/* lat reference lines */}
      <g stroke="#23258c" strokeWidth="0.6" opacity="0.22" strokeDasharray="3 6">
        <line x1="0" y1="240" x2="900" y2="240" />
        <line x1="0" y1="540" x2="900" y2="540" />
        <line x1="0" y1="840" x2="900" y2="840" />
      </g>
      <g fontFamily='"JetBrains Mono",monospace' fontSize="12" fill="#6b6e88" opacity="0.6">
        <text x="14" y="236">+23.5°</text>
        <text x="14" y="536">  0°</text>
        <text x="14" y="836">−23.5°</text>
      </g>

      {/* Africa — five regional pieces */}
      <g stroke="#23258c" strokeWidth="2" strokeLinejoin="round">
        <path fill="#efeee7"
          d="M 455 40 L 520 70 L 570 110 L 620 170 L 650 220 L 670 280 L 690 340
             L 520 410 L 260 450 L 240 340 L 430 90 Z"/>
        <path fill="#efeee7"
          d="M 240 340 L 260 450 L 300 550 L 320 640 L 280 720 L 240 700
             L 210 660 L 190 610 L 170 560 L 150 510 L 140 460 L 160 410 L 190 380 Z"/>
        <path fill="#efeee7"
          d="M 300 550 L 600 530 L 610 610 L 600 720 L 330 730 L 320 640 Z"/>
        <path fill="#f0e2d0"
          d="M 600 530 L 700 500 L 690 555 L 660 605 L 630 660 L 600 720 L 610 610 Z"/>
        <path fill="#efeee7"
          d="M 330 730 L 600 720 L 570 770 L 540 820 L 500 860 L 460 895
             L 420 925 L 370 950 L 330 960 L 300 945 L 285 905 L 300 860 L 320 820 L 330 790 Z"/>
        <path fill="#efeee7"
          d="M 720 770 L 760 800 L 770 870 L 740 920 L 705 905 L 695 855 L 705 810 Z"/>
      </g>

      {/* Country markers */}
      {markers.map((m, i) => (
        <g key={i}>
          <circle cx={m.x} cy={m.y} r={m.big ? 22 : 14} fill="#a3651f" opacity="0.16" />
          <circle cx={m.x} cy={m.y} r={m.big ? 11 : 7}  fill="#a3651f" />
          {m.big && <circle cx={m.x} cy={m.y} r="4" fill="#fff" />}
          <text
            x={m.off === "r" ? m.x + 22 : m.x - 22}
            y={m.y + 7}
            textAnchor={m.off === "r" ? "start" : "end"}
            fontFamily='"Gilroy","Inter",sans-serif'
            fontWeight={m.big ? 800 : 700}
            fontSize={m.big ? 26 : 20}
            fill="#0e0e1a"
          >
            {m.n}
          </text>
        </g>
      ))}

      {/* Compass */}
      <g transform="translate(810, 100)" fontFamily='"JetBrains Mono",monospace' fontSize="13" fill="#6b6e88">
        <circle cx="0" cy="0" r="28" fill="rgba(247,246,241,0.92)" stroke="#23258c" strokeWidth="1.2" />
        <polygon points="0,-22 6,0 0,22 -6,0" fill="#23258c" />
        <text x="-5" y="-34" fontWeight="700" fill="#0e0e1a">N</text>
      </g>

      {/* Legend */}
      <g transform="translate(40, 970)" fontFamily='"JetBrains Mono",monospace' fontSize="14" fill="#6b6e88">
        <g>
          <circle cx="10" cy="0" r="11" fill="#a3651f" />
          <circle cx="10" cy="0" r="4"  fill="#fff" />
          <text x="32" y="6">Primary base</text>
        </g>
        <g transform="translate(240, 0)">
          <circle cx="10" cy="0" r="7" fill="#a3651f" />
          <text x="28" y="6">Active engagement</text>
        </g>
        <g transform="translate(520, 0)">
          <rect x="0" y="-8" width="20" height="16" fill="#f0e2d0" stroke="#23258c" strokeWidth="1.2" />
          <text x="28" y="6">Region of focus</text>
        </g>
      </g>
    </svg>
  );
}

/* ── page ───────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#f7f6f1", borderBottom: "1px solid #efeee7" }}
      >
        {/* Background illustration */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          <CivicArch />
        </div>
        {/* Fade overlay so text is readable */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(247,246,241,0.55) 0%, rgba(247,246,241,0.78) 35%, rgba(247,246,241,0.96) 70%, #f7f6f1 100%)",
            zIndex: 1,
          }}
        />

        <div
          className="relative max-w-[1280px] mx-auto px-8"
          style={{ paddingTop: 112, paddingBottom: 120, zIndex: 2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16 items-end">
            <div>
              <FadeIn>
                <div
                  className="inline-block mb-8 pl-4 text-[11px] font-[800] tracking-[0.28em] uppercase"
                  style={{
                    fontFamily: "'Gilroy','Inter',sans-serif",
                    color: "#23258c",
                    borderLeft: "2px solid #23258c",
                  }}
                >
                  WRKR Holding Co. · est. 2019
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                <h1
                  className="font-[800] leading-[1.04] tracking-[-0.028em] mb-8"
                  style={{
                    fontFamily: "'Gilroy','Inter',sans-serif",
                    fontSize: "clamp(34px,8vw,76px)",
                    color: "#0e0e1a",
                    maxWidth: "18ch",
                    overflowWrap: "break-word",
                    hyphens: "auto",
                  }}
                >
                  We build{" "}
                  <em style={{ fontStyle: "normal", color: "#23258c" }}>
                    digital infrastructure
                  </em>{" "}
                  for the institutions that hold society together.
                </h1>
              </FadeIn>

              <FadeIn delay={0.18}>
                <p
                  className="mb-10 leading-[1.55]"
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    fontSize: 20,
                    color: "#3b3e5e",
                    maxWidth: 620,
                  }}
                >
                  Public agencies. Regulated industries. The work that has to be right. We invest in operators building the systems governments and businesses depend on.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2.5 text-white px-6 py-3 text-[13px] font-[800] rounded-[6px] transition-colors"
                    style={{
                      fontFamily: "'Gilroy','Inter',sans-serif",
                      background: "#23258c",
                    }}
                  >
                    See the portfolio <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-[800] rounded-[6px] border transition-colors"
                    style={{
                      fontFamily: "'Gilroy','Inter',sans-serif",
                      color: "#0e0e1a",
                      borderColor: "#c4c6d4",
                    }}
                  >
                    Work with us
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Hero sidebar */}
            <FadeIn delay={0.3}>
              <div
                className="pl-5"
                style={{
                  borderLeft: "1px solid #c4c6d4",
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 12,
                  color: "#6b6e88",
                  lineHeight: 1.7,
                  paddingBottom: 8,
                }}
              >
                <strong
                  className="block mb-1.5"
                  style={{
                    color: "#0e0e1a",
                    fontWeight: 600,
                    fontFamily: "'Gilroy','Inter',sans-serif",
                    fontSize: 14,
                    letterSpacing: 0,
                  }}
                >
                  Rooted in Africa.
                </strong>
                Working globally.
                <br /><br />
                11 countries
                <br />26 state govts
                <br />100+ companies served
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TWO-TRACK PROPOSITION */}
      <section
        className="py-24 px-8"
        style={{ background: "#f7f6f1", borderBottom: "1px solid #efeee7" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ border: "1px solid #efeee7", background: "#fff" }}
          >
            <FadeIn>
              <div className="p-12 space-y-4">
                <p
                  className="text-[11px] font-[800] tracking-[0.22em] uppercase mb-5"
                  style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#23258c" }}
                >
                  We invest
                </p>
                <h3
                  className="font-[800] leading-[1.2]"
                  style={{ fontFamily: "'Gilroy','Inter',sans-serif", fontSize: 28, letterSpacing: "-0.022em", color: "#0e0e1a" }}
                >
                  Operators in payments, identity, banking, and compliance.
                </h3>
                <p className="text-[16px] leading-relaxed" style={{ color: "#3b3e5e" }}>
                  Verticals where reliability isn't optional. We back founders building the connective tissue of regulated digital services — and stay in for the long arc.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div
                className="p-12 space-y-4"
                style={{ borderLeft: "1px solid #efeee7", background: "#f7f6f1" }}
              >
                <p
                  className="text-[11px] font-[800] tracking-[0.22em] uppercase mb-5"
                  style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#a3651f" }}
                >
                  We build
                </p>
                <h3
                  className="font-[800] leading-[1.2]"
                  style={{ fontFamily: "'Gilroy','Inter',sans-serif", fontSize: 28, letterSpacing: "-0.022em", color: "#0e0e1a" }}
                >
                  Digital public infrastructure for African governments.
                </h3>
                <p className="text-[16px] leading-relaxed" style={{ color: "#3b3e5e" }}>
                  Advisory, implementation, and co-investment in public projects — identity systems, licensing, payments, and the policy frameworks that make them last.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* THE STACK WE BELIEVE IN */}
      <section
        className="py-24 px-8"
        style={{ background: "#fff", borderBottom: "1px solid #efeee7" }}
      >
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeIn className="space-y-5">
            <div
              className="inline-flex items-center gap-3 text-[11px] font-[800] tracking-[0.22em] uppercase mb-1"
              style={{
                fontFamily: "'Gilroy','Inter',sans-serif",
                color: "#a3651f",
              }}
            >
              <span style={{ width: 24, height: 2, background: "#a3651f", display: "inline-block" }} />
              The stack we believe in
            </div>
            <h2
              className="font-[800] leading-[1.05] tracking-[-0.025em]"
              style={{ fontFamily: "'Gilroy','Inter',sans-serif", fontSize: "clamp(30px,6vw,44px)", color: "#0e0e1a" }}
            >
              Four layers.<br />Built to interoperate.
            </h2>
            <p className="text-[16px] leading-relaxed max-w-sm" style={{ color: "#3b3e5e" }}>
              Identity, payments, compliance, and banking are the connective tissue between citizens, businesses, and governments. We invest and build at each layer — because none of them work in isolation, and the value compounds when they do.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ConceptStack />
          </FadeIn>
        </div>
      </section>

      {/* PORTFOLIO TEASER */}
      <section
        className="py-24 px-8"
        style={{ background: "#f7f6f1", borderBottom: "1px solid #efeee7" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div className="space-y-3">
              <div
                className="inline-flex items-center gap-3 text-[11px] font-[800] tracking-[0.22em] uppercase"
                style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#23258c" }}
              >
                <span style={{ width: 24, height: 2, background: "#23258c", display: "inline-block" }} />
                Portfolio
              </div>
              <h2
                className="font-[800] tracking-[-0.025em]"
                style={{ fontFamily: "'Gilroy','Inter',sans-serif", fontSize: "clamp(30px,6vw,44px)", color: "#0e0e1a" }}
              >
                Four operators. One thesis.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[13px] font-[800] px-5 py-2.5 border rounded-[6px] transition-colors shrink-0"
              style={{
                fontFamily: "'Gilroy','Inter',sans-serif",
                color: "#23258c",
                borderColor: "#23258c",
                background: "transparent",
              }}
            >
              Explore the portfolio <ArrowRight size={13} />
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                mark:     "O",
                markStyle:{ background: "#23258c", color: "#fff" },
                sector:   "Digital Payments",
                name:     "Orchestrate",
                desc:     "Integrated payment infrastructure for governments and regulated commerce.",
                link:     "orchestrate.global",
              },
              {
                mark:     "P",
                markStyle:{ background: "#a3651f", color: "#fff" },
                sector:   "Digital Identity",
                name:     "Piipul",
                desc:     "Identity verification infrastructure — the foundation layer for everything downstream.",
                link:     "piipul.co",
              },
              {
                mark:     "S",
                markStyle:{ background: "#0e0e1a", color: "#fff" },
                sector:   "Compliance & Regulation",
                name:     "Slice Finance",
                desc:     "Compliance infrastructure for regulated industries.",
                link:     "slicefinance.africa",
              },
              {
                mark:     "W",
                markStyle:{ background: "#fff", color: "#23258c", border: "1.5px solid #23258c" },
                sector:   "Banking-as-a-Service",
                name:     "Wavepoint",
                desc:     "Banking infrastructure for fintechs, platforms, and embedded finance providers.",
                link:     "wavepoint.africa",
              },
            ].map((op, i) => (
              <FadeIn key={op.name} delay={i * 0.08}>
                <div
                  className="flex flex-col h-full transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "#fff", border: "1px solid #efeee7", cursor: "pointer" }}
                >
                  {/* Photo placeholder */}
                  <div
                    className="relative overflow-hidden"
                    style={{
                      background: "#efeee7",
                      aspectRatio: "16/9",
                      margin: "-1px -1px 0",
                      borderBottom: "1px solid #efeee7",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                          "linear-gradient(135deg, rgba(35,37,140,0.10), transparent 60%), repeating-linear-gradient(45deg, transparent 0 14px, rgba(35,37,140,0.04) 14px 15px)",
                      }}
                    />
                  </div>
                  {/* Card body */}
                  <div className="p-6 flex flex-col flex-1 gap-3">
                    <div
                      className="w-11 h-11 flex items-center justify-center font-[800] text-[18px] rounded-[6px]"
                      style={{ fontFamily: "'Gilroy','Inter',sans-serif", ...op.markStyle }}
                    >
                      {op.mark}
                    </div>
                    <div>
                      <p
                        className="text-[11px] font-[800] tracking-[0.18em] uppercase mb-0.5"
                        style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#6b6e88" }}
                      >
                        {op.sector}
                      </p>
                      <h4
                        className="font-[800] text-[20px] tracking-[-0.012em]"
                        style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#0e0e1a" }}
                      >
                        {op.name}
                      </h4>
                    </div>
                    <p className="text-[14px] leading-[1.55] flex-1" style={{ color: "#3b3e5e" }}>
                      {op.desc}
                    </p>
                    <a
                      href={`https://${op.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12px] pt-3 inline-flex items-center gap-1 hover:underline"
                      style={{
                        fontFamily: "'JetBrains Mono',monospace",
                        color: "#23258c",
                        borderTop: "1px solid #efeee7",
                      }}
                    >
                      {op.link} →
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* STATS — PROOF */}
      <section className="py-20 px-8" style={{ background: "#23258c", color: "#fff" }}>
        <div className="max-w-[1280px] mx-auto">
          <p
            className="text-[11px] font-[800] tracking-[0.28em] uppercase mb-8"
            style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "rgba(255,255,255,0.7)" }}
          >
            PROOF · TRACK RECORD
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3">
            {[
              { val: "$100M+", label: "Processed through our payments infrastructure" },
              { val: "11",     label: "Countries served across Africa, Europe, and North America" },
              { val: "26",     label: "State governments served across Nigeria" },
              { val: "100+",   label: "Companies served across our markets" },
              { val: "89%",    label: "Reduction in fraud across implementations" },
              { val: "142%",   label: "Revenue growth for government partners" },
            ].map((stat, i) => (
              <FadeIn key={stat.val} direction="up">
                <div
                  className="py-8 px-7"
                  style={{
                    borderLeft: i % 3 === 0 ? "none" : "1px solid rgba(255,255,255,0.18)",
                    paddingLeft: i % 3 === 0 ? 0 : undefined,
                  }}
                >
                  <p
                    className="font-[800] tracking-[-0.028em] leading-none mb-3"
                    style={{ fontFamily: "'Gilroy','Inter',sans-serif", fontSize: "clamp(40px,5vw,60px)" }}
                  >
                    {stat.val}
                  </p>
                  <p
                    className="text-[14px] leading-[1.45] max-w-[220px]"
                    style={{ color: "rgba(255,255,255,0.78)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE WE WORK */}
      <section
        className="py-24 px-8"
        style={{ background: "#efeee7", borderBottom: "1px solid #efeee7" }}
      >
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-20 items-start">
          <FadeIn className="space-y-8">
            <div
              className="inline-flex items-center gap-3 text-[11px] font-[800] tracking-[0.22em] uppercase"
              style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#23258c" }}
            >
              <span style={{ width: 24, height: 2, background: "#23258c", display: "inline-block" }} />
              Where we work
            </div>
            <h2
              className="font-[800] leading-tight tracking-[-0.025em]"
              style={{ fontFamily: "'Gilroy','Inter',sans-serif", fontSize: "clamp(30px,6vw,44px)", color: "#0e0e1a" }}
            >
              Rooted in Africa.<br />Working globally.
            </h2>

            <div className="space-y-0">
              {[
                { region: "AFRICA",        countries: "Nigeria · Ghana · Zambia · Rwanda · Tanzania · Kenya · Uganda" },
                { region: "EUROPE",        countries: "United Kingdom · France" },
                { region: "NORTH AMERICA", countries: "United States · Canada" },
              ].map((r) => (
                <div key={r.region} className="py-5" style={{ borderTop: "1px solid #c4c6d4" }}>
                  <p
                    className="text-[11px] font-[800] tracking-[0.22em] uppercase mb-2"
                    style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#23258c" }}
                  >
                    {r.region}
                  </p>
                  <p
                    className="font-[500] text-[18px] leading-[1.5]"
                    style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#0e0e1a" }}
                  >
                    {r.countries}
                  </p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #c4c6d4" }} />
            </div>

            <div
              className="p-8 space-y-2"
              style={{ background: "#0e0e1a", color: "#fff", borderLeft: "3px solid #a3651f" }}
            >
              <p
                className="text-[11px] font-[800] tracking-[0.22em] uppercase mb-2.5"
                style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "rgba(255,255,255,0.65)" }}
              >
                Strategic goal · 2030
              </p>
              <p
                className="font-[800] leading-[1.3]"
                style={{ fontFamily: "'Gilroy','Inter',sans-serif", fontSize: 22, color: "#fff" }}
              >
                15 African countries served with interoperable digital systems.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <AfricaMap />
          </FadeIn>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 px-8" style={{ background: "#0e0e1a", color: "#fff" }}>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-16 items-end">
          <h2
            className="font-[800] leading-[1.08] tracking-[-0.026em]"
            style={{
              fontFamily: "'Gilroy','Inter',sans-serif",
              fontSize: "clamp(36px,4vw,48px)",
              color: "#fff",
              maxWidth: "18ch",
            }}
          >
            Building something that has to be right?<br />Let's talk.
          </h2>
          <div className="flex flex-col gap-3 items-start">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white px-8 py-4 text-[13px] font-[800] rounded-[6px] transition-colors"
              style={{ fontFamily: "'Gilroy','Inter',sans-serif", background: "#a3651f" }}
            >
              Get in touch <ArrowRight size={15} />
            </Link>
            <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'JetBrains Mono',monospace" }}>
              info@getwrkr.com · +1 646 631 6118
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
