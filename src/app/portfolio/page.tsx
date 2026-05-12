import { Button } from "@/components/ui/button";
import { ArrowRight, Users, CreditCard, Shield, Building2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4">Portfolio</p>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-primary mb-8 leading-[0.8]">
              Portfolio.
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              We invest in operators building infrastructure that governments and regulated businesses depend on. Long-term ownership. Real operational support.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Layers Section */}
      <section className="py-24 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Our Thesis</p>
            <h2 className="text-4xl font-bold text-primary tracking-tighter">The connective tissue.</h2>
            <p className="text-gray-500 mt-4 max-w-xl">
              Payments, banking, identity, and compliance are the connective tissue of digital public infrastructure. They aren't winner-take-all markets — they're built piece by piece, jurisdiction by jurisdiction. We build rather than flip because that's how this category compounds.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { title: "Payments", color: "bg-[#2D3142]", icon: CreditCard, count: "01" },
              { title: "Identity", color: "bg-[#1847F0]", icon: Users, count: "02" },
              { title: "Banking", color: "bg-[#080810]", icon: Building2, count: "03" },
              { title: "Compliance", color: "bg-[#F4A261]", icon: Shield, count: "04" },
            ].map((layer, i) => (
              <FadeIn key={layer.title} delay={i * 0.1}>
                <div className={cn("p-10 h-64 flex flex-col justify-between text-white group cursor-pointer transition-all hover:scale-[1.02]", layer.color)}>
                  <div className="flex justify-between items-start">
                    <layer.icon size={32} className="opacity-80 group-hover:opacity-100" />
                    <span className="text-xs font-bold opacity-30 group-hover:opacity-50 tracking-widest">{layer.count}</span>
                  </div>
                  <h4 className="text-2xl font-bold tracking-tight">{layer.title}</h4>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-32">
          {[
            {
              name: "Orchestrate",
              tag: "Payments",
              desc: "Integrated payment infrastructure for governments and regulated commerce. Reduces transaction costs while increasing financial transparency and inclusion. Used by public agencies for revenue collection and disbursement, and by private operators for regulated commerce flows.",
              stats: [
                { label: "Status", val: "Active Portfolio" },
                { label: "Sector", val: "Digital Payments" },
                { label: "Founded", val: "January 2023" },
                { label: "Scale", val: "10M+ processed" },
              ],
              icon: CreditCard,
              color: "bg-[#1847F0]"
            },
            {
              name: "Piipul",
              tag: "Identity",
              desc: "Identity verification infrastructure — the foundation layer for everything downstream. From biometric to financial inclusion to KYC compliance — Piipul issues, verifies, and federates digital identity across African public and private institutions.",
              stats: [
                { label: "Status", val: "Active Portfolio" },
                { label: "Sector", val: "Digital Identity" },
                { label: "Founded", val: "January 2023" },
                { label: "Model", val: "Public + Private Sector" },
              ],
              icon: Users,
              color: "bg-[#2D3142]"
            },
            {
              name: "Slice Finance",
              tag: "Compliance",
              desc: "Compliance infrastructure for regulated institutions. AML, sanctions, and regulatory reporting tooling for financial institutions, fintechs, and operators working across African and global jurisdictions.",
              stats: [
                { label: "Status", val: "Active Portfolio" },
                { label: "Sector", val: "Compliance & Regulation" },
                { label: "Founded", val: "2023" },
                { label: "Scope", val: "African + Global" },
              ],
              icon: Shield,
              color: "bg-[#F4A261]"
            },
            {
              name: "Wavepoint",
              tag: "Banking",
              desc: "Banking-as-a-Service for fintechs, platforms, and embedded finance providers. Lets a new generation of financial services builders offer regulated banking products without becoming banks themselves. Sits at the foundation of how regulated banking reaches African markets.",
              stats: [
                { label: "Status", val: "Active Portfolio" },
                { label: "Sector", val: "Banking infrastructure" },
                { label: "Founded", val: "2026" },
                { label: "Type", val: "Embedded Finance" },
              ],
              icon: Building2,
              color: "bg-[#080810]"
            }
          ].map((company) => (
            <FadeIn key={company.name} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-1 flex flex-col items-center">
                 <div className={cn("w-16 h-16 rounded-none flex items-center justify-center text-white", company.color)}>
                    <company.icon size={32} />
                 </div>
              </div>
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-4xl font-bold text-primary tracking-tighter mb-2">{company.name}</h3>
                  <p className="text-sm font-bold text-accent uppercase tracking-widest">{company.tag}</p>
                </div>
                <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
                  {company.desc}
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none flex items-center gap-2 group">
                  Visit platform <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </div>
              <div className="lg:col-span-4 bg-[#F8F9FA] p-8 grid grid-cols-1 gap-6">
                {company.stats.map((s) => (
                  <div key={s.label} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">{s.label}</p>
                    <p className="text-sm font-bold text-primary">{s.val}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Long-term capital.",
              desc: "We build, we don't flip. Our companies are built for decades of operation, not quarterly milestones."
            },
            {
              title: "Operational support.",
              desc: "Technical, regulatory, and go-to-market support from experts who have built and worked with governments."
            },
            {
              title: "Government access.",
              desc: "Established relationships with public agencies across multiple African markets — giving our portfolio a head start."
            }
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-accent italic">"{item.title}"</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

