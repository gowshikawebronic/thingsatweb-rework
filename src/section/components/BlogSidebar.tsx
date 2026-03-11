"use client";

import Link from "next/link";
import { Search, Filter, Hash } from "lucide-react";
import { CATEGORIES, TAGS, BLOG_POSTS } from "@/AllData/data/BlogpageData";

export default function BlogSidebar() {
  return (
    <aside className="space-y-8">
      
      {/* 1. Search (Optional: Redirect to main news with auto-focus if possible, 
          but for simplicity, we link the categories/tags which is the main request) */}
      <div className="group relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          placeholder="Search articles..."
          disabled
          className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-500 font-medium cursor-not-allowed"
        />
        <div className="absolute top-full left-0 mt-2 text-xs text-slate-400 px-4">
          * Go to <Link href="/news" className="text-brand-green underline">News Page</Link> to search
        </div>
      </div>

      {/* 2. Categories Widget */}
      <div className="bg-white p-2 rounded-[2rem] border border-slate-200 shadow-sm">
        <div className="px-6 pt-6 pb-2">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Filter size={18} className="text-brand-green" />
            Categories
          </h3>
        </div>
        <nav className="flex flex-col gap-1 p-2">
          <Link
             href="/news"
             className="relative px-4 py-3 rounded-xl text-sm font-bold text-left transition-all flex justify-between items-center text-slate-600 hover:bg-slate-50"
          >
            <span>All Articles</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
              {BLOG_POSTS.length}
            </span>
          </Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.name}
              href={`/news?category=${encodeURIComponent(cat.name)}`}
              className="relative px-4 py-3 rounded-xl text-sm font-bold text-left transition-all flex justify-between items-center text-slate-600 hover:bg-slate-50"
            >
              <span>{cat.name}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                {cat.count}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* 3. Tags Cloud */}
      <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Hash size={18} className="text-brand-green" />
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {TAGS.map((tag, idx) => (
            <Link
              key={idx}
              href={`/news?tag=${encodeURIComponent(tag)}`}
              className="px-3 py-2 border border-slate-100 rounded-lg text-xs font-bold text-slate-600 bg-slate-50 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}