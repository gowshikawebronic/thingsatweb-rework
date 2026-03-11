"use client";

import { useEffect } from "react";

export default function UniversalHeroSkeleton() {
   
   useEffect(() => {
      // 1. When the skeleton FIRST appears, tell the browser to stop auto-scrolling
      if ('scrollRestoration' in history) {
         history.scrollRestoration = 'manual';
      }

      // 2. The RETURN function runs EXACTLY when this skeleton is hidden/destroyed.
      // This guarantees the user is snapped to the top right as the real content appears.
      return () => {
         window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      };
   }, []);

   return (
      <section className="relative w-full bg-white pt-24 pb-20 lg:pt-32 lg:pb-16 font-sora overflow-hidden border-b border-slate-100">
         <div className="container-pd mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

               {/* --- SKELETON LEFT: TEXT & CTA --- */}
               <div className="max-w-2xl">
                  {/* Badge Skeleton */}
                  <div className="w-32 h-8 bg-slate-100 animate-pulse rounded-full mb-8" />

                  {/* Title Skeleton */}
                  <div className="space-y-4 mb-8">
                     <div className="w-full h-12 md:h-14 bg-slate-100 animate-pulse rounded-2xl" />
                     <div className="w-4/5 h-12 md:h-14 bg-slate-100 animate-pulse rounded-2xl" />
                  </div>

                  {/* Description Skeleton */}
                  <div className="space-y-3 mb-10">
                     <div className="w-full h-5 bg-slate-100 animate-pulse rounded-lg" />
                     <div className="w-full h-5 bg-slate-100 animate-pulse rounded-lg" />
                     <div className="w-2/3 h-5 bg-slate-100 animate-pulse rounded-lg" />
                  </div>

                  {/* CTA Skeleton */}
                  <div className="w-40 h-12 md:h-14 bg-slate-100 animate-pulse rounded-xl" />
               </div>

               {/* --- SKELETON RIGHT: VISUAL CARD --- */}
               <div className="relative flex flex-col lg:block items-center lg:items-end mt-12 lg:mt-0">
                  <div className="relative z-10 w-full max-w-md bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mx-auto lg:mr-0">

                     {/* Status Bar Skeleton */}
                     <div className="bg-slate-50/50 px-5 py-4 border-b border-slate-100 flex justify-between items-center">
                        <div className="flex gap-1.5">
                           <div className="w-2.5 h-2.5 rounded-full bg-slate-200 animate-pulse" />
                           <div className="w-2.5 h-2.5 rounded-full bg-slate-200 animate-pulse" />
                        </div>
                        <div className="w-20 h-3 rounded-full bg-slate-200 animate-pulse" />
                     </div>

                     {/* Main Content Skeleton */}
                     <div className="p-6 md:p-8">
                        <div className="flex flex-col lg:flex-row items-start gap-4 mb-10">
                           <div className="h-14 w-14 rounded-2xl bg-slate-100 animate-pulse shrink-0" />
                           <div className="space-y-3 w-full pt-2">
                              <div className="w-24 h-3 bg-slate-100 animate-pulse rounded-md" />
                              <div className="w-48 h-6 bg-slate-100 animate-pulse rounded-lg" />
                           </div>
                        </div>

                        {/* Pills Skeleton */}
                        <div className="space-y-4">
                           <div className="w-32 h-3 bg-slate-100 animate-pulse rounded-md mb-4" />
                           <div className="flex flex-wrap gap-2">
                              <div className="w-24 h-8 bg-slate-100 animate-pulse rounded-lg" />
                              <div className="w-32 h-8 bg-slate-100 animate-pulse rounded-lg" />
                              <div className="w-20 h-8 bg-slate-100 animate-pulse rounded-lg" />
                              <div className="w-28 h-8 bg-slate-100 animate-pulse rounded-lg" />
                              <div className="w-36 h-8 bg-slate-100 animate-pulse rounded-lg" />
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Floating Badge Skeleton */}
                  <div className="relative mt-6 lg:absolute lg:mt-0 lg:-bottom-6 lg:-left-12 bg-white p-4 rounded-2xl border border-slate-100 shadow-xl z-20 flex items-center gap-4 w-64 mx-auto lg:mx-0">
                     <div className="h-10 w-10 bg-slate-100 rounded-xl animate-pulse shrink-0" />
                     <div className="space-y-2 w-full pt-1">
                        <div className="w-16 h-2.5 bg-slate-100 animate-pulse rounded-md" />
                        <div className="w-32 h-3.5 bg-slate-100 animate-pulse rounded-md" />
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
}