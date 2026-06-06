"use client";

import Link from "next/link";
import { blogPosts } from "../page";

interface RelatedPostsProps {
  currentSlug: string;
  currentTags: string[];
  limit?: number;
}

export default function RelatedPosts({ currentSlug, currentTags, limit = 3 }: RelatedPostsProps) {
  // Find posts that share at least one tag, excluding current post
  const relatedPosts = blogPosts
    .filter((post) => {
      if (post.slug === currentSlug) return false;
      return post.tags.some((tag) => currentTags.includes(tag));
    })
    .slice(0, limit);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
      <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
        <span>🔗</span> 你可能也想看
      </h3>
      <div className="grid gap-4 md:grid-cols-3">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden hover:shadow-lg transition-all hover:scale-[1.02]"
          >
            <div className="relative h-32 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className={`absolute top-2 left-2 bg-gradient-to-r ${post.accent} rounded-full p-1.5 text-sm`}>
                {post.icon}
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-slate-800 dark:text-white text-sm line-clamp-2 group-hover:text-amber-600 transition-colors">
                {post.title}
              </h4>
              <p className="text-slate-500 text-xs mt-1">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}