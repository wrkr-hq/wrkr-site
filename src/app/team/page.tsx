import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Landmark, TrendingUp } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4">Our People</p>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-primary mb-8 leading-[0.8]">
              Team.
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              WRKR is run by a team of professionals with deep experience across technology, government, finance, and international development. We bring together the operators, investors, and policy advisors needed to build and scale infrastructure that has to work — for citizens, regulators, and the institutions that depend on it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Disciplines Section */}
      <section className="py-24 px-6 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16">
            <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2">Our Capabilities</p>
            <h2 className="text-4xl font-bold tracking-tighter">Three disciplines, one operating team.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              {
                title: "Engineering & product.",
                desc: "Builders who have shipped at national scale. Identity, payments, and risk-compliance systems. We're operators first who understand the constraints — uptime, latency, security, public solvency — that define this category.",
                icon: Code
              },
              {
                title: "Public sector & policy.",
                desc: "Experts who understand the regulatory environment. We know how decisions get made, how budgets get wired, and what makes implementations stick.",
                icon: Landmark
              },
              {
                title: "Investment & finance.",
                desc: "Capital allocators who understand long-term infrastructure. We're paid by outcomes, not engagements — and our structures are built in alignment with the institutions we serve.",
                icon: TrendingUp
              }
            ].map((discipline, i) => (
              <FadeIn key={discipline.title} delay={i * 0.1}>
                <div className="bg-primary p-12 h-full space-y-8 hover:bg-white/5 transition-colors cursor-default">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-lg">
                    <discipline.icon className="text-accent" size={24} />
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-2xl font-bold tracking-tight">{discipline.title}</h4>
                     <p className="text-sm text-gray-400 leading-relaxed">{discipline.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn className="mt-24 p-16 bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-12">
             <div className="space-y-4 max-w-xl">
                <p className="text-[10px] uppercase tracking-widest text-accent font-bold">One Team. One Mandate.</p>
                <h3 className="text-3xl font-bold tracking-tight">"We build infrastructure that has to be right."</h3>
             </div>
             <div className="w-full md:w-auto">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-none px-12 h-14 font-bold">
                   Our operating model
                </Button>
             </div>
          </FadeIn>
        </div>
      </section>

      {/* Team Values / Culture */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <FadeIn className="space-y-8" direction="right">
            <h2 className="text-4xl font-bold text-primary tracking-tighter leading-tight">We're looking for builders.</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have experience in national-scale identity systems, central bank digital currencies, regulatory technology, or public sector digital transformation, we want to hear from you.
            </p>
            <div className="pt-4">
               <Button size="lg" className="rounded-none px-12">
                  View open positions
               </Button>
            </div>
          </FadeIn>
          <FadeIn className="bg-[#F8F9FA] p-12 space-y-6" direction="left">
             <div className="space-y-2">
                <p className="text-sm font-bold text-primary">High-performance culture.</p>
                <p className="text-sm text-gray-500">We value technical depth and local operational excellence over abstract strategy.</p>
             </div>
             <div className="space-y-2">
                <p className="text-sm font-bold text-primary">Public-private alignment.</p>
                <p className="text-sm text-gray-500">We navigate the complexity of government systems with the speed and precision of a technology company.</p>
             </div>
             <div className="space-y-2">
                <p className="text-sm font-bold text-primary">Decade-long horizon.</p>
                <p className="text-sm text-gray-500">We're not here for the exit. We're here for the infrastructure.</p>
             </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

