import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

export default function AboutPage() {
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
              About
            </div>
            <h1
              className="font-[800] leading-[1.05] tracking-[-0.028em] mb-6"
              style={{ fontFamily: "'Gilroy','Inter',sans-serif", fontSize: "clamp(48px,6vw,64px)", color: "#0e0e1a", maxWidth: "18ch" }}
            >
              About WRKR
            </h1>
            <p
              className="text-[19px] leading-[1.6] max-w-[660px]"
              style={{ color: "#3b3e5e" }}
            >
              WRKR Holding Co. invests in and builds the digital infrastructure that public agencies and regulated industries depend on. We operate at the intersection of public and private sectors — combining capital, technical depth, and on-the-ground implementation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* VISION & MISSION CARDS */}
      <section className="py-20 px-8" style={{ background: "#f7f6f1", borderBottom: "1px solid #efeee7" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn>
              <div className="p-10 space-y-4" style={{ background: "#fff", border: "1px solid #efeee7" }}>
                <p
                  className="text-[11px] font-[800] tracking-[0.22em] uppercase mb-4"
                  style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#a3651f" }}
                >
                  Mission
                </p>
                <h3
                  className="font-[800] leading-[1.25]"
                  style={{ fontFamily: "'Gilroy','Inter',sans-serif", fontSize: 26, letterSpacing: "-0.018em", color: "#0e0e1a" }}
                >
                  Enable secure digital infrastructure that transforms how citizens access essential services and accelerates development across Africa.
                </h3>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="p-10 space-y-4" style={{ background: "#fff", border: "1px solid #efeee7" }}>
                <p
                  className="text-[11px] font-[800] tracking-[0.22em] uppercase mb-4"
                  style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#a3651f" }}
                >
                  Vision
                </p>
                <h3
                  className="font-[800] leading-[1.25]"
                  style={{ fontFamily: "'Gilroy','Inter',sans-serif", fontSize: 26, letterSpacing: "-0.018em", color: "#0e0e1a" }}
                >
                  Be Africa's trusted leader in building digital public infrastructure that works for everyone.
                </h3>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* OUR THESIS */}
      <section
        className="py-20 px-8"
        style={{ background: "#fff", borderTop: "1px solid #efeee7", borderBottom: "1px solid #efeee7" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 items-start">
            <FadeIn>
              <div
                className="inline-flex items-center gap-3 text-[11px] font-[800] tracking-[0.22em] uppercase"
                style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#23258c" }}
              >
                <span style={{ width: 24, height: 2, background: "#23258c", display: "inline-block" }} />
                Our thesis
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="space-y-6">
              {[
                "Digital public infrastructure is the most consequential build of the next decade in Africa. Identity, payments, and the records that sit between citizens and their institutions are being established now — and the choices made today will shape governance, inclusion, and growth for thirty years.",
                "We focus on regulated verticals — payments, identity, compliance, banking — because the cost of failure is high and the reward for getting it right is durable. These aren't winner-take-all categories. They're built piece by piece, market by market, by operators who stay.",
                "A holding-company structure — not a fund, not a consultancy — lets us be patient operators rather than transactional advisors. We hold, we support, we build alongside. Our companies run for decades, and so do we.",
                "We look for operators who understand the constraints of public systems: uptime, security, regulatory compliance, local operability. We look for government partners who want a co-investor and co-builder, not a vendor.",
              ].map((para, i) => (
                <p
                  key={i}
                  className="text-[19px] leading-[1.7] max-w-[64ch]"
                  style={{ fontFamily: "'Source Serif 4',Georgia,serif", color: "#0e0e1a" }}
                >
                  {para}
                </p>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 px-8" style={{ background: "#f7f6f1", borderBottom: "1px solid #efeee7" }}>
        <div className="max-w-[1280px] mx-auto">
          <FadeIn className="mb-10">
            <div
              className="inline-flex items-center gap-3 text-[11px] font-[800] tracking-[0.22em] uppercase mb-6"
              style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#23258c" }}
            >
              <span style={{ width: 24, height: 2, background: "#23258c", display: "inline-block" }} />
              Timeline
            </div>
          </FadeIn>

          <div>
            {[
              {
                period: "2019 – 2023",
                title:  "Foundations.",
                body:   "Launched government work with the Electronic Vehicle Administration System, processing tens of millions in transactions and improving administrative efficiency by 120%. Established core partnerships with public agencies across Nigeria and built our first digital identity verification platform.",
              },
              {
                period: "2023 – 2025",
                title:  "Building the portfolio.",
                body:   "Founded Slice Finance (compliance & regulation, 2023), launched Orchestrate (digital payments, January 2025), and built out Piipul (digital identity). Expanded service to 26 state governments across Nigeria and 100+ companies across our markets.",
              },
              {
                period: "2026 → Future",
                title:  "Scaling proven solutions.",
                body:   "Added Wavepoint to the portfolio in 2026. Scaling proven solutions into additional markets, deepening AI capabilities in compliance and financial inclusion, and creating cross-border digital integration. Goal: 15 African countries by 2030.",
              },
            ].map((item, i) => (
              <FadeIn key={i}>
                <div
                  className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 py-8"
                  style={{ borderTop: "1px solid #efeee7" }}
                >
                  <div
                    className="font-[800] text-[18px] tracking-[-0.01em]"
                    style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#23258c" }}
                  >
                    {item.period}
                  </div>
                  <div className="space-y-3">
                    <h4
                      className="font-[800] text-[22px] tracking-[-0.014em]"
                      style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#0e0e1a" }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-[15px] leading-[1.6] max-w-[60ch]" style={{ color: "#3b3e5e" }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
            <div style={{ borderTop: "1px solid #efeee7" }} />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 px-8" style={{ background: "#efeee7", borderBottom: "1px solid #efeee7" }}>
        <div className="max-w-[1280px] mx-auto">
          <FadeIn className="mb-8">
            <div
              className="inline-flex items-center gap-3 text-[11px] font-[800] tracking-[0.22em] uppercase"
              style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#23258c" }}
            >
              <span style={{ width: 24, height: 2, background: "#23258c", display: "inline-block" }} />
              Values
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              {
                num:   "01",
                title: "Financial Stability.",
                body:  "Government contracts and private-sector revenue create stable cash flows that fund long-term work.",
              },
              {
                num:   "02",
                title: "Performance.",
                body:  "68% faster processing times. 142% revenue growth for government partners. 89% reduction in fraud.",
              },
              {
                num:   "03",
                title: "Strategic Goals.",
                body:  "15 African countries by 2030, with expanded AI capabilities in compliance and financial inclusion — built on a foundation of security and privacy.",
              },
            ].map((v, i) => (
              <FadeIn key={v.num} delay={i * 0.08}>
                <div
                  className="flex flex-col gap-3.5 p-10"
                  style={{ background: "#fff", border: "1px solid #efeee7" }}
                >
                  <p
                    className="text-[12px] tracking-[0.1em]"
                    style={{ fontFamily: "'JetBrains Mono',monospace", color: "#a3651f" }}
                  >
                    {v.num}
                  </p>
                  <h3
                    className="font-[800] text-[22px] tracking-[-0.014em]"
                    style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#0e0e1a" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-[15px] leading-[1.6]" style={{ color: "#3b3e5e" }}>
                    {v.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8" style={{ background: "#0e0e1a", color: "#fff" }}>
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-12">
          <h2
            className="font-[800] leading-[1.08] tracking-[-0.026em]"
            style={{ fontFamily: "'Gilroy','Inter',sans-serif", fontSize: "clamp(32px,4vw,48px)", maxWidth: "18ch" }}
          >
            Working on a national or sub-national DPI initiative?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white px-8 py-4 text-[13px] font-[800] rounded-[6px] transition-colors shrink-0"
            style={{ fontFamily: "'Gilroy','Inter',sans-serif", background: "#a3651f" }}
          >
            Let's talk <ArrowRight size={15} />
          </Link>
        </div>
      </section>

    </div>
  );
}
