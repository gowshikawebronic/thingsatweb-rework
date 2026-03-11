"use client";

import { ArrowRight, Check } from "lucide-react";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServiceCardData } from "./PageServiceCard";
interface FeaturedServicesProps {
  services: ServiceCardData[];
  onCardClick: (service: ServiceCardData) => void;
}

export default function FeaturedServices({ services, onCardClick }: FeaturedServicesProps) {
  return (
    <section className="py-24 bg-slate-50 font-sora">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-primary-blue font-bold tracking-widest uppercase text-xs mb-3 block">
            Core Capabilities
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-cyan-500">Powerhouse</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            Our primary domains of expertise, engineered to drive enterprise-grade transformation.
          </p>
        </div>

        {/* FEATURED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {services.map((service, index) => (
            <div 
              key={service.id}
              onClick={() => onCardClick(service)}
              className="group relative bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/10 hover:border-[#2776ea]/30 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col"
            >
              {/* Background Blob Animation */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -mr-16 -mt-16" />

              {/* Icon & Tag */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-[#2776ea]/5 text-primary-blue flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-blue group-hover:text-white transition-all duration-500">
                  <DynamicIcon name={service.icon} size={32} />
                </div>
                <span className="px-4 py-1.5 rounded-full border border-slate-100 bg-slate-50 text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:bg-white group-hover:text-primary-blue transition-colors">
                  {service.tagline}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 flex-grow">
                <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-primary-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8 line-clamp-3">
                  {service.description}
                </p>

                {/* Key Points */}
                <div className="space-y-3 mb-8">
                  {service.points.slice(0, 3).map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                      <span className="text-sm font-bold text-slate-600">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="relative z-10 mt-auto pt-8 border-t border-slate-100 flex items-center gap-2 text-primary-blue font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                <span>Explore Solution</span>
                <ArrowRight size={16} />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}