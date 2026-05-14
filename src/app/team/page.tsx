import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

export default function TeamPage() {
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
              Team
            </div>
            <h1
              className="font-[800] leading-[1.05] tracking-[-0.028em] mb-6"
              style={{ fontFamily: "'Gilroy','Inter',sans-serif", fontSize: "clamp(48px,6vw,64px)", color: "#0e0e1a" }}
            >
              Team.
            </h1>
            <p className="text-[19px] leading-[1.6] max-w-[660px]" style={{ color: "#3b3e5e" }}>
              WRKR is run by a team of professionals with deep experience across technology, government, finance, and international development. We bring together the operators, investors, and policy advisors needed to build and scale infrastructure that has to work — for citizens, regulators, and the institutions that depend on it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* THREE CAPABILITIES */}
      <section className="py-20 px-8" style={{ background: "#f7f6f1", borderBottom: "1px solid #efeee7" }}>
        <div className="max-w-[1280px] mx-auto">
          <FadeIn className="mb-8">
            <div
              className="inline-flex items-center gap-3 text-[11px] font-[800] tracking-[0.22em] uppercase"
              style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#23258c" }}
            >
              <span style={{ width: 24, height: 2, background: "#23258c", display: "inline-block" }} />
              Our capabilities
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: "Engineering & product.",
                body:  "Builders who have shipped national-scale identity, payments, and compliance systems. We're operators first who understand the constraints — uptime, latency, security, public solvency — that define this category.",
              },
              {
                title: "Public sector & policy.",
                body:  "Operators with on-the-ground experience inside African governments and multilateral institutions. We know how decisions get made, how budgets get wired, and what makes implementations stick.",
              },
              {
                title: "Investment & finance.",
                body:  "Capital allocators who underwrite long-duration infrastructure. We're paid by outcomes, not engagements — and our structures are built in alignment with the institutions we serve.",
              },
            ].map((cap, i) => (
              <FadeIn key={cap.title} delay={i * 0.08}>
                <div
                  className="pt-8 space-y-3"
                  style={{ borderTop: "2px solid #23258c" }}
                >
                  <h3
                    className="font-[800] text-[22px] tracking-[-0.014em]"
                    style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#0e0e1a" }}
                  >
                    {cap.title}
                  </h3>
                  <p className="text-[15px] leading-[1.6]" style={{ color: "#3b3e5e" }}>
                    {cap.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* MANDATE CALLOUT */}
      <section className="py-20 px-8" style={{ background: "#23258c", color: "#fff" }}>
        <div className="max-w-[1280px] mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
              <div className="space-y-4">
                <p
                  className="text-[11px] font-[800] tracking-[0.22em] uppercase"
                  style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "rgba(255,255,255,0.65)" }}
                >
                  One team. One mandate.
                </p>
                <h3
                  className="font-[800] text-[32px] tracking-[-0.018em] leading-[1.2]"
                  style={{ fontFamily: "'Gilroy','Inter',sans-serif", maxWidth: "28ch" }}
                >
                  We build infrastructure that has to be right.
                </h3>
                <p className="text-[16px] leading-[1.6] max-w-[52ch]" style={{ color: "rgba(255,255,255,0.82)" }}>
                  If you have experience in national-scale identity systems, digital payments, regulatory technology, or public sector digital transformation, we want to hear from you.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[13px] font-[800] px-8 py-4 rounded-[6px] border transition-colors shrink-0"
                style={{
                  fontFamily: "'Gilroy','Inter',sans-serif",
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.4)",
                }}
              >
                Get in touch <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CULTURE */}
      <section className="py-20 px-8" style={{ background: "#fff", borderBottom: "1px solid #efeee7" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <FadeIn>
              <div
                className="inline-flex items-center gap-3 text-[11px] font-[800] tracking-[0.22em] uppercase mb-6"
                style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#23258c" }}
              >
                <span style={{ width: 24, height: 2, background: "#23258c", display: "inline-block" }} />
                How we work
              </div>
              <h2
                className="font-[800] text-[32px] tracking-[-0.018em] leading-[1.2]"
                style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#0e0e1a" }}
              >
                We're looking for builders.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1} className="space-y-6">
              {[
                { title: "High-performance culture.", body: "We value technical depth and local operational excellence over abstract strategy." },
                { title: "Public-private alignment.", body: "We navigate the complexity of government systems with the speed and precision of a technology company." },
                { title: "Decade-long horizon.", body: "We're not here for the exit. We're here for the infrastructure." },
              ].map((item) => (
                <div key={item.title} className="space-y-1" style={{ paddingTop: 20, borderTop: "1px solid #efeee7" }}>
                  <p
                    className="font-[700] text-[15px]"
                    style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#0e0e1a" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-[15px] leading-[1.6]" style={{ color: "#3b3e5e" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
