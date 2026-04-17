import React, { useRef, useState } from "react";
import { Header } from "@/components/Header";
import { Mail, Github, Linkedin, MessageSquare, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    // Using the same EmailJS logic from the portfolio
    // @ts-ignore
    window.emailjs
      .sendForm(
        "service_akgmg6r",
        "template_nx4fvkb",
        formRef.current,
        "zmPiRmxRkScwdiYFX"
      )
      .then(() => {
        setIsSending(false);
        setIsSuccess(true);
        formRef.current?.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      })
      .catch((error: any) => {
        setIsSending(false);
        console.error("EmailJS Error:", error);
        alert("Direct uplink failed. Please email dte.solutions.llc@gmail.com");
      });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />

      <section className="pt-16 pb-12 border-b border-border bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4 uppercase italic">
              Contact <span className="text-primary">Links</span>
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed font-medium">
              Initiate contact for data engineering collaborations, SQL architecture audits, or professional inquiries.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Contact Info & Narrative */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-black uppercase tracking-tight text-foreground flex items-center gap-3">
                  <ShieldCheck className="text-primary w-6 h-6" />
                  Direct Channels
                </h2>
                <p className="text-foreground/60 leading-relaxed text-sm">
                  Leveraging a background in PR and Marketing to ensure every data-driven decision is backed by high-integrity communication.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Email</p>
                    <a href="mailto:dte.solutions.llc@gmail.com" className="text-sm font-bold hover:text-primary transition-colors">dte.solutions.llc@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <Github size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Github</p>
                    <a href="https://github.com/DTE-84" target="_blank" rel="noreferrer" className="text-sm font-bold hover:text-secondary transition-colors">DTE-84</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Base of Operations</p>
                    <p className="text-sm font-bold">St. Louis, MO // Quincy, IL</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-muted/20 border border-border rounded-2xl">
                <p className="text-xs italic text-foreground/50 leading-relaxed uppercase font-black tracking-widest">
                  "Turning raw transactional data into actionable business intelligence through deterministic modeling."
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden relative shadow-2xl">
              {isSuccess && (
                <div className="absolute inset-0 z-50 bg-primary flex flex-col items-center justify-center text-primary-foreground text-center p-8 animate-in fade-in">
                  <CheckCircle2 size={64} className="mb-6 animate-bounce" />
                  <h3 className="text-2xl font-black uppercase italic mb-4">Confirmed</h3>
                  <p className="font-medium">Direct message has been routed. Stand by for response.</p>
                </div>
              )}

              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <MessageSquare className="text-primary w-5 h-5" />
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-foreground/80">Message Portal</h3>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 px-1">Identity // Name</label>
                    <input 
                      name="user_name"
                      type="text" 
                      required
                      placeholder="ENTER NAME..."
                      className="w-full bg-background border border-border p-4 rounded-lg focus:border-primary outline-none transition-colors font-mono text-xs uppercase"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 px-1">Channel // Email</label>
                    <input 
                      name="user_email"
                      type="email" 
                      required
                      placeholder="ENTER EMAIL..."
                      className="w-full bg-background border border-border p-4 rounded-lg focus:border-primary outline-none transition-colors font-mono text-xs uppercase"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 px-1"> Message</label>
                    <textarea 
                      name="message"
                      required
                      placeholder="STATE YOUR INQUIRY..."
                      className="w-full bg-background border border-border p-4 rounded-lg focus:border-primary outline-none h-40 transition-colors font-mono text-xs uppercase resize-none"
                    />
                  </div>

                  <button 
                    disabled={isSending}
                    className="w-full py-5 bg-primary text-primary-foreground font-black uppercase tracking-[0.2em] italic text-sm rounded-xl hover:bg-primary/90 hover:scale-[1.02] transition-all disabled:opacity-50"
                  >
                    {isSending ? "ROUTING TRANSMISSION..." : "Execute Uplink"}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
