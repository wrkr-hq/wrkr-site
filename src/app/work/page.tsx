import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

export default function WorkPage() {
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
              Government Work
            </div>
            <h1
              className="font-[800] leading-[1.05] tracking-[-0.028em] mb-6"
              style={{ fontFamily: "'Gilroy','Inter',sans-serif", fontSize: "clamp(44px,6vw,64px)", color: "#0e0e1a", maxWidth: "18ch" }}
            >
              Digital public infrastructure for African governments.
            </h1>
            <p className="text-[19px] leading-[1.6] max-w-[660px]" style={{ color: "#3b3e5e" }}>
              Advisory, implementation, and co-investment in public projects.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="py-20 px-8" style={{ background: "#f7f6f1", borderBottom: "1px solid #efeee7" }}>
        <div className="max-w-[1280px] mx-auto">
          <FadeIn className="mb-8">
            <div
              className="inline-flex items-center gap-3 text-[11px] font-[800] tracking-[0.22em] uppercase mb-5"
              style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#23258c" }}
            >
              <span style={{ width: 24, height: 2, background: "#23258c", display: "inline-block" }} />
              What we do for governments
            </div>
          </FadeIn>
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ border: "1px solid #efeee7", background: "#fff" }}
          >
            {[
              {
                num:   "01",
                title: "Digital Public Infrastructure.",
                body:  "Designing and implementing digital service platforms — identity systems, licensing, permits — that change how governments deliver to citizens.",
              },
              {
                num:   "02",
                title: "Digital Payment Solutions.",
                body:  "Integrated payment systems for government revenue collection and disbursement. Lower transaction costs, higher transparency.",
              },
              {
                num:   "03",
                title: "Policy & Regulatory Advisory.",
                body:  "Policy development, governance frameworks, and regulatory strategy that balances innovation with public protection.",
              },
              {
                num:   "04",
                title: "Implementation & Capacity Building.",
                body:  "Knowledge transfer and local capability-building so digital transformation outlasts any single engagement.",
              },
            ].map((pillar, i) => (
              <FadeIn key={pillar.num} delay={i * 0.08}>
                <div
                  className="flex flex-col gap-3.5 p-10"
                  style={{
                    borderRight: i % 2 === 0 ? "1px solid #efeee7" : "none",
                    borderBottom: i < 2 ? "1px solid #efeee7" : "none",
                  }}
                >
                  <p
                    className="text-[13px]"
                    style={{ fontFamily: "'JetBrains Mono',monospace", color: "#a3651f" }}
                  >
                    {pillar.num}
                  </p>
                  <h3
                    className="font-[800] text-[24px] leading-[1.25] tracking-[-0.016em]"
                    style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#0e0e1a" }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-[15px] leading-[1.6]" style={{ color: "#3b3e5e" }}>
                    {pillar.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CO-INVESTMENT */}
      <section
        className="py-20 px-8"
        style={{ background: "#fff", borderBottom: "1px solid #efeee7" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16 items-start">
            <FadeIn>
              <div
                className="inline-flex items-center gap-3 text-[11px] font-[800] tracking-[0.22em] uppercase"
                style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#23258c" }}
              >
                <span style={{ width: 24, height: 2, background: "#23258c", display: "inline-block" }} />
                Co-investment
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="space-y-5">
              <p
                className="text-[19px] leading-[1.7] max-w-[60ch]"
                style={{ fontFamily: "'Source Serif 4',Georgia,serif", color: "#0e0e1a" }}
              >
                We co-invest in public projects alongside governments — taking on delivery risk and sharing in long-term outcomes — rather than billing hourly and walking away.
              </p>
              <p
                className="text-[19px] leading-[1.7] max-w-[60ch]"
                style={{ fontFamily: "'Source Serif 4',Georgia,serif", color: "#0e0e1a" }}
              >
                This changes the engagement. We're paid when the system works, scales, and serves citizens. Our incentives align with the agency's — and the work is built to keep working long after the engagement ends.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TRACK RECORD */}
      <section className="py-20 px-8" style={{ background: "#f7f6f1", borderBottom: "1px solid #efeee7" }}>
        <div className="max-w-[1280px] mx-auto">
          <FadeIn className="mb-10">
            <div
              className="inline-flex items-center gap-3 text-[11px] font-[800] tracking-[0.22em] uppercase"
              style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#23258c" }}
            >
              <span style={{ width: 24, height: 2, background: "#23258c", display: "inline-block" }} />
              Track record
            </div>
          </FadeIn>

          <div>
            {[
              {
                tag:   "Nigeria · 2019 – 2023",
                title: "Electronic Vehicle Administration System.",
                body:  "Replaced fragmented manual processes with a unified digital system for vehicle registration, licensing, and revenue collection. Processed tens of millions of transactions, improved administrative efficiency by 120%, and established the operating template for subsequent state-government deployments.",
              },
              {
                tag:   "Multiple states · 2021 – 2025",
                title: "State-government revenue and licensing platforms.",
                body:  "Deployed statewide revenue collection and licensing infrastructure across 26 state governments. 142% average revenue growth for participating partners and an 89% reduction in fraud across implementations.",
              },
              {
                tag:   "Regional · 2024 – 2026",
                title: "Cross-border digital identity infrastructure.",
                body:  "Built foundational biometric identity verification infrastructure used by both public agencies for civil services and private operators for KYC and financial inclusion.",
              },
            ].map((cs, i) => (
              <FadeIn key={i}>
                <div
                  className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 py-8"
                  style={{ borderTop: "1px solid #efeee7" }}
                >
                  <div
                    className="font-[800] text-[11px] tracking-[0.22em] uppercase leading-[1.6]"
                    style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#a3651f" }}
                  >
                    {cs.tag}
                  </div>
                  <div className="space-y-3">
                    <h3
                      className="font-[800] text-[22px] tracking-[-0.014em]"
                      style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#0e0e1a" }}
                    >
                      {cs.title}
                    </h3>
                    <p className="text-[15px] leading-[1.6] max-w-[60ch]" style={{ color: "#3b3e5e" }}>
                      {cs.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
            <div style={{ borderTop: "1px solid #efeee7" }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8" style={{ background: "#0e0e1a", color: "#fff" }}>
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-12">
          <h2
            className="font-[800] leading-[1.08] tracking-[-0.026em]"
            style={{ fontFamily: "'Gilroy','Inter',sans-serif", fontSize: "clamp(32px,4vw,48px)", maxWidth: "22ch" }}
          >
            Working on a national or sub-national DPI initiative? Let's talk.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white px-8 py-4 text-[13px] font-[800] rounded-[6px] transition-colors shrink-0"
            style={{ fontFamily: "'Gilroy','Inter',sans-serif", background: "#a3651f" }}
          >
            Get in touch <ArrowRight size={15} />
          </Link>
        </div>
      </section>

    </div>
  );
}
