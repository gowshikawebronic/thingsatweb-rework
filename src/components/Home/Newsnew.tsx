'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  CalendarDays, 
  Smartphone, 
  Globe, 
  Wifi, 
  MoveRight
} from 'lucide-react';

import SectionHeader from '../UI/SectionHeader';

// --- DATA ---
const blogs = [
    {
        id: '01', 
        originalId: '2',
        title: 'Monitor Water Supply', 
        fullTitle: 'How to monitor water supply from your mobile?',
        category: 'IoT',
        date: 'Oct 22, 2025',
        excerpt: 'Water pollution is one of the biggest fears for the green globalization. Water pollution affects human health by causing waterborne diseases.',
        image: './assets/news/water-supply.png', 
        fallbackImage: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop',
        link: '/news/monitor-water-supply',
        icon: Wifi,
        color: 'text-[#4888E8]', 
        bgTag: 'bg-[#4888E8]',
    },
    {
        id: '02',
        originalId: '3',
        title: 'Customizable Websites',
        fullTitle: 'How to create a well written and customizable website?',
        category: 'Web Development',
        date: 'Oct 20, 2025',
        excerpt: 'It is difficult as a customer to know if you got a good website or less good, as much is hidden in the code.',
        image: './assets/news/custom-website.png',
        fallbackImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
        link: '/news/create-customizable-website',
        icon: Globe,
        color: 'text-[#07b022]',
        bgTag: 'bg-[#07b022]',
    },
    {
        id: '03',
        originalId: '4',
        title: 'User Friendly Apps',
        fullTitle: 'How to make a user friendly mobile app?',
        category: 'App Development',
        date: 'Oct 18, 2025',
        excerpt: 'We offer first-class services for mobile app development. In addition to websites, we also develop applications for mobile phones.',
        image: './assets/news/user-friendly-app.png',
        fallbackImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop',
        link: '/news/user-friendly-mobile-app',
        icon: Smartphone,
        color: 'text-[#4888E8]',
        bgTag: 'bg-[#4888E8]',
    }
];

