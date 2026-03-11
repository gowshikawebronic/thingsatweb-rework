"use client";

import { useState } from "react";
import { 
  HelpCircle, 
  Plus, 
  Minus, 
  MessageCircle 
} from "lucide-react";
import Link from "next/link";

// --- Types for the Reusable Component ---
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQHeader {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
}

export interface FAQCTA {
  text: string;
  buttonText: string;
  url?: string; // Optional URL, defaults to /contact if not provided
}

export interface FAQDataProps {
  header: FAQHeader;
  items: FAQItem[];
  cta: FAQCTA;
}

interface FAQSectionProps {
  data: FAQDataProps;
}

export default function FAQSection({ data }: FAQSectionProps) {
  const { header, items, cta } = data;
  
  // State to track which FAQ is open (null = all closed)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split items into two equal arrays for the two-column layout
  const midPoint = Math.ceil(items.length / 2);
  const leftColumn = items.slice(0, midPoint);
  const rightColumn = items.slice(midPoint);

  // Helper function to render a single FAQ item
  const renderFAQItem = (item: FAQItem, index: number) => {
    const isOpen = openIndex === index;
    
    return (
      <div 
        key={index}
        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
          isOpen 
            ? "bg-slate-50 border-primary-blue shadow-lg shadow-blue-900/5" 
            : "bg-white border-slate-100 hover:border-brand-green"
        }`}
      >
        <button
          onClick={() => toggleFAQ(index)}
          className="w-full flex items-center justify-between p-6 text-left"
        >
          <span className={`text-sm md:text-base font-bold transition-colors ${isOpen ? "text-[#2776ea]" : "text-slate-800"}`}>
            {item.question}
          </span>
          <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
            isOpen ? "bg-primary-blue text-white" : "bg-slate-100 text-slate-400"
          }`}>
            {isOpen ? <Minus size={16} /> : <Plus size={16} />}
          </div>
        </button>
        
        {/* Answer Wrapper */}
        {isOpen && (
          <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
            <p className="text-slate-600 text-sm font-medium leading-relaxed border-t border-slate-200 pt-4">
              {item.answer}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="relative bg-white py-10 font-sora overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#76ea27]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <HelpCircle size={14} className="text-primary-blue" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary-blue">
              {header.badge}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-6">
            {header.title}{" "}
            <span className="bg-gradient-to-r from-primary-blue to-brand-green bg-clip-text text-transparent">
              {header.titleHighlight}
            </span>
          </h2>
          
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            {header.description}
          </p>
        </div>

        {/* --- FAQ GRID (2 COLUMNS) --- */}
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumn.map((item, index) => renderFAQItem(item, index))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumn.map((item, index) => renderFAQItem(item, index + midPoint))}
          </div>

        </div>

        {/* --- CTA BOX --- */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-slate-900 p-8 rounded-3xl shadow-xl shadow-slate-900/10 mx-auto">
            <div className="h-12 w-12 rounded-full bg-brand-green flex items-center justify-center text-white shrink-0 animate-pulse">
              <MessageCircle size={24} />
            </div>
            <div className="text-left">
              <h4 className="text-white font-bold text-lg">
                {cta.text}
              </h4>
              <p className="text-slate-400 text-sm mt-1">
                Our team is available 24/7 to assist you.
              </p>
            </div>
            <Link 
              href={cta.url || "/contact"} 
              className="px-6 py-3 rounded-xl bg-white text-slate-900 font-black uppercase tracking-widest text-xs hover:bg-primary-blue hover:text-white transition-colors"
            >
              {cta.buttonText}
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}