"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/app/services/data/types";
import SectionHeader from "@/components/common/SectionHeader";
import Link from "next/link";

export default function UniversalGetStarted({ data }: { data: ServicePageData['getStarted'] }) {
  if (!data) return null;

  return (
    <section className="bg-slate-50/50 container-pd py-24 font-sora relative overflow-hidden border-t border-slate-100">
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
              <div key={index} className="flex flex-col rounded-[2rem] p-8 bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 group">

                <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-6 bg-slate-50 border border-slate-100 shadow-sm ${accentColor}`}>
                  <DynamicIcon name={card.icon} size={26} />
                </div>

                <h3 className="text-h3 font-black mb-2 text-slate-900">{card.title}</h3>
                <p className="text-body font-medium mb-8 text-slate-500">{card.description}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {data.cards[index].list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-caption font-bold text-slate-600">
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

        {data.contact && (
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-sm">

              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#2776ea]">
                  <DynamicIcon name="Phone" size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 leading-tight">{data.contact.title}</h3>
                  <p className="text-sm font-medium text-slate-400">{data.contact.subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {data.contact.methods.map((method, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50/70 border border-slate-100 hover:bg-white hover:shadow-md hover:shadow-blue-900/5 hover:-translate-y-0.5 hover:border-slate-200 transition-all duration-300 group/method"
                  >
                    <div className={`h-10 w-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0 group-hover/method:scale-110 transition-transform duration-300 ${method.iconColor}`}>
                      <DynamicIcon name={method.icon} size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight mb-0.5">
                        {method.label}
                      </div>
                      <div className="text-sm font-bold text-slate-700 truncate group-hover/method:text-slate-900 transition-colors duration-300">
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