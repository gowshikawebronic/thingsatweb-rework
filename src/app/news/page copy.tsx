"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

import {
    Search,
    ArrowUpRight,
    Sparkles,
    Flame,
    ArrowRight,
    Clock,
    Tag
} from "lucide-react";

import Newsnew from '@/components/Home/Newsnew';
import TextureOverlay from "@/components/UI/TextureOverlay";
import TiltCard from "@/components/Home/TiltCard";
import { BLOG_POSTS, CATEGORIES, BlogPost } from "@/AllData/data/BlogpageData";

const ITEMS_PER_PAGE = 5;

function NewsContent() {
    const searchParams = useSearchParams();
    const resultsRef = useRef<HTMLDivElement>(null);

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const categoryParam = searchParams.get("category");
        if (categoryParam) {
            setSelectedCategory(categoryParam);
            if (resultsRef.current) {
                window.scrollTo({ top: resultsRef.current.offsetTop - 100, behavior: "smooth" });
            }
        }
    }, [searchParams]);

    const filteredPosts = BLOG_POSTS.filter((post) => {
        const matchesSearch =
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentPosts = filteredPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // --- PAGINATION: Scroll to TOP of the content area ---
    const goToPage = (page: number) => {
        setCurrentPage(page);
        // Scroll to the top of the results section
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="container-custom relative z-10 pt-20 pb-32">
            <Newsnew />

            {/* --- HERO SECTION --- */}
            <div className="text-center max-w-2xl mx-auto mb-24">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-sm text-xs font-bold uppercase tracking-wider text-foreground/50 mb-6 hover:border-brand-blue/30 transition-colors cursor-default">
                    Blog <ArrowRight size={14} /> Fresh takes, weekly.
                </div>

                <p className="text-lg text-foreground/70 font-medium max-w-lg mx-auto">
                    Juicy insights and refreshing stories, all in one place.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 items-start relative" ref={resultsRef}>

                {/* ==================== LEFT SIDEBAR (Sticky) ==================== */}
                <aside className="w-full lg:w-1/4 lg:sticky lg:top-32 self-start h-fit space-y-8 order-2 lg:order-1">

                    {/* 1. Search — Frosted Glass Card */}
                    <div className="relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-white/50 dark:border-white/10 rounded-[2rem] p-6 shadow-xl shadow-foreground/[0.03] overflow-hidden">
                        <TextureOverlay className="opacity-10" />
                        <div className="absolute -top-10 -left-10 w-32 h-32 blur-3xl opacity-10 pointer-events-none z-0 bg-brand-blue"></div>
                        <div className="relative z-10">
                            <div className="relative group">
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-5 pr-12 py-3.5 bg-white/50 dark:bg-gray-800/50 border border-foreground/10 rounded-xl text-foreground font-medium placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue/30 transition-all"
                                />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-foreground/40">
                                    <Search size={18} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Categories — Frosted Glass Card */}
                    <div className="relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-white/50 dark:border-white/10 rounded-[2rem] p-6 shadow-xl shadow-foreground/[0.03] overflow-hidden">
                        <TextureOverlay className="opacity-10" />
                        <div className="absolute -top-10 -right-10 w-32 h-32 blur-3xl opacity-10 pointer-events-none z-0 bg-brand-green"></div>
                        <div className="relative z-10">
                            <h3 className="text-xs font-bold text-foreground/50 uppercase tracking-widest mb-5 px-2">Categories</h3>
                            <nav className="flex flex-col gap-1">
                                <CategoryItem
                                    label="All Articles"
                                    count={BLOG_POSTS.length}
                                    isActive={selectedCategory === "All"}
                                    onClick={() => setSelectedCategory("All")}
                                />
                                {CATEGORIES.map((cat) => (
                                    <CategoryItem
                                        key={cat.name}
                                        label={cat.name}
                                        count={cat.count}
                                        isActive={selectedCategory === cat.name}
                                        onClick={() => setSelectedCategory(cat.name)}
                                    />
                                ))}
                            </nav>
                        </div>
                    </div>

                </aside>

                {/* ==================== RIGHT CONTENT AREA ==================== */}
                <div className="w-full lg:w-3/4 order-1 lg:order-2">

                    <div className="flex flex-col gap-16">
                        {currentPosts.length > 0 ? (
                            <>
                                {/* Featured Post */}
                                {currentPage === 1 && currentPosts[0] && (
                                    <div className="mb-4">
                                        <FeaturedBlogCard post={currentPosts[0]} />
                                    </div>
                                )}

                                {/* Standard Grid */}
                                <div>
                                    <div className="flex items-center gap-2 mb-8">
                                        <Flame className="w-6 h-6 text-brand-green" fill="currentColor" />
                                        <h2 className="text-2xl font-bold text-foreground">Latest Stories</h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {(currentPage === 1 ? currentPosts.slice(1) : currentPosts).map((post, i) => (
                                            <StandardBlogCard key={post.id} post={post} index={i} />
                                        ))}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="relative flex flex-col items-center justify-center py-32 bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl rounded-[2rem] border border-white/50 dark:border-white/10 shadow-xl shadow-foreground/[0.03] overflow-hidden">
                                <TextureOverlay className="opacity-10" />
                                <h3 className="relative z-10 text-xl font-bold text-foreground">No stories found</h3>
                                <button onClick={() => setSelectedCategory("All")} className="relative z-10 mt-4 text-brand-blue font-bold hover:underline">
                                    View all stories
                                </button>
                            </div>
                        )}
                    </div>

                    {/* PAGINATION */}
                    {totalPages > 1 && (
                        <div className="mt-24 flex items-center justify-center gap-3">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => goToPage(page)}
                                    className={`w-11 h-11 rounded-full font-bold text-sm transition-all duration-300 ${currentPage === page
                                            ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/30"
                                            : "bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/50 dark:border-white/10 text-foreground/60 hover:border-brand-blue/30 hover:text-brand-blue"
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}
                            <button
                                onClick={() => goToPage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/50 dark:border-white/10 hover:border-brand-blue/30 hover:text-brand-blue disabled:opacity-40 transition-all duration-300"
                            >
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function NewsPage() {
    return (
        <main className="min-h-screen bg-transparent font-sora selection:bg-brand-blue selection:text-white overflow-hidden">
            <Suspense fallback={<div className="h-screen flex items-center justify-center font-bold text-brand-blue">Loading...</div>}>
                <NewsContent />
            </Suspense>
        </main>
    );
}

// ==========================================
// CATEGORY ITEM — Active glow effect
// ==========================================
function CategoryItem({ label, count, isActive, onClick }: { label: string, count: number, isActive: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex justify-between items-center group ${isActive
                    ? "bg-brand-blue/10 text-brand-blue"
                    : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
                }`}
        >
            <span>{label}</span>
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md transition-colors ${isActive ? "bg-brand-blue/10 text-brand-blue" : "bg-foreground/5 text-foreground/40 group-hover:bg-foreground/10"
                }`}>
                {count}
            </span>
        </button>
    )
}

// ==========================================
// FEATURED BLOG CARD — with Floating Decorative Cards
// ==========================================

export function FeaturedBlogCard({ post }: { post: BlogPost }) {
    return (
        <div className="w-full py-8 lg:py-12">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* ==========================================
                    IMAGE SECTION (Framed with Floating Cards)
                ========================================== */}
                <div className="lg:col-span-7 relative w-full h-[350px] md:h-[450px] flex items-center justify-center order-1 lg:order-1">
                    
                    {/* Ambient Glow localized to the image area */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 blur-[80px] opacity-20 pointer-events-none z-0 bg-brand-blue"></div>

                    {/* Main Image Frame */}
                    <div className="relative w-full max-w-[600px] h-full rounded-[2rem] overflow-hidden shadow-2xl z-[2] border border-black/5 dark:border-white/10 group">
                        <Link href={`/news/${post.slug}`} className="block w-full h-full relative">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </Link>
                    </div>

                    {/* Floating Decorative Card — Bottom Left (tilted) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30, y: 30 }}
                        whileInView={{ opacity: 1, x: 0, y: [10, 0, 10] }}
                        viewport={{ once: true }}
                        transition={{ opacity: { duration: 0.8, delay: 0.3 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
                        className="absolute bottom-4 left-0 lg:-left-6 z-[3] w-28 h-32 sm:w-36 sm:h-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-2xl p-3 shadow-2xl flex flex-col items-center justify-center overflow-hidden"
                        style={{ transform: "rotate(-8deg)" }}
                    >
                        <TextureOverlay className="opacity-20" />
                        <Tag size={20} className="text-brand-blue mb-2 relative z-10" />
                        <span className="text-[10px] font-bold text-foreground/80 uppercase tracking-widest relative z-10 text-center">
                            {post.category}
                        </span>
                    </motion.div>

                    {/* Floating Decorative Card — Top Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 30, y: -30 }}
                        whileInView={{ opacity: 1, x: 0, y: [-8, 8, -8] }}
                        viewport={{ once: true }}
                        transition={{ opacity: { duration: 0.8, delay: 0.5 }, y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
                        className="absolute top-4 right-0 lg:-right-6 z-[3] w-24 h-28 sm:w-32 sm:h-36 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-2xl p-3 shadow-2xl flex flex-col items-center justify-center overflow-hidden"
                        style={{ transform: "rotate(6deg)" }}
                    >
                        <TextureOverlay className="opacity-20" />
                        <div className="absolute -top-6 -left-6 w-16 h-16 bg-brand-green opacity-20 blur-2xl rounded-full pointer-events-none z-0"></div>
                        <Sparkles size={20} className="text-brand-green mb-2 relative z-10" fill="currentColor" />
                        <span className="text-[10px] font-bold text-foreground/80 uppercase tracking-widest relative z-10 text-center">
                            Featured
                        </span>
                    </motion.div>

                    {/* Editor's Pick Badge */}
                    <div className="absolute top-8 left-8 lg:left-0 z-[4] px-4 py-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-brand-blue shadow-lg border border-black/5 dark:border-white/10 flex items-center gap-2">
                        <Sparkles size={12} fill="currentColor" />
                        Editor's Pick
                    </div>
                </div>

                {/* ==========================================
                    TEXT SECTION (Clean & Settled)
                ========================================== */}
                <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-2 z-20">
                    
                    {/* Meta Tags */}
                    <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-foreground/50 mb-6 uppercase tracking-wide">
                        <span className="bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-lg">{post.category}</span>
                        <span className="text-foreground/20">•</span>
                        <div className="flex items-center gap-1">
                            <Clock size={12} />
                            <span>{post.date}</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 leading-[1.1] hover:text-brand-blue transition-colors duration-300">
                        <Link href={`/news/${post.slug}`}>
                            {post.title}
                        </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-foreground/60 text-lg mb-8 line-clamp-3 leading-relaxed font-medium">
                        {post.excerpt}
                    </p>

                    {/* Action & Author */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-2">
                        <Link
                            href={`/news/${post.slug}`}
                            className="px-8 py-3.5 bg-foreground text-background rounded-xl font-bold text-sm shadow-lg shadow-foreground/10 hover:bg-brand-blue hover:shadow-brand-blue/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                        >
                            Read Article <ArrowUpRight size={18} />
                        </Link>

                        <div className="flex items-center gap-3 pl-2 border-l border-foreground/10">
                            <div className="w-10 h-10 ml-2 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/60 font-bold text-sm border border-foreground/10">
                                {post.author ? post.author[0] : "T"}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-foreground">{post.author || "ThingsAtWeb"}</span>
                                <span className="text-[10px] text-foreground/40 font-bold uppercase tracking-wide">Author</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

// ==========================================
// STANDARD BLOG CARD — Matches Testimonials Card
// (TiltCard + TextureOverlay + Ambient Glow + Full Frosted Glass)
// ==========================================
function StandardBlogCard({ post, index }: { post: BlogPost, index: number }) {
    const isEven = index % 2 === 0;
    const colorClass = isEven ? "brand-blue" : "brand-green";

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <TiltCard className="h-full w-full">
                <Link href={`/news/${post.slug}`} className="block h-full w-full group">
                    <div className={`relative h-full w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-white/50 dark:border-white/10 rounded-[2rem] overflow-hidden shadow-xl shadow-foreground/[0.03] transition-colors duration-500 hover:border-${colorClass}/30 flex flex-col`}>

                        {/* Texture + Ambient Glow */}
                        <TextureOverlay className="opacity-10" />
                        <div className={`absolute -top-10 -left-10 w-32 h-32 blur-3xl opacity-10 pointer-events-none z-0 bg-${colorClass}`}></div>

                        {/* Image Section */}
                        <div className="relative w-full aspect-[4/3] overflow-hidden z-10">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Category Badge */}
                            <div className={`absolute top-4 left-4 px-3 py-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-${colorClass} shadow-sm`}>
                                {post.category}
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="relative z-10 flex flex-col flex-grow p-6">

                            {/* Date */}
                            <div className="flex items-center gap-2 text-[10px] font-bold text-foreground/40 mb-3 uppercase tracking-wide">
                                <Clock size={10} />
                                <span>{post.date}</span>
                            </div>

                            {/* Title */}
                            <h3 className={`text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-${colorClass} transition-colors line-clamp-2`}>
                                {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-foreground/50 text-sm leading-relaxed line-clamp-2 mb-6 font-medium">
                                {post.excerpt}
                            </p>

                            {/* Footer — Divider + CTA, like Testimonials */}
                            <div className="mt-auto pt-4 border-t border-foreground/10 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-7 h-7 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/40 font-bold text-[10px] border border-foreground/10">
                                        {post.author ? post.author[0] : "T"}
                                    </div>
                                    <span className="text-xs font-bold text-foreground/60">{post.author || "ThingsAtWeb"}</span>
                                </div>
                                <div className={`flex items-center gap-1 text-xs font-bold text-${colorClass} group-hover:gap-2 transition-all`}>
                                    Read <ArrowUpRight size={14} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </TiltCard>
        </motion.div>
    )
}