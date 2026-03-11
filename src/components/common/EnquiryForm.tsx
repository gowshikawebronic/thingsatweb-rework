"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import TextureOverlay from "@/components/UI/TextureOverlay";

export default function LeaveReplyForm() {
  const [formData, setFormData] = useState({
    comment: "",
    name: "",
    email: "",
    website: "",
    saveInfo: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ comment: "", name: "", email: "", website: "", saveInfo: false });
      
      // Reset success state after 4 seconds
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 1500);
  };

  return (
    <div className="relative bg-white/60 dark:bg-white/[0.06] backdrop-blur-2xl border border-white/50 dark:border-white/[0.08] rounded-[2rem] p-8 md:p-12 shadow-xl shadow-foreground/[0.03] overflow-hidden">
        <TextureOverlay />

        {/* Ambient Glows inside the card */}
        <div className="absolute top-0 left-0 w-40 h-40 blur-3xl opacity-10 pointer-events-none z-0 bg-brand-green" />
        <div className="absolute bottom-0 right-0 w-40 h-40 blur-3xl opacity-10 pointer-events-none z-0 bg-brand-blue" />

        <div className="relative z-10">
            {/* Header Section inside the card */}
            <div className="mb-10">
                <h3 className="text-3xl sm:text-4xl font-display font-black text-foreground tracking-tight mb-2">
                    Leave a Reply
                </h3>
                <p className="text-foreground/60 font-medium m-0">
                    Your email address will not be published. Required fields are marked <span className="text-brand-green">*</span>
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Comment */}
                <div>
                <label htmlFor="comment" className="block text-xs font-bold text-foreground/40 uppercase tracking-widest mb-2">
                    Comment <span className="text-brand-green">*</span>
                </label>
                <textarea
                    id="comment"
                    rows={5}
                    required
                    className="w-full px-5 py-3.5 bg-white/70 dark:bg-white/[0.04] backdrop-blur-lg border border-white/50 dark:border-white/[0.08] rounded-xl text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brand-blue/40 focus:ring-2 focus:ring-brand-blue/10 transition-all text-sm font-medium resize-none"
                    placeholder="Write your thoughts here..."
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                />
                </div>

                {/* Name & Email Grid */}
                <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="name" className="block text-xs font-bold text-foreground/40 uppercase tracking-widest mb-2">
                    Name <span className="text-brand-green">*</span>
                    </label>
                    <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-5 py-3.5 bg-white/70 dark:bg-white/[0.04] backdrop-blur-lg border border-white/50 dark:border-white/[0.08] rounded-xl text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brand-blue/40 focus:ring-2 focus:ring-brand-blue/10 transition-all text-sm font-medium"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-xs font-bold text-foreground/40 uppercase tracking-widest mb-2">
                    Email <span className="text-brand-green">*</span>
                    </label>
                    <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-5 py-3.5 bg-white/70 dark:bg-white/[0.04] backdrop-blur-lg border border-white/50 dark:border-white/[0.08] rounded-xl text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brand-blue/40 focus:ring-2 focus:ring-brand-blue/10 transition-all text-sm font-medium"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                </div>

                {/* Website */}
                <div>
                <label htmlFor="website" className="block text-xs font-bold text-foreground/40 uppercase tracking-widest mb-2">
                    Website
                </label>
                <input
                    type="url"
                    id="website"
                    className="w-full px-5 py-3.5 bg-white/70 dark:bg-white/[0.04] backdrop-blur-lg border border-white/50 dark:border-white/[0.08] rounded-xl text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brand-blue/40 focus:ring-2 focus:ring-brand-blue/10 transition-all text-sm font-medium"
                    placeholder="https://yourwebsite.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
                </div>

                {/* Consent Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer group">
                <input
                    type="checkbox"
                    required
                    checked={formData.saveInfo}
                    onChange={(e) => setFormData({ ...formData, saveInfo: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-foreground/20 text-brand-green focus:ring-brand-green/20 cursor-pointer"
                />
                <span className="text-xs text-foreground/50 leading-relaxed group-hover:text-foreground/70 transition-colors">
                    Save my name, email, and website in this browser for the next time I comment.
                </span>
                </label>

                {/* Submit Button */}
                <div className="pt-2">
                    <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-green text-white font-bold text-sm uppercase tracking-widest px-10 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group/btn disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                    {isSubmitted ? (
                        <>
                        <CheckCircle2 size={18} />
                        <span>Posted successfully</span>
                        </>
                    ) : isSubmitting ? (
                        <span>Posting...</span>
                    ) : (
                        <>
                        <Send size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        <span>Post Comment</span>
                        </>
                    )}
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
}