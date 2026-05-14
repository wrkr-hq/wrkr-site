"use client";

import { FadeIn } from "@/components/fade-in";

export default function ContactPage() {
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
              Contact
            </div>
            <h1
              className="font-[800] leading-[1.05] tracking-[-0.028em] mb-6"
              style={{ fontFamily: "'Gilroy','Inter',sans-serif", fontSize: "clamp(48px,6vw,64px)", color: "#0e0e1a", maxWidth: "18ch" }}
            >
              Let's stay in touch.
            </h1>
            <p className="text-[19px] leading-[1.6] max-w-[660px]" style={{ color: "#3b3e5e" }}>
              Building something that has to be right? We want to hear about it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-24 px-8" style={{ background: "#f7f6f1" }}>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-20">

          {/* Left — contact details */}
          <div className="space-y-0">
            <FadeIn>
              <div className="space-y-0">
                {[
                  { k: "Email",  v: "info@getwrkr.com", href: "mailto:info@getwrkr.com" },
                  { k: "Phone",  v: "+1 646 631 6118",  href: "tel:+16466316118" },
                ].map((m, i) => (
                  <div
                    key={m.k}
                    className="py-5"
                    style={{ borderTop: i === 0 ? "none" : "1px solid #efeee7", paddingTop: i === 0 ? 0 : undefined }}
                  >
                    <p
                      className="text-[11px] font-[800] tracking-[0.22em] uppercase mb-2"
                      style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#6b6e88" }}
                    >
                      {m.k}
                    </p>
                    <a
                      href={m.href}
                      className="font-[500] text-[18px] hover:underline transition-colors"
                      style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#23258c" }}
                    >
                      {m.v}
                    </a>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.15} className="pt-10">
              <div style={{ borderTop: "1px solid #efeee7", paddingTop: 40 }}>
                <p
                  className="text-[11px] font-[800] tracking-[0.22em] uppercase mb-6"
                  style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#6b6e88" }}
                >
                  Who we hear from
                </p>
                <ul className="space-y-2 text-[15px]" style={{ color: "#3b3e5e" }}>
                  {[
                    "Government & public sector partners",
                    "Founders in payments, identity, compliance, banking",
                    "Co-investors and institutional partners",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        style={{ marginTop: 7, width: 6, height: 6, borderRadius: "50%", background: "#a3651f", flexShrink: 0, display: "inline-block" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Right — form */}
          <FadeIn delay={0.1}>
            <form
              className="p-8 space-y-5"
              style={{ background: "#fff", border: "1px solid #efeee7" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-[11px] font-[800] tracking-[0.16em] uppercase"
                    style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#3b3e5e" }}
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 text-[14px] outline-none transition-all"
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      color: "#0e0e1a",
                      border: "1px solid #efeee7",
                      borderRadius: 4,
                      background: "#f7f6f1",
                    }}
                    onFocus={(e) => { e.target.style.borderColor = "#23258c"; e.target.style.boxShadow = "0 0 0 3px rgba(35,37,140,0.18)"; }}
                    onBlur={(e)  => { e.target.style.borderColor = "#efeee7"; e.target.style.boxShadow = ""; }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-[11px] font-[800] tracking-[0.16em] uppercase"
                    style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#3b3e5e" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full px-3.5 py-2.5 text-[14px] outline-none transition-all"
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      color: "#0e0e1a",
                      border: "1px solid #efeee7",
                      borderRadius: 4,
                      background: "#f7f6f1",
                    }}
                    onFocus={(e) => { e.target.style.borderColor = "#23258c"; e.target.style.boxShadow = "0 0 0 3px rgba(35,37,140,0.18)"; }}
                    onBlur={(e)  => { e.target.style.borderColor = "#efeee7"; e.target.style.boxShadow = ""; }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-[11px] font-[800] tracking-[0.16em] uppercase"
                  style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#3b3e5e" }}
                >
                  Organization
                </label>
                <input
                  type="text"
                  placeholder="Your organization"
                  className="w-full px-3.5 py-2.5 text-[14px] outline-none transition-all"
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    color: "#0e0e1a",
                    border: "1px solid #efeee7",
                    borderRadius: 4,
                    background: "#f7f6f1",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = "#23258c"; e.target.style.boxShadow = "0 0 0 3px rgba(35,37,140,0.18)"; }}
                  onBlur={(e)  => { e.target.style.borderColor = "#efeee7"; e.target.style.boxShadow = ""; }}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-[11px] font-[800] tracking-[0.16em] uppercase"
                  style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#3b3e5e" }}
                >
                  What brings you here?
                </label>
                <select
                  className="w-full px-3.5 py-2.5 text-[14px] outline-none transition-all"
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    color: "#0e0e1a",
                    border: "1px solid #efeee7",
                    borderRadius: 4,
                    background: "#f7f6f1",
                    appearance: "none",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = "#23258c"; e.target.style.boxShadow = "0 0 0 3px rgba(35,37,140,0.18)"; }}
                  onBlur={(e)  => { e.target.style.borderColor = "#efeee7"; e.target.style.boxShadow = ""; }}
                >
                  <option value="">Select one…</option>
                  <option value="government">Government partnership</option>
                  <option value="portfolio">Portfolio / operator</option>
                  <option value="coinvest">Co-investment</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-[11px] font-[800] tracking-[0.16em] uppercase"
                  style={{ fontFamily: "'Gilroy','Inter',sans-serif", color: "#3b3e5e" }}
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Briefly describe what you're working on…"
                  className="w-full px-3.5 py-2.5 text-[14px] outline-none transition-all resize-vertical"
                  style={{
                    fontFamily: "'Inter',sans-serif",
                    color: "#0e0e1a",
                    border: "1px solid #efeee7",
                    borderRadius: 4,
                    background: "#f7f6f1",
                    minHeight: 110,
                  }}
                  onFocus={(e) => { e.target.style.borderColor = "#23258c"; e.target.style.boxShadow = "0 0 0 3px rgba(35,37,140,0.18)"; }}
                  onBlur={(e)  => { e.target.style.borderColor = "#efeee7"; e.target.style.boxShadow = ""; }}
                />
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3.5 text-[13px] font-[800] text-white rounded-[6px] transition-colors"
                  style={{
                    fontFamily: "'Gilroy','Inter',sans-serif",
                    background: "#23258c",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#1c1d70")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#23258c")}
                >
                  Send message →
                </button>
              </div>
              <p
                className="text-[11px] text-center tracking-[0.12em] uppercase"
                style={{ color: "#6b6e88" }}
              >
                We respond within 24 hours.
              </p>
            </form>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
