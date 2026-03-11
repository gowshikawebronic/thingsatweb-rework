import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/AllData/data/BlogpageData";
import BlogDetailClient from "./BlogDetailClient";

// ✅ Static paths – works perfectly here (Server Component)
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

// ✅ Server Component – no "use client"
export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
  if (currentIndex === -1) return notFound();

  const post = BLOG_POSTS[currentIndex];
  const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;

  // ✅ Pass all data to the Client Component
  return (
    <BlogDetailClient
      post={post}
      prevPost={prevPost}
      nextPost={nextPost}
    />
  );
}