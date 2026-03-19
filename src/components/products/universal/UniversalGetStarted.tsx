"use client";

import { ArrowRight, CheckCircle2, Globe, Mail, Phone } from "lucide-react";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/AllData/services/types";
import SectionHeader from "@/components/common/SectionHeader";
import Link from "next/link";

export default function UniversalGetStarted({ data }: { data: ServicePageData['getStarted'] }) {
  if (!data) return null;

  return (
    <>
      <section className=" py-24 font-sora relative overflow-hidden">
        <div className=" mx-auto px-6 max-w-7xl relative z-10">

          <SectionHeader
            badge={data.badge}
            title={data.titleLines.join(" ")}
            description={data.description}
            centered={true}
            className="max-w-3xl mx-auto mb-16"
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {data.cards.map((card, index) => {
              const isAccent = card.theme === "dark";
              const accentColor = isAccent ? "text-[#76ea27]" : "text-[#2776ea]";
              const btnColor = isAccent ? "bg-[#76ea27] hover:bg-[#529438]" : "bg-[#2776ea] hover:bg-[#3b6499]";

              return (
                <div key={index} className="flex flex-col rounded-[2rem] p-8 bg-white dark:bg-gray-900 border border-foreground/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">

                  <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-6 bg-foreground/5 border border-foreground/10 shadow-sm ${accentColor}`}>
                    <DynamicIcon name={card.icon} size={26} />
                  </div>

                  <h3 className="text-h3 font-black mb-2 text-foreground">{card.title}</h3>
                  <p className="text-body font-medium mb-8 text-foreground/60">{card.description}</p>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {data.cards[index].list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-caption font-bold text-foreground/60">
                        <CheckCircle2 className={`shrink-0 mt-0.5 ${accentColor}`} size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className={`w-full inline-flex items-center justify-center gap-2 text-menu font-bold uppercase tracking-widest py-4 rounded-xl transition-colors text-white ${btnColor}`}>
                    <span>{card.cta.text}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-[2rem] p-8 md:p-10 border border-foreground/10 shadow-sm relative overflow-hidden">

              {/* Subtle Background Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
                <div className="flex items-center gap-5">
                  <div className="h-14 w-14 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue shadow-inner shrink-0">
                    <Phone size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-h5 font-black text-foreground leading-tight mb-1">Get in Touch</h3>
                    <p className="text-body-small font-medium text-foreground/60">Connect with our dedicated support team</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 grid sm:grid-cols-3 gap-4">
                {/* Website Card */}
                <a
                  href="https://www.store-tech.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-5 rounded-2xl bg-foreground/5 hover:bg-background border border-foreground/10 hover:border-brand-blue/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-10 w-10 rounded-xl bg-background border border-foreground/10 shadow-sm flex items-center justify-center text-foreground/40 group-hover:text-brand-blue mb-4 transition-colors">
                    <Globe size={18} strokeWidth={2} />
                  </div>
                  <div className="text-[10px] font-black text-foreground/40 uppercase tracking-widest mb-1">
                    Website
                  </div>
                  <div className="text-body-small font-bold text-foreground/70 group-hover:text-brand-blue transition-colors truncate">
                    www.store-tech.se
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href="mailto:sales@store-tech.se"
                  className="group flex flex-col p-5 rounded-2xl bg-foreground/5 hover:bg-background border border-foreground/10 hover:border-brand-blue/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-10 w-10 rounded-xl bg-background border border-foreground/10 shadow-sm flex items-center justify-center text-foreground/40 group-hover:text-brand-blue mb-4 transition-colors">
                    <Mail size={18} strokeWidth={2} />
                  </div>
                  <div className="text-[10px] font-black text-foreground/40 uppercase tracking-widest mb-1">
                    Email
                  </div>
                  <div className="text-body-small font-bold text-foreground/70 group-hover:text-brand-blue transition-colors truncate">
                    sales@store-tech.se
                  </div>
                </a>

                {/* Phone Card */}
                <a
                  href="tel:+917200088500"
                  className="group flex flex-col p-5 rounded-2xl bg-foreground/5 hover:bg-background border border-foreground/10 hover:border-brand-blue/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-10 w-10 rounded-xl bg-background border border-foreground/10 shadow-sm flex items-center justify-center text-foreground/40 group-hover:text-brand-blue mb-4 transition-colors">
                    <Phone size={18} strokeWidth={2} />
                  </div>
                  <div className="text-[10px] font-black text-foreground/40 uppercase tracking-widest mb-1">
                    Phone (India)
                  </div>
                  <div className="text-body-small font-bold text-foreground/70 group-hover:text-brand-blue transition-colors truncate">
                    +91 72000 88500
                  </div>
                </a>
              </div>

            </div>
          </div>


        </div>
      </section>

    </>



  );
}