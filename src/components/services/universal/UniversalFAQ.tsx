"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { ServicePageData } from "@/AllData/services/types";
import SectionHeader from "@/components/common/SectionHeader";
import FadeUp from "@/components/UI/FadeUp";

export default function UniversalFAQ({ data }: { data: ServicePageData['faq'] }) {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  if (!data || !data.items || data.items.length === 0) return null;

  return (
    <section className="relative bg-transparent py-24 md:py-32 overflow-hidden" id="faq">

      <div className="container-custom max-w-3xl relative z-10">

        {/* CENTERED HEADER */}
        <SectionHeader
          badge="FAQ"
          title={data.heading}
          description="Answers to common questions about our process and deliverables"
          centered={true}
          className="mb-12"
          size="default"
        />

        {/* FAQ LIST */}
        <FadeUp>
          <div className="divide-y divide-foreground/10 border-t border-b border-foreground/10">
            {data.items.map((item, index) => {
              const isOpen = openItem === index;
              const isGreen = index % 2 === 0;

              return (
                <div key={index} className="group">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full text-left py-6 flex items-start gap-4 focus:outline-none cursor-pointer hover:bg-foreground/[0.02] transition-colors px-2 -mx-2 rounded-lg"
                  >
                    {/* Icon Toggle */}
                    <div className={`shrink-0 w-6 h-6 mt-1 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                      ? `${isGreen ? 'bg-brand-green' : 'bg-brand-blue'} text-white rotate-180`
                      : "bg-foreground/5 text-foreground/40 group-hover:bg-foreground/10 group-hover:text-foreground/60"
                      }`}>
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>

                    <div className="flex-1">
                      {/* Question */}
                      <h3 className={`text-h4 font-display font-bold leading-relaxed transition-colors duration-300 ${isOpen ? (isGreen ? "text-brand-green" : "text-brand-blue") : "text-foreground group-hover:text-foreground/80"
                        }`}>
                        {item.question}
                      </h3>

                      {/* Answer (Animated Height) */}
                      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 pt-3" : "grid-rows-[0fr] opacity-0 pt-0"
                        }`}>
                        <div className="overflow-hidden">
                          <p className="text-foreground/60 font-medium text-body m-0">
                            {item.answer}
                          </p>

                          {item.list && (
                            <ul className="mt-4 space-y-2">
                              {item.list.map((listItem, i) => (
                                <li key={i} className="flex items-start gap-3 text-foreground/60 font-medium text-body">
                                  <span className={`${isGreen ? 'bg-brand-green' : 'bg-brand-blue'} w-1.5 h-1.5 rounded-full mt-2.5 shrink-0`} />
                                  <span>{listItem}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {item.answerFooter && (
                            <p className="mt-4 text-foreground/60 font-medium text-body m-0">
                              {item.answerFooter}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </FadeUp>

        {/* BOTTOM CTA */}
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/40 hover:text-brand-blue transition-colors"
          >
            <MessageCircle size={14} />
            <span>Still have questions? Contact Support</span>
          </a>
        </div>

      </div>
    </section>
  );
}