"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/app/services/data/types";
import SectionHeader from "@/components/common/SectionHeader";
import Link from "next/link";

export default function UniversalGetStarted({ data }: { data: ServicePageData['getStarted'] }) {
  if (!data) return null;

  return (
    <section className="bg-transparent py-24 font-sora relative overflow-hidden">
      <div className="mx-auto px-6 max-w-7xl relative z-10">

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
            const accentColor = isAccent ? "text-brand-green" : "text-brand-blue";
            const btnColor = isAccent ? "bg-gradient-green" : "bg-gradient-blue";

            return (
              <div key={index} className="flex flex-col rounded-[2rem] p-8 bg-white/60 dark:bg-white/[0.06] backdrop-blur-2xl border border-white/50 dark:border-white/[0.08] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">

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

                <Link href="/contact" className={`w-full inline-flex items-center justify-center gap-2 text-menu font-bold uppercase tracking-widest py-4 rounded-xl transition-colors text-white ${btnColor} shadow-lg hover:shadow-xl no-underline`}>
                  <span>{card.cta.text}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>

        {data.contact && (
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white/60 dark:bg-white/[0.06] backdrop-blur-2xl rounded-[2rem] p-8 md:p-10 border border-white/50 dark:border-white/[0.08] shadow-xl">

              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center text-brand-blue">
                  <DynamicIcon name="Phone" size={22} />
                </div>
                <div>
                  <h3 className="text-h5 font-black text-foreground leading-tight">{data.contact.title}</h3>
                  <p className="text-body-small font-medium text-foreground/40">{data.contact.subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {data.contact.methods.map((method, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3.5 p-4 rounded-2xl bg-foreground/[0.02] border border-foreground/5 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md hover:-translate-y-0.5 hover:border-foreground/10 transition-all duration-300 group/method"
                  >
                    <div className={`h-10 w-10 rounded-xl bg-white dark:bg-gray-800 border border-foreground/10 shadow-sm flex items-center justify-center shrink-0 group-hover/method:scale-110 transition-transform duration-300 ${method.iconColor}`}>
                      <DynamicIcon name={method.icon} size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest leading-tight mb-0.5">
                        {method.label}
                      </div>
                      <div className="text-body-small font-bold text-foreground/70 truncate group-hover/method:text-foreground transition-colors duration-300">
                        {method.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}