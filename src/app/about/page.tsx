import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Zap, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4">About</p>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-primary mb-8 leading-[0.8]">
              About <span className="text-[#1847F0]">WRKR.</span>
            </h1>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-600 leading-relaxed">
                WRKR Holding Co. invests in and builds the digital infrastructure that public agencies and regulated industries depend on. We operate at the intersection of public and private sectors — combining capital, technical depth, and on-the-ground implementation.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-[#F8F9FA] p-8 space-y-4">
                <p className="text-sm font-bold uppercase tracking-widest text-primary">Our Mission</p>
                <p className="text-lg font-medium text-primary leading-tight">
                  To build the digital infrastructure that transforms how citizens access essential services and accelerates development across Africa.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <FadeIn className="space-y-8" direction="right">
            <p className="text-[10px] uppercase tracking-widest text-accent font-bold">Our Philosophy</p>
            <h2 className="text-4xl font-bold tracking-tighter leading-tight">A holding company — not a fund, not a consultancy. We build for the long arc.</h2>
            <p className="text-gray-400 leading-relaxed">
              Digital public infrastructure is the most consequential build of the next decade in Africa. Identity, payments, and the records that sit between citizens and their institutions are being built now — and the choices made today will shape governance, inclusion, and growth for thirty years.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We focus on regulated verticals — payments, identity, compliance, banking — because the cost of failure is high and the reward for getting it right is durable. These aren't winner-take-all categories. They're built piece by piece, market by market, by operators who stay.
            </p>
          </FadeIn>
          <FadeIn className="bg-white/5 p-12 space-y-8 backdrop-blur-sm" direction="left">
            <h3 className="text-2xl font-bold italic">"Be Africa's trusted leader in building digital public infrastructure that works for everyone."</h3>
            <div className="pt-8 border-t border-white/10 flex justify-between items-center">
              <p className="text-sm font-bold uppercase tracking-widest text-accent">Vision</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Our Path</p>
            <h2 className="text-4xl font-bold text-primary tracking-tighter">How we got here.</h2>
          </FadeIn>

          <div className="space-y-24">
            {[
              {
                year: "2019 — 2022",
                title: "Foundations.",
                desc: "Launched government work with the Electronic Vehicle Administration System, processing tens of millions of transactions and increasing administrative efficiency by 120%. Established core partnerships with public agencies across Nigeria and built our first identity verification infrastructure."
              },
              {
                year: "2023 — 2025",
                title: "Building the portfolio.",
                desc: "Founded Slice Finance (compliance & regulation, 2023), launched Orchestrate (digital payments, 2023), and built out our Four Layer stack. Expanded services to 26 state governments and 100+ companies across our markets."
              },
              {
                year: "2026 + Future",
                title: "Scaling proven solutions.",
                desc: "Added Wavepoint to the portfolio (2026). Scaling proven infrastructure across multiple markets, deepening AI capabilities in compliance and financial services, and scaling cross-border digital integration. Goal: 15 African countries by 2030."
              }
            ].map((item, i) => (
              <FadeIn key={i} className="grid grid-cols-1 lg:grid-cols-4 gap-8 border-t border-gray-100 pt-8">
                <div className="lg:col-span-1">
                  <p className="text-xl font-bold text-primary">{item.year}</p>
                </div>
                <div className="lg:col-span-3 space-y-4">
                  <h4 className="text-3xl font-bold tracking-tight text-primary">{item.title}</h4>
                  <p className="text-gray-500 leading-relaxed max-w-2xl">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Values</p>
            <h2 className="text-4xl font-bold text-primary tracking-tighter">What we hold ourselves to.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Financial stability.",
                desc: "Government contracts and private sector revenue create stable cash flows that fund long-term work.",
                icon: ShieldCheck
              },
              {
                title: "Performance.",
                desc: "142% average portfolio government revenue growth, 89% reduction in local fraud implementations.",
                icon: Zap
              },
              {
                title: "Strategic goals.",
                desc: "15 African countries by 2030, with expanded AI capabilities in compliance and financial inclusion.",
                icon: Target
              }
            ].map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div className="bg-white p-10 h-full space-y-6 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-lg">
                    <value.icon className="text-primary" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-primary">{value.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white text-center">
        <FadeIn className="max-w-2xl mx-auto space-y-8">
          <h3 className="text-4xl font-bold tracking-tighter text-primary">Join the mission.</h3>
          <p className="text-gray-500">We are always looking for operators, engineers, and policy experts who want to build the future of African infrastructure.</p>
          <Button size="lg" className="rounded-none px-12">
            View open roles
          </Button>
        </FadeIn>
      </section>
    </div>
  );
}

