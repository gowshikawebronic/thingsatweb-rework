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
  Youtube,
  Instagram,
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
    <main className="min-h-screen bg-transparent font-sora pt-28 pb-24 selection:bg-brand-blue selection:text-white overflow-clip">
      
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
          
          {/* ==================== LEFT SIDEBAR (Clean) ==================== */}
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-32 space-y-12 order-2 lg:order-1 self-start h-fit">
             
             {/* Author Card — Clean matte style */}
             <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border border-black/5 dark:border-white/10 shadow-lg">
                    <div className="w-full h-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-foreground/40">
                        <User size={40} strokeWidth={1.5} />
                    </div>
                </div>
                <h3 className="text-xl font-black text-foreground mb-1 tracking-tight">{post.author}</h3>
                <p className="text-[10px] font-bold text-brand-blue uppercase tracking-widest mb-6">Writer | Tech Enthusiast</p>
                
                <p className="text-sm text-foreground/60 leading-relaxed mb-8 font-medium">
                    Brings 10+ years in SaaS and customer ops, helping brands build scalable, human-first support.
                </p>

                <div className="pt-6 border-t border-black/5 dark:border-white/10">
                    <div className="flex justify-center gap-3">
                        {[
                            { Icon: Facebook, href: "https://www.facebook.com/thingsatweb" },
                            { Icon: Youtube, href: "https://www.youtube.com/@thingsatweb" },
                            { Icon: Instagram, href: "https://www.instagram.com/thingsatweb/" },
                            { Icon: Linkedin, href: "https://www.linkedin.com/company/thingsatweb" },
                        ].map(({ Icon, href }, i) => (
                            <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black/5 dark:border-white/10 flex items-center justify-center text-foreground/40 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300 shadow-sm">
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>
             </div>

             {/* Share Widget — Clean Style */}
             <div className="flex items-center justify-between py-6 border-t border-black/5 dark:border-white/10">
                <span className="font-bold text-foreground/60 text-sm uppercase tracking-wider">Share Article</span>
                <button className="w-10 h-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center hover:bg-brand-green hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <Share2 size={16} />
                </button>
             </div>

          </aside>

          {/* ==================== RIGHT CONTENT (Article Body) ==================== */}
          <article className="w-full lg:w-3/4 order-1 lg:order-2 min-w-0">
            
            {/* Header Section */}
            <header className="mb-12 reveal-on-scroll">
               <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-foreground/50 mb-6 uppercase tracking-wide">
                  <span className="bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-lg">{post.category}</span>
                  <span className="text-foreground/20">•</span>
                  <div className="flex items-center gap-1.5">
                     <Calendar size={14} /> 
                     <span>{post.date}</span>
                  </div>
               </div>

               <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] tracking-tight">
                 {post.title}
               </h1>
            </header>

            {/* ============================================================
                FEATURED IMAGE — Clean Frame with Floating Cards
            ============================================================ */}
            <div className="relative w-full mb-20 reveal-on-scroll">
                
                {/* Ambient glow localized to image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 blur-[80px] opacity-20 pointer-events-none z-0 bg-brand-blue"></div>

                {/* Main Image Frame */}
                <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-black/5 dark:border-white/10 z-[2]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      priority
                    />
                </div>

                {/* Floating Card — Bottom Left (Category) */}
                <motion.div
                    initial={{ opacity: 0, x: -30, y: 30 }}
                    animate={{ opacity: 1, x: 0, y: [10, 0, 10] }}
                    transition={{ opacity: { duration: 0.8, delay: 0.4 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
                    className="absolute -bottom-6 -left-4 lg:-left-8 z-[3] w-28 h-32 sm:w-36 sm:h-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col items-center justify-center text-center overflow-hidden"
                    style={{ transform: "rotate(-8deg)" }}
                >
                    <TextureOverlay className="opacity-20" />
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center mb-3 relative z-10">
                        <Tag size={18} className="text-brand-blue" />
                    </div>
                    <span className="text-[10px] font-bold text-foreground/80 uppercase tracking-widest relative z-10">{post.category}</span>
                </motion.div>

                {/* Floating Card — Top Right (Reading Widget) */}
                <motion.div
                    initial={{ opacity: 0, x: 30, y: -30 }}
                    animate={{ opacity: 1, x: 0, y: [-8, 8, -8] }}
                    transition={{ opacity: { duration: 0.8, delay: 0.6 }, y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
                    className="absolute top-4 right-0 lg:-right-6 z-[3] w-24 h-28 sm:w-32 sm:h-36 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col items-center justify-center text-center overflow-hidden"
                    style={{ transform: "rotate(6deg)" }}
                >
                    <TextureOverlay className="opacity-20" />
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-brand-green opacity-20 blur-2xl rounded-full pointer-events-none z-0"></div>
                    <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center mb-3 relative z-10">
                        <BookOpen size={18} className="text-brand-green" />
                    </div>
                    <span className="text-[10px] font-bold text-foreground/80 uppercase tracking-widest relative z-10">Article</span>
                </motion.div>
            </div>

            {/* Main Content — Native background text flow */}
            <div className="relative mb-20 reveal-on-scroll">
              <div className="prose prose-lg prose-slate max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>

            {/* Tags Cloud — Clean layout */}
            <div className="mb-20 pt-8 border-t border-black/5 dark:border-white/10 reveal-on-scroll">
              <h4 className="text-xs font-bold text-foreground/50 uppercase tracking-widest mb-5">Related Topics</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/news?tag=${encodeURIComponent(tag)}`}
                    className="px-5 py-2.5 bg-black/5 dark:bg-white/5 border border-transparent rounded-xl text-sm font-bold text-foreground/70 hover:border-black/10 dark:hover:border-white/20 hover:text-foreground transition-all duration-300"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Prev/Next Navigation — Clean Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-24 reveal-on-scroll">
              {prevPost ? (
                <Link
                  href={`/news/${prevPost.slug}`}
                  className="group relative p-8 bg-white/40 dark:bg-gray-800/40 border border-black/5 dark:border-white/10 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-blue/30 transition-all duration-300"
                >
                  <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-3 flex items-center gap-2 group-hover:text-brand-blue transition-colors">
                    <ChevronLeft size={16} /> Previous Article
                  </span>
                  <h4 className="text-xl font-black text-foreground group-hover:text-brand-blue transition-colors line-clamp-2 leading-tight">
                    {prevPost.title}
                  </h4>
                </Link>
              ) : <div />}
              
              {nextPost ? (
                <Link
                  href={`/news/${nextPost.slug}`}
                  className="group relative p-8 bg-white/40 dark:bg-gray-800/40 border border-black/5 dark:border-white/10 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-green/30 transition-all duration-300 text-right"
                >
                  <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-3 flex items-center justify-end gap-2 group-hover:text-brand-green transition-colors">
                    Next Article <ChevronRight size={16} />
                  </span>
                  <h4 className="text-xl font-black text-foreground group-hover:text-brand-green transition-colors line-clamp-2 leading-tight">
                    {nextPost.title}
                  </h4>
                </Link>
              ) : <div />}
            </div>

            {/* Comments / Reply Form — Clean Section */}
            <div className="relative reveal-on-scroll pt-12 border-t border-black/5 dark:border-white/10">
               <h3 className="text-3xl font-black text-foreground mb-2 tracking-tight">Leave a Reply</h3>
               <p className="text-foreground/60 mb-10 font-medium text-lg">We'd love to hear your thoughts. Keep it constructive!</p>
               <LeaveReplyForm />
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
            font-size: 2rem;
            font-weight: 900;
            color: var(--color-foreground);
            margin-top: 3.5rem;
            margin-bottom: 1.5rem;
            letter-spacing: -0.02em;
            line-height: 1.2;
        }
        .prose h3 {
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--color-foreground);
            margin-top: 2.5rem;
            margin-bottom: 1rem;
        }
        .prose p {
            font-size: 1.125rem;
            line-height: 1.8;
            color: var(--color-foreground-muted);
            margin-bottom: 1.5rem;
            font-weight: 500;
        }
        .prose strong {
            color: var(--color-foreground);
            font-weight: 800;
        }
        .prose ul {
            list-style-type: disc;
            padding-left: 1.5rem;
            margin-bottom: 2rem;
        }
        .prose li {
            margin-bottom: 0.75rem;
            color: var(--color-foreground-muted);
            font-weight: 500;
        }
        .prose a {
            color: var(--color-brand-blue);
            font-weight: 700;
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
            background: rgba(72, 136, 232, 0.05);
            padding: 1.5rem 2rem;
            border-radius: 0 1rem 1rem 0;
            margin: 2.5rem 0;
            font-weight: 600;
        }
      `}</style>
    </main>
  );
}