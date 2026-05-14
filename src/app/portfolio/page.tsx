import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

const PORTFOLIO = [
  {
    initials: "O",
    markStyle: { background: "#23258c", color: "#fff" },
    name:    "Orchestrate",
    sector:  "Digital Payments",
    year:    "Founded January 2025",
    oneline: "Integrated payment infrastructure for governments and regulated commerce.",
    desc:    "Reduces transaction costs while increasing financial transparency and inclusion. Used by public agencies for revenue collection and disbursement, and by private operators for regulated commerce flows.",
    facts:   [
      { k: "Scale",   v: "$100M+ processed globally" },
      { k: "Markets", v: "Africa, Europe, North America" },
      { k: "Status",  v: "Active portfolio" },
    ],
    site:    "orchestrate.global",
    href:    "https://orchestrate.global",
  },
  {
    initials: "P",
    markStyle: { background: "#a3651f", color: "#fff" },
    name:    "Piipul",
    sector:  "Digital Identity",
    year:    "Active",
    oneline: "Identity verification infrastructure — the foundation layer for everything downstream.",
    desc:    "From licensing to financial inclusion to KYC compliance — Piipul issues, verifies, and federates digital identity across African public and private institutions.",
    facts:   [
      { k: "Scope",  v: "Public + private sector" },
      { k: "Region", v: "Africa" },
      { k: "Status", v: "Active portfolio" },
    ],
    site:    "piipul.co",
    href:    "https://piipul.co",
  },
  {
    initials: "S",
    markStyle: { background: "#0e0e1a", color: "#fff" },
    name:    "Slice Finance",
    sector:  "Compliance & Regulation",
    year:    "Founded 2023",
    oneline: "Compliance infrastructure for regulated industries.",
    desc:    "AML, sanctions, and regulatory reporting tooling for financial institutions, fintechs, and operators working across African and global jurisdictions.",
    facts:   [
      { k: "Scope",   v: "African + global markets" },
      { k: "Founded", v: "2023" },
      { k: "Status",  v: "Active portfolio" },
    ],
    site:    "slicefinance.africa",
    href:    "https://slicefinance.africa",
  },
  {
    initials: "W",
    markStyle: { background: "#fff", color: "#23258c", border: "2px solid #23258c" },
    name:    "Wavepoint",
    sector:  "Banking-as-a-Service",
    year:    "Invested 2026",
    oneline: "Banking infrastructure for fintechs, platforms, and embedded finance providers.",
    desc:    "Lets a new generation of financial-services builders offer regulated banking products without becoming banks themselves. Sits at the foundation of how regulated banking reaches African markets.",
    facts:   [
      { k: "Type",     v: "Embedded finance" },
      { k: "Invested", v: "2026" },
      { k: "Status",   v: "Active portfolio" },
    ],
    site:    "wavepoint.africa",
    href:    "https://wavepoint.africa",
  },
];

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">

      {/* HERO */}
      <section
        className="px-8"
        style={{ paddingTop: 112, paddingBottom: 64, background: "#f7f6f1", borderBottom: "1px solid #efeee7" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <FadeIn>
            <div
              className="inline-block mb-8 pl-4 text-[11px] font-[800] tracking-[0.28em] uppercase"
              style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#23258c", borderLeft: "2px solid #23258c" }}
            >
              Portfolio
            </div>
            <h1
              className="font-[800] leading-[1.05] tracking-[-0.028em] mb-6"
              style={{ fontFamily: "'Gilroy','Inter',sans-serif", fontSize: "clamp(48px,6vw,64px)", color: "#0e0e1a", maxWidth: "18ch" }}
            >
              Portfolio.
            </h1>
            <p className="text-[19px] leading-[1.6] max-w-[660px]" style={{ color: "#3b3e5e" }}>
              We invest in operators building infrastructure that governments and regulated businesses depend on. Long-term ownership. Real operational support.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* INVESTMENT THESIS */}
      <section
        className="py-20 px-8"
        style={{ background: "#fff", borderBottom: "1px solid #efeee7" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <FadeIn className="mb-8">
            <div
              className="inline-flex items-center gap-3 text-[11px] font-[800] tracking-[0.22em] uppercase mb-5"
              style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#23258c" }}
            >
              <span style={{ width: 24, height: 2, background: "#23258c", display: "inline-block" }} />
              Investment thesis
            </div>
            <h2
              className="font-[800] leading-[1.05] tracking-[-0.025em] mb-5"
              style={{ fontFamily: "'Gilroy','Inter',sans-serif", fontSize: 44, color: "#0e0e1a" }}
            >
              The connective tissue.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p
              className="text-[19px] leading-[1.7] max-w-[64ch]"
              style={{ fontFamily: "'Source Serif 4',Georgia,serif", color: "#0e0e1a" }}
            >
              Payments, banking, identity, and compliance are the connective tissue of digital public infrastructure. They aren't winner-take-all markets — they're built piece by piece, jurisdiction by jurisdiction, by operators who stay. We hold rather than flip because that's how this category compounds.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* COMPANY CARDS */}
      <section className="py-20 px-8" style={{ background: "#f7f6f1", borderBottom: "1px solid #efeee7" }}>
        <div className="max-w-[1280px] mx-auto">
          <div>
            {PORTFOLIO.map((co, i) => (
              <FadeIn key={co.name}>
                <div
                  className="grid grid-cols-1 lg:grid-cols-[200px_1fr_280px] gap-12 py-12"
                  style={{ borderTop: i === 0 ? "none" : "1px solid #efeee7", paddingTop: i === 0 ? 0 : undefined }}
                >
                  {/* Identity column */}
                  <div className="flex flex-col gap-3">
                    <div
                      className="w-[88px] h-[88px] flex items-center justify-center font-[800] text-[32px] tracking-[-0.03em] rounded-[8px]"
                      style={{ fontFamily: "'Gilroy','Inter',sans-serif", ...co.markStyle }}
                    >
                      {co.initials}
                    </div>
                    <div
                      className="text-[12px] leading-[1.7]"
                      style={{ fontFamily: "'JetBrains Mono',monospace", color: "#6b6e88" }}
                    >
                      {co.sector}<br />{co.year}
                    </div>
                  </div>

                  {/* Body column */}
                  <div className="space-y-4">
                    <h3
                      className="font-[800] text-[32px] tracking-[-0.022em]"
                      style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#0e0e1a" }}
                    >
                      {co.name}
                    </h3>
                    <p
                      className="font-[500] text-[16px]"
                      style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#23258c" }}
                    >
                      {co.oneline}
                    </p>
                    <p className="text-[16px] leading-[1.6] max-w-[56ch]" style={{ color: "#3b3e5e" }}>
                      {co.desc}
                    </p>
                  </div>

                  {/* Facts column */}
                  <div className="flex flex-col gap-4 p-6" style={{ background: "#fff", border: "1px solid #efeee7" }}>
                    {co.facts.map((f) => (
                      <div key={f.k}>
                        <p
                          className="text-[10px] font-[800] tracking-[0.18em] uppercase mb-1"
                          style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#6b6e88" }}
                        >
                          {f.k}
                        </p>
                        <p className="text-[14px] font-[500]" style={{ color: "#0e0e1a" }}>
                          {f.v}
                        </p>
                      </div>
                    ))}
                    <a
                      href={co.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[12px] pt-3 mt-auto hover:underline"
                      style={{
                        fontFamily: "'JetBrains Mono',monospace",
                        color: "#a3651f",
                        borderTop: "1px solid #efeee7",
                      }}
                    >
                      {co.site} <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
            <div style={{ borderTop: "1px solid #efeee7" }} />
          </div>
        </div>
      </section>

      {/* HOW WE INVEST */}
      <section className="py-20 px-8" style={{ background: "#23258c", color: "#fff" }}>
        <div className="max-w-[1280px] mx-auto">
          <FadeIn>
            <div
              className="inline-flex items-center gap-3 text-[11px] font-[800] tracking-[0.22em] uppercase mb-8"
              style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "rgba(255,255,255,0.85)" }}
            >
              <span style={{ width: 24, height: 2, background: "rgba(255,255,255,0.6)", display: "inline-block" }} />
              How we invest
            </div>
          </FadeIn>
          <div
            className="grid grid-cols-1 md:grid-cols-3 mt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
          >
            {[
              {
                num:   "01",
                title: "Long-term capital.",
                body:  "We hold, we don't flip. Our companies are built for decades of operation, not quarterly milestones.",
              },
              {
                num:   "02",
                title: "Operational support.",
                body:  "Technical, regulatory, and go-to-market support from a team that has built and shipped this work.",
              },
              {
                num:   "03",
                title: "Government access.",
                body:  "Established relationships with public agencies across multiple African markets.",
              },
            ].map((item, i) => (
              <FadeIn key={item.num} delay={i * 0.1}>
                <div
                  className="py-10 px-7 space-y-3"
                  style={{ borderRight: i < 2 ? "1px solid rgba(255,255,255,0.2)" : "none" }}
                >
                  <p
                    className="text-[12px] tracking-[0.1em]"
                    style={{ fontFamily: "'JetBrains Mono',monospace", color: "rgba(255,255,255,0.55)", marginBottom: 16 }}
                  >
                    {item.num}
                  </p>
                  <h3
                    className="font-[800] text-[22px] tracking-[-0.014em]"
                    style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#fff" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.8)" }}>
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-8" style={{ background: "#f7f6f1", borderTop: "1px solid #efeee7" }}>
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <p
            className="text-[19px] leading-[1.55] font-[500]"
            style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#0e0e1a", maxWidth: "52ch" }}
          >
            Building in payments, banking, identity, or compliance? Talk to us.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white px-7 py-3.5 text-[13px] font-[800] rounded-[6px] transition-colors shrink-0"
            style={{ fontFamily: "'Gilroy','Inter',sans-serif", background: "#23258c" }}
          >
            Get in touch <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </div>
  );
}
