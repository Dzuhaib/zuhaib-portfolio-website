import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";
import { BlogHero } from "@/components/ui/BlogHero";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights and tutorials on web development, AI, and engineering from Zuhaib Ahmed, a Full Stack Developer and AI Engineer based in Sindh, Pakistan.",
  openGraph: {
    title: "Blog | Zuhaib Ahmed Based in Sindh",
    description:
      "Insights and tutorials on web development, AI, and engineering from Zuhaib Ahmed, a Full Stack Developer and AI Engineer based in Sindh, Pakistan.",
  },
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <PostsSection />
      <FAQSection />
    </>
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

function FAQSection() {
  const faqs = [
    {
      q: "Why is Next.js the best choice for modern web applications?",
      a: "Zuhaib Ahmed explains why Next.js outperforms traditional frameworks with its App Router, Server Components, and built-in performance optimizations that deliver faster load times and better SEO."
    },
    {
      q: "How do you build accessible React components?",
      a: "Zuhaib Ahmed breaks down how semantic HTML, WCAG 2.2 principles, and proper keyboard navigation create React components that work for all users."
    },
    {
      q: "What TypeScript patterns improve code maintainability?",
      a: "Zuhaib Ahmed shares TypeScript patterns including generic constraints, discriminated unions, and branded types that make codebases more robust and maintainable."
    },
    {
      q: "Should I choose headless or traditional WordPress?",
      a: "Zuhaib Ahmed compares headless and traditional WordPress across performance, SEO, cost, and developer experience to help you decide the right approach."
    },
    {
      q: "How is AI changing web development workflows?",
      a: "Zuhaib Ahmed explores how AI coding assistants, automated code review, and AI API integration augment developer productivity without sacrificing quality."
    },
    {
      q: "How should freelancers price web development projects?",
      a: "Zuhaib Ahmed reveals his approach to moving from hourly to value-based pricing, handling scope creep, and raising rates profitably as a freelance developer."
    },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="heading-lg text-black mb-8">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-neutral-200 p-6">
                <p className="text-black font-bold mb-2">{faq.q}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}