import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4">Contact</p>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-primary mb-8 leading-[0.8]">
              Let's stay in <span className="text-[#1847F0]">touch.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              Building something that has to be right? We want to hear about it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 bg-[#F8F9FA] border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info */}
          <div className="space-y-16">
            <FadeIn className="space-y-8" direction="right">
              <h3 className="text-[10px] uppercase tracking-widest text-primary font-bold">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                   <Mail className="text-[#1847F0] shrink-0" size={24} />
                   <div>
                      <p className="font-bold text-primary">Email</p>
                      <p className="text-gray-500">hello@wrkr.com</p>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <Phone className="text-[#1847F0] shrink-0" size={24} />
                   <div>
                      <p className="font-bold text-primary">Phone</p>
                      <p className="text-gray-500">+1 (555) 000-WRKR</p>
                   </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="space-y-8" direction="right" delay={0.2}>
              <h3 className="text-[10px] uppercase tracking-widest text-primary font-bold">Global Presence</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                   <div className="flex items-start gap-2">
                      <MapPin className="text-[#1847F0] shrink-0" size={20} />
                      <p className="font-bold text-primary">Lagos, Nigeria</p>
                   </div>
                   <p className="text-sm text-gray-500 leading-relaxed">
                      123 Victoria Island,<br />
                      Lagos, Nigeria.
                   </p>
                </div>
                <div className="space-y-4">
                   <div className="flex items-start gap-2">
                      <MapPin className="text-[#1847F0] shrink-0" size={20} />
                      <p className="font-bold text-primary">London, UK</p>
                   </div>
                   <p className="text-sm text-gray-500 leading-relaxed">
                      45 Canary Wharf,<br />
                      London E14 5AB.
                   </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn className="p-8 bg-white border border-gray-100 shadow-sm" direction="right" delay={0.4}>
               <p className="text-sm text-gray-500 italic">"WRKR is a team of builders and public policy experts. We co-invest and co-lead with our institutional partners."</p>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <FadeIn className="bg-white p-12 shadow-2xl border border-gray-100" direction="left">
             <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Full Name</label>
                      <input type="text" className="w-full border-b border-gray-200 py-3 focus:border-primary outline-none transition-colors" placeholder="Jane Doe" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Email</label>
                      <input type="email" className="w-full border-b border-gray-200 py-3 focus:border-primary outline-none transition-colors" placeholder="jane@example.com" />
                   </div>
                </div>
                
                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">What describes you?</label>
                   <select className="w-full border-b border-gray-200 py-3 focus:border-primary outline-none transition-colors bg-white">
                      <option>Public Agency / Government</option>
                      <option>Portfolio Founder / Operator</option>
                      <option>Investor</option>
                      <option>Media</option>
                      <option>Other</option>
                   </select>
                </div>
                
                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Project Brief</label>
                   <textarea rows={4} className="w-full border-b border-gray-200 py-3 focus:border-primary outline-none transition-colors resize-none" placeholder="Briefly describe what you're working on..." />
                </div>
                
                <Button className="w-full h-14 rounded-none font-bold text-lg flex items-center justify-center gap-2">
                   Send message <Send size={20} />
                </Button>
                
                <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest">We respond within 24 hours.</p>
             </form>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

