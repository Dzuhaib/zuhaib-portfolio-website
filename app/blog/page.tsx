import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights and tutorials on web development, AI, and engineering from Zuhaib Ahmed.",
  openGraph: {
    title: "Blog | Zuhaib Ahmed",
    description:
      "Insights and tutorials on web development, AI, and engineering from Zuhaib Ahmed.",
  },
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <HeroSection />
      <PostsSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 bg-black">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-green text-sm font-mono tracking-widest uppercase mb-6">
            Blog
          </p>
          <h1 className="heading-xl text-white mb-6">
            Insights on development, AI, and engineering
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
            Practical articles on web development, AI systems, and freelancing
            — written from real experience.
          </p>
        </div>
      </div>
    </section>
  );
}

function PostsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block border border-neutral-200 p-8 hover:border-green transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-green text-xs font-mono tracking-widest uppercase">
                  {post.category}
                </span>
                <span className="text-xs text-neutral-400">{post.readTime}</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-3 group-hover:text-green transition-colors duration-200">
                {post.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-8 pt-5 border-t border-neutral-100">
                <span className="text-xs text-neutral-400">{post.date}</span>
                <span className="text-xs text-neutral-600 group-hover:text-green transition-colors duration-200">
                  Read →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
