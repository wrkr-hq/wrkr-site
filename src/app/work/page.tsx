import { Button } from "@/components/ui/button";
import { ArrowRight, Landmark, FileText, Settings, LineChart } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

export default function WorkPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4">Government Work</p>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-primary mb-8 leading-[0.8]">
              Digital public infrastructure for <span className="text-[#1847F0]">African governments.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              Advisors, implementation, and co-investment in public projects.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Our Services</p>
            <h2 className="text-4xl font-bold text-primary tracking-tighter">What we do for governments.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 shadow-sm">
            {[
              {
                title: "Digital Public Infrastructure.",
                desc: "Designing and implementing digital service platforms — identity, payments, and record systems — that change how governments deliver to citizens.",
                icon: Landmark
              },
              {
                title: "Digital Payment Solutions.",
                desc: "Integrated payment systems for government revenue collection and disbursement. Lower transaction costs, higher transparency.",
                icon: Settings
              },
              {
                title: "Policy & Regulatory Advisory.",
                desc: "Policy development, governance frameworks, and regulatory strategy that balances innovation with public protection.",
                icon: FileText
              },
              {
                title: "Implementation & Capacity Building.",
                desc: "Knowledge transfer and local capability building so digital transformation outlasts any single engagement.",
                icon: LineChart
              }
            ].map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.1}>
                <div className="bg-white p-12 h-full space-y-6 hover:bg-gray-50 transition-colors group">
                  <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-lg group-hover:bg-primary transition-colors">
                    <service.icon className="text-primary group-hover:text-white transition-colors" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold text-primary tracking-tight">{service.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Sharing Section */}
      <section className="py-24 px-6 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <FadeIn className="space-y-8" direction="right">
            <h2 className="text-4xl font-bold text-primary tracking-tighter leading-tight">We share the risk.</h2>
            <p className="text-gray-600 leading-relaxed">
              We invest in public projects alongside governments — taking on delivery risk and sharing in long-term outcomes — rather than billing hourly and walking away.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This changes the engagement. We're paid when the system works, scales, and serves citizens. Our incentives line up with the agency's, and the work is built to keep working long after we move on.
            </p>
          </FadeIn>
          <FadeIn className="p-12 bg-primary text-white space-y-4" direction="left">
             <p className="text-sm font-bold uppercase tracking-widest text-accent">Our Model</p>
             <p className="text-3xl font-bold leading-tight italic">"Alignment through co-investment. Performance-based delivery."</p>
          </FadeIn>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Track Record</p>
            <h2 className="text-4xl font-bold text-primary tracking-tighter">What we've shipped.</h2>
          </FadeIn>

          <div className="space-y-32">
            {[
              {
                title: "Electronic Vehicle Administration System.",
                location: "Nigeria",
                years: "2019 - 2021",
                desc: "Replaced fragmented manual processes with a unified digital system for vehicle registration, licensing, and revenue collection. Processed tens of millions of transactions, improved administrative efficiency by 120%, and established the operating template for our subsequent state-government deployments."
              },
              {
                title: "State-government revenue and licensing platforms.",
                location: "Multiple Markets",
                years: "2021 - 2023",
                desc: "Deployed statewide revenue collection and licensing infrastructure across 26 state governments. 142% average revenue growth for participating partners and an 89% reduction in fraud across implementations."
              },
              {
                title: "Cross-border digital identity infrastructure.",
                location: "Regional Expansion",
                years: "2024 - 2026",
                desc: "Built foundational biometric identity verification infrastructure used by both public agencies for civil services and private operators for KYC and financial inclusion."
              }
            ].map((project, i) => (
              <FadeIn key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-t border-gray-100 pt-16">
                <div className="lg:col-span-4 space-y-4">
                  <div className="bg-gray-100 aspect-video rounded-none flex items-center justify-center overflow-hidden border border-gray-200">
                    <span className="text-gray-400 font-bold text-xs uppercase tracking-widest">Case Study Image</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                    <span>{project.location}</span>
                    <span>{project.years}</span>
                  </div>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  <h3 className="text-3xl font-bold text-primary tracking-tight">{project.title}</h3>
                  <p className="text-lg text-gray-500 leading-relaxed">
                    {project.desc}
                  </p>
                  <Button variant="link" className="text-primary p-0 h-auto font-bold group">
                    Learn more about this project <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

