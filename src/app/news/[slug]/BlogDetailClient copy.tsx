"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  User, 
  Tag, 
  ArrowLeft,
  Twitter,
  Linkedin,
  Facebook,
  Share2,
  Sparkles,
  BookOpen,
  Clock
} from "lucide-react";
import LeaveReplyForm from "@/components/common/EnquiryForm";
import TextureOverlay from "@/components/UI/TextureOverlay";

type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  content: string;
  tags: string[];
};

type Props = {
  post: Post;
  prevPost: Post | null;
  nextPost: Post | null;
};

export default function BlogDetailClient({ post, prevPost, nextPost }: Props) {

  // --- Scroll Reveal Logic ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-transparent font-sora pt-28 pb-24 selection:bg-brand-blue selection:text-white">
      
      <div className="container-custom relative z-10">
        
        {/* --- Top Navigation --- */}
        <div className="mb-12 reveal-on-scroll">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-bold text-foreground/50 hover:text-brand-blue transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog Overview
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* ==================== LEFT SIDEBAR ==================== */}
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-32 space-y-8 order-2 lg:order-1 self-start h-fit">
             
             {/* Author Card — Frosted Glass */}
             <div className="relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-white/50 dark:border-white/10 rounded-[2rem] p-8 shadow-xl shadow-foreground/[0.03] overflow-hidden text-center transition-colors duration-500 hover:border-brand-blue/30">
                <TextureOverlay className="opacity-10" />
                <div className="absolute -top-10 -left-10 w-32 h-32 blur-3xl opacity-15 pointer-events-none z-0 bg-brand-blue"></div>

                <div className="relative z-10">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/50 dark:border-white/10 shadow-inner">
                        <div className="w-full h-full bg-foreground/5 flex items-center justify-center text-foreground/30">
                            <User size={40} />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{post.author}</h3>
                    <p className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-6">Writer | Tech Enthusiast</p>
                    
                    <p className="text-sm text-foreground/60 leading-relaxed mb-8">
                        Brings 10+ years in SaaS and customer ops, helping brands build scalable, human-first support.
                    </p>

                    <div className="pt-6 border-t border-foreground/10">
                        <div className="flex justify-center gap-3">
                            {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                                <button key={i} className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/40 hover:bg-brand-blue hover:text-white transition-all duration-300">
                                    <Icon size={16} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
             </div>

             {/* Share Widget — Frosted Glass */}
             <div className="relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-white/50 dark:border-white/10 rounded-[2rem] p-6 shadow-xl shadow-foreground/[0.03] overflow-hidden flex items-center justify-between transition-colors duration-500 hover:border-brand-green/30">
                <TextureOverlay className="opacity-10" />
                <div className="absolute -bottom-10 -right-10 w-24 h-24 blur-3xl opacity-10 pointer-events-none z-0 bg-brand-green"></div>
                <span className="relative z-10 font-bold text-foreground text-sm">Share this article</span>
                <button className="relative z-10 w-10 h-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center hover:bg-brand-green hover:text-white transition-all duration-300">
                    <Share2 size={18} />
                </button>
             </div>

          </aside>

          {/* ==================== RIGHT CONTENT (Article Body) ==================== */}
          <article className="w-full lg:w-3/4 order-1 lg:order-2 min-w-0">
            
            {/* Header Section */}
            <header className="mb-10 reveal-on-scroll">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-8 tracking-tight">
                 {post.title}
               </h1>
               
               <div className="flex flex-wrap items-center gap-3 text-sm font-bold">
                  <span className="px-4 py-2 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center gap-2">
                     <Tag size={14} /> {post.category}
                  </span>
                  <span className="px-4 py-2 rounded-xl bg-foreground/5 text-foreground/60 flex items-center gap-2">
                     <Calendar size={14} /> {post.date}
                  </span>
                  <span className="px-4 py-2 rounded-xl bg-foreground/5 text-foreground/60 flex items-center gap-2">
                     <User size={14} /> By {post.author}
                  </span>
               </div>
            </header>

            {/* ============================================================
                FEATURED IMAGE — with Hero-style Floating Decorative Cards 
            ============================================================ */}
            <div className="relative w-full mb-16 reveal-on-scroll">

                {/* Main Image — Frosted Glass Frame */}
                <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-xl shadow-foreground/[0.03] p-2 z-[2]">
                  <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Floating Card — Bottom Left (Category) */}
                <motion.div
                    initial={{ opacity: 0, x: -30, y: 30 }}
                    animate={{ opacity: 1, x: 0, y: [10, 0, 10] }}
                    transition={{ opacity: { duration: 0.8, delay: 0.4 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
                    className="absolute -bottom-6 -left-4 lg:-left-8 z-[3] w-32 h-36 sm:w-40 sm:h-44 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-2xl sm:rounded-3xl p-4 shadow-2xl overflow-hidden"
                    style={{ transform: "rotate(-8deg)" }}
                >
                    <TextureOverlay className="opacity-20" />
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                            <Tag size={18} className="text-brand-blue" />
                        </div>
                        <span className="text-[10px] font-bold text-foreground/50 uppercase tracking-wider">{post.category}</span>
                        <span className="text-[9px] font-bold text-brand-blue">{post.date}</span>
                    </div>
                </motion.div>

                {/* Floating Card — Top Right (Reading Widget) */}
                <motion.div
                    initial={{ opacity: 0, x: 30, y: -30 }}
                    animate={{ opacity: 1, x: 0, y: [-10, 8, -10] }}
                    transition={{ opacity: { duration: 0.8, delay: 0.6 }, y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
                    className="absolute -top-5 -right-3 lg:-right-6 z-[3] w-28 h-32 sm:w-36 sm:h-40 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-2xl sm:rounded-3xl p-4 shadow-2xl overflow-hidden"
                    style={{ transform: "rotate(6deg)" }}
                >
                    <TextureOverlay className="opacity-20" />
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-brand-green opacity-20 blur-2xl rounded-full pointer-events-none z-0"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center">
                            <BookOpen size={18} className="text-brand-green" />
                        </div>
                        <span className="text-[10px] font-bold text-foreground/50 uppercase tracking-wider">Article</span>
                    </div>
                </motion.div>

                {/* Floating Card — Middle Right (Small, behind) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, y: [5, -5, 5] }}
                    transition={{ opacity: { duration: 0.8, delay: 0.8 }, scale: { duration: 0.8, delay: 0.8 }, y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 } }}
                    className="absolute right-4 lg:right-8 bottom-1/4 z-[1] w-20 h-22 sm:w-24 sm:h-28 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border border-white/30 dark:border-white/10 rounded-xl p-3 shadow-xl overflow-hidden"
                    style={{ transform: "rotate(12deg)" }}
                >
                    <TextureOverlay className="opacity-30" />
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                        <Sparkles size={16} className="text-brand-blue/60" />
                    </div>
                </motion.div>
            </div>

            {/* Main Content — Frosted Glass Container */}
            <div className="relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-white/50 dark:border-white/10 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-foreground/[0.03] overflow-hidden mb-16 reveal-on-scroll">
              <TextureOverlay className="opacity-10" />
              <div className="absolute -top-10 -right-10 w-40 h-40 blur-3xl opacity-10 pointer-events-none z-0 bg-brand-blue"></div>
              <div
                className="relative z-10 prose prose-lg prose-slate max-w-none"
              >
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>

            {/* Tags Cloud — Frosted Glass Container */}
            <div className="relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-white/50 dark:border-white/10 rounded-[2rem] p-8 shadow-xl shadow-foreground/[0.03] overflow-hidden mb-16 reveal-on-scroll">
              <TextureOverlay className="opacity-10" />
              <div className="relative z-10">
                <h4 className="text-sm font-bold text-foreground mb-5">Related Topics:</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/news?tag=${encodeURIComponent(tag)}`}
                      className="px-5 py-2.5 bg-foreground/5 border border-foreground/10 rounded-xl text-sm font-bold text-foreground/60 hover:border-brand-blue/30 hover:text-brand-blue hover:bg-brand-blue/5 transition-all duration-300"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Prev/Next Navigation — Frosted Glass Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-24 reveal-on-scroll">
              {prevPost ? (
                <Link
                  href={`/news/${prevPost.slug}`}
                  className="group relative p-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-white/50 dark:border-white/10 rounded-[2rem] shadow-xl shadow-foreground/[0.03] hover:border-brand-blue/30 hover:shadow-lg transition-all duration-500 overflow-hidden"
                >
                  <TextureOverlay className="opacity-10" />
                  <div className="absolute -top-10 -left-10 w-24 h-24 blur-3xl opacity-10 pointer-events-none z-0 bg-brand-blue"></div>
                  <div className="relative z-10">
                    <span className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-3 flex items-center gap-2 group-hover:text-brand-blue transition-colors">
                      <ChevronLeft size={16} /> Previous Article
                    </span>
                    <h4 className="text-lg font-bold text-foreground group-hover:text-brand-blue transition-colors line-clamp-2 leading-snug">
                      {prevPost.title}
                    </h4>
                  </div>
                </Link>
              ) : <div />}
              
              {nextPost ? (
                <Link
                  href={`/news/${nextPost.slug}`}
                  className="group relative p-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-white/50 dark:border-white/10 rounded-[2rem] shadow-xl shadow-foreground/[0.03] hover:border-brand-green/30 hover:shadow-lg transition-all duration-500 text-right overflow-hidden"
                >
                  <TextureOverlay className="opacity-10" />
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 blur-3xl opacity-10 pointer-events-none z-0 bg-brand-green"></div>
                  <div className="relative z-10">
                    <span className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-3 flex items-center justify-end gap-2 group-hover:text-brand-green transition-colors">
                      Next Article <ChevronRight size={16} />
                    </span>
                    <h4 className="text-lg font-bold text-foreground group-hover:text-brand-green transition-colors line-clamp-2 leading-snug">
                      {nextPost.title}
                    </h4>
                  </div>
                </Link>
              ) : <div />}
            </div>

            {/* Comments / Reply Form — Frosted Glass Container */}
            <div className="relative reveal-on-scroll bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl rounded-[2rem] p-8 md:p-12 border border-white/50 dark:border-white/10 shadow-xl shadow-foreground/[0.03] overflow-hidden">
               <TextureOverlay className="opacity-10" />
               <div className="absolute -top-10 -left-10 w-40 h-40 blur-3xl opacity-10 pointer-events-none z-0 bg-brand-green"></div>
               <div className="relative z-10">
                   <h3 className="text-2xl font-bold text-foreground mb-2">Leave a Reply</h3>
                   <p className="text-foreground/60 mb-8">We'd love to hear your thoughts. Keep it constructive!</p>
                   <LeaveReplyForm />
               </div>
            </div>

          </article>

        </div>
      </div>

      {/* --- Global Styles for Content --- */}
      <style jsx global>{`
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
                      transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .reveal-on-scroll.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Prose Customization for Blog Content */
        .prose h2 {
            font-size: 1.8rem;
            font-weight: 800;
            color: var(--color-foreground);
            margin-top: 3rem;
            margin-bottom: 1.5rem;
            letter-spacing: -0.02em;
        }
        .prose h3 {
            font-size: 1.4rem;
            font-weight: 700;
            color: var(--color-foreground);
            margin-top: 2rem;
        }
        .prose p {
            font-size: 1.125rem;
            line-height: 1.8;
            color: var(--color-foreground-muted);
            margin-bottom: 1.5rem;
        }
        .prose strong {
            color: var(--color-foreground);
            font-weight: 700;
        }
        .prose ul {
            list-style-type: disc;
            padding-left: 1.5rem;
            margin-bottom: 1.5rem;
        }
        .prose li {
            margin-bottom: 0.5rem;
            color: var(--color-foreground-muted);
        }
        .prose a {
            color: var(--color-brand-blue);
            font-weight: 600;
            text-decoration: underline;
            text-underline-offset: 4px;
            text-decoration-color: rgba(72, 136, 232, 0.3);
            transition: all 0.2s;
        }
        .prose a:hover {
            color: var(--color-brand-green);
            text-decoration-color: var(--color-brand-green);
        }
        .prose blockquote {
            border-left: 4px solid var(--color-brand-blue);
            padding-left: 1.5rem;
            font-style: italic;
            color: var(--color-foreground);
            background: var(--color-surface);
            padding: 1.5rem;
            border-radius: 0 1rem 1rem 0;
            margin: 2rem 0;
        }
      `}</style>
    </main>
  );
}