export default function BlogAccordion() {
    const [activeId, setActiveId] = useState<string | null>('01');
    
    // 2. Get current path
    const pathname = usePathname();
    
    // 3. Logic: Only show if we are NOT on the /news page
    const showViewAllButton = pathname !== '/news';

    return (
        <section className="relative py-24 md:py-32 bg-transparent overflow-hidden font-sora">

            <div className="container-custom relative z-10">

                {/* --- SECTION HEADER (Matches Services / Stats / TechStack) --- */}
                <SectionHeader
                    subtitle="Insights &"
                    highlightText="Technology"
                    highlightColor="primary"
                    titleColorClass="text-foreground"
                    subtitleColorClass="text-gray-400"
                />

                {/* --- ACCORDION GRID --- */}
                <div className="hidden md:flex h-[600px] gap-4 mb-16">
                    {blogs.map((blog) => (
                        <DesktopPanel
                            key={blog.id}
                            blog={blog}
                            activeId={activeId}
                            setActiveId={setActiveId}
                        />
                    ))}
                </div>

                {/* Mobile Stack */}
                <div className="md:hidden flex flex-col gap-6 mb-16">
                    {blogs.map((blog, i) => (
                        <MobileCard
                            key={blog.id}
                            blog={blog}
                            index={i}
                        />
                    ))}
                </div>

                {/* --- ENHANCED FOOTER BUTTON (CONDITIONAL RENDER) --- */}
                {showViewAllButton && (
                    <div className="flex justify-center">
                        <Link href="/news" className="group relative">
                            {/* Button Background */}
                            <motion.div 
                                 initial={{ width: '180px' }}
                                 whileHover={{ width: '220px' }}
                                 className="h-[56px] bg-slate-900 rounded-full flex items-center justify-center relative overflow-hidden transition-all duration-300 "
                            >
                                {/* Hover Gradient Reveal */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#4888E8] to-[#07b022] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                {/* Content */}
                                <div className="relative z-10 flex items-center gap-2 px-8">
                                    <span className="text-white font-bold text-sm tracking-wide whitespace-nowrap">
                                        View All Articles
                                    </span>
                                    <MoveRight size={18} className="text-white transform group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </motion.div>
                        </Link>
                    </div>
                )}

            </div>
        </section>
    );
}

// --- DESKTOP PANEL COMPONENT ---
function DesktopPanel({ blog, activeId, setActiveId }: { blog: typeof blogs[0], activeId: string | null, setActiveId: (id: string) => void }) {
    const isActive = activeId === blog.id;

    return (
        <motion.div
            layout
            onClick={() => setActiveId(blog.id)}
            onHoverStart={() => setActiveId(blog.id)}
            className={`relative h-full rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? "flex-[3]" : "flex-[1]"}`}
        >
            {/* Background Image & Overlay */}
            <div className="absolute inset-0">
                <div className={`absolute inset-0 z-10 transition-opacity duration-500 ${isActive ? "bg-black/40" : "bg-black/60 group-hover:bg-black/50"}`} />
                <img
                    src={blog.fallbackImage}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-1000"
                    style={{ transform: isActive ? 'scale(1.05)' : 'scale(1)' }}
                />
            </div>

            {/* Inactive State Content (Vertical Text) */}
            <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center transition-opacity duration-500 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                <span className="text-white/80 font-mono text-sm tracking-widest mb-4">{blog.date}</span>
                <h3 className="text-2xl font-bold text-white whitespace-nowrap [writing-mode:vertical-rl] rotate-180 tracking-widest uppercase opacity-80">
                    {blog.category}
                </h3>
                <div className="mt-6 p-3 rounded-full bg-white/10 backdrop-blur-md text-white">
                    <blog.icon size={24} />
                </div>
            </div>

            {/* Active State Content */}
            <div className={`absolute inset-0 z-20 flex flex-col justify-end p-12 transition-all duration-500 delay-100 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
                <div className="max-w-xl">
                    <div className="flex items-center gap-4 mb-6">
                        <span className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full text-white ${blog.bgTag}`}>
                            {blog.category}
                        </span>
                        <div className="flex items-center gap-2 text-white/90 font-mono tracking-widest text-sm">
                            <CalendarDays size={14} />
                            {blog.date}
                        </div>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                        {blog.fullTitle}
                    </h3>

                    <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-md line-clamp-3">
                        {blog.excerpt}
                    </p>

                    <Link href={blog.link}>
                        <button className="group flex items-center gap-3 px-6 py-3 bg-white rounded-full text-slate-900 font-bold text-sm tracking-wide transition-transform active:scale-95">
                            <span>Read Article</span>
                            <ArrowUpRight size={16} className={`transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${blog.color}`} />
                        </button>
                    </Link>
                </div>
            </div>

            {/* Gradient Shine on Active */}
            <div className={`absolute inset-0 z-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`} />

        </motion.div>
    );
}

// --- MOBILE CARD COMPONENT ---
function MobileCard({ blog, index }: { blog: typeof blogs[0], index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-[450px] rounded-[2rem] overflow-hidden"
        >
            <Link href={blog.link} className="absolute inset-0 z-30" />
            
            <div className="absolute inset-0">
                <div className="absolute inset-0 z-10 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <img
                    src={blog.fallbackImage}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="mb-auto">
                    <div className="inline-flex p-3 rounded-xl bg-white/10 backdrop-blur-md text-white mb-4">
                        <blog.icon size={24} />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-white/80 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                             <CalendarDays size={14} /> {blog.date}
                        </span>
                        <span className={`px-3 py-1 backdrop-blur-md rounded-full text-white text-[10px] font-bold ${blog.bgTag}`}>
                            {blog.category}
                        </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                        {blog.fullTitle}
                    </h3>

                    <p className="text-white/80 text-sm leading-relaxed mb-6 line-clamp-2">
                        {blog.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-white font-bold text-sm">
                        <span>Read Article</span>
                        <ArrowUpRight size={16} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}