"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/AllData/services/types";
import SectionHeader from "@/components/common/SectionHeader";
import { servicesRegistry } from "@/app/services/data/servicesRegistry";
import FadeUp from "@/components/UI/FadeUp";
import TextureOverlay from "@/components/UI/TextureOverlay";

// Convert servicesRegistry to an array format for easy mapping
const allServices = Object.keys(servicesRegistry).map(key => {
  const service = servicesRegistry[key];
  return {
    id: key,
    name: service.preview.title,
    href: `/services?category=${key}`,
    icon: service.preview.icon,
    desc: service.preview.tagline,
  };
});

export default function UniversalRelatedResources({ data }: { data: ServicePageData['relatedResources'] & { id?: string } }) {
  const hasCustomServices = data?.services && data.services.length > 0;

  return (
    <section className="relative bg-transparent py-24 overflow-hidden">
      <div className="container-custom relative z-10">

        {/* --- SECTION: RELATED SERVICES --- */}
        <div className="mb-12">
          <SectionHeader
            badge="Ecosystem"
            title="Explore More Capabilities"
            description="Discover our other specialized services to complete your digital strategy."
            centered={true}
            className="max-w-3xl mx-auto mb-16"
            size="default"
          />

          {/* DATA-DRIVEN SERVICES */}
          {hasCustomServices ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.services.map((service, index) => {
                const matchedService = allServices.find(item => item.id === service.id);
                const finalHref = matchedService ? matchedService.href : `/services?category=${service.id}`;
                const isGreen = index % 2 === 0;

                return (
                  <FadeUp key={index} delay={index * 60}>
                    <Link
                      href={finalHref}
                      className="group relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl p-6 rounded-[2rem] border border-white/50 dark:border-white/10 shadow-xl shadow-foreground/[0.03] hover:shadow-2xl transition-all duration-500 flex flex-col items-start h-full overflow-hidden hover:-translate-y-1 no-underline"
                    >
                      <TextureOverlay className="opacity-[0.03]" />

                      {/* Soft Hover Glow */}
                      <div className={`absolute -top-10 -right-10 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-700 pointer-events-none ${isGreen ? 'bg-brand-green' : 'bg-brand-blue'}`}></div>

                      <div className={`relative z-10 h-12 w-12 rounded-xl ${service.bg} flex items-center justify-center ${service.color} mb-5 group-hover:scale-110 transition-transform`}>
                        <DynamicIcon name={service.icon} size={24} />
                      </div>

                      <h4 className="relative z-10 text-lg font-display font-bold text-foreground group-hover:text-brand-green mb-2 transition-colors tracking-tight">
                        {service.title}
                      </h4>

                      <div className="relative z-10 flex items-center gap-2 text-sm font-bold text-foreground/40 group-hover:text-brand-green transition-colors mt-auto uppercase tracking-wider">
                        View Details <ArrowRight size={16} />
                      </div>
                    </Link>
                  </FadeUp>
                );
              })}
            </div>
          ) : (
            /* FALLBACK: ALL SERVICES FROM REGISTRY */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allServices.map((service, index) => {
                const isGreen = index % 2 === 0;

                return (
                  <FadeUp key={index} delay={index * 40}>
                    <Link
                      href={service.href}
                      className="group relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl p-6 rounded-[2rem] border border-white/50 dark:border-white/10 shadow-xl shadow-foreground/[0.03] hover:shadow-2xl transition-all duration-500 flex flex-col items-start h-full overflow-hidden hover:-translate-y-1 no-underline"
                    >
                      <TextureOverlay className="opacity-[0.03]" />

                      <div className={`absolute -top-10 -right-10 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-700 pointer-events-none ${isGreen ? 'bg-brand-green' : 'bg-brand-blue'}`}></div>

                      <div className="relative z-10 h-12 w-12 rounded-xl bg-foreground/5 flex items-center justify-center text-brand-blue mb-5 group-hover:scale-110 transition-transform">
                        <DynamicIcon name={service.icon} size={24} />
                      </div>

                      <h4 className="relative z-10 text-lg font-display font-bold text-foreground group-hover:text-brand-green mb-2 transition-colors tracking-tight">
                        {service.name}
                      </h4>

                      <p className="relative z-10 text-sm text-foreground/60 leading-relaxed mb-6 flex-1 m-0">
                        {service.desc}
                      </p>

                      <div className="relative z-10 flex items-center gap-2 text-sm font-bold text-foreground/40 group-hover:text-brand-green transition-colors mt-auto uppercase tracking-wider">
                        View Service <ArrowRight size={16} />
                      </div>
                    </Link>
                  </FadeUp>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}