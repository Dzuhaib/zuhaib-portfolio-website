import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Zuhaib Ahmed`,
      description: post.excerpt,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: ["Zuhaib Ahmed"],
    },
    alternates: { canonical: `/blog/${slug}` },
  };
}

function renderContent(content: string) {
  const blocks = content.split("\n\n");
  return blocks.map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl font-bold text-black mt-14 mb-4">
          {block.replace("## ", "")}
        </h2>
      );
    }

    if (block.startsWith("```")) {
      const code = block.replace(/```\w*\n?/, "").replace(/\n?```$/, "");
      return (
        <pre
          key={i}
          className="bg-neutral-900 text-white p-6 overflow-x-auto text-sm leading-relaxed my-8 font-mono"
        >
          <code>{code}</code>
        </pre>
      );
    }

    const lines = block.split("\n");
    const listItems = lines.filter((l) => l.match(/^[-*]\s/));
    if (listItems.length > 1) {
      return (
        <ul key={i} className="space-y-3 my-8 text-neutral-500">
          {lines.map((line, j) => {
            const text = line.replace(/^[-*]\s/, "");
            if (!text) return null;
            return (
              <li key={j} className="flex items-start gap-3">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-green mt-2.5" />
                <span className="leading-relaxed">{renderInline(text)}</span>
              </li>
            );
          })}
        </ul>
      );
    }

    return (
      <p key={i} className="text-neutral-500 leading-relaxed my-8 text-lg">
        {renderInline(block)}
      </p>
    );
  });
}

function renderInline(text: string) {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="bg-neutral-100 text-green px-2 py-0.5 text-sm font-medium"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    const linkParts = part.split(/(\[[^\]]+\]\([^)]+\))/g);
    return linkParts.map((lp, j) => {
      const linkMatch = lp.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        return (
          <a
            key={j}
            href={linkMatch[2]}
            className="text-green underline decoration-green/30 hover:decoration-green transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkMatch[1]}
          </a>
        );
      }
      return <span key={j}>{lp}</span>;
    });
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="pt-32 md:pt-40 pb-20 md:pb-28 bg-white">
      <div className="container-main">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/blog"
            className="text-xs tracking-wider uppercase text-neutral-400 hover:text-green transition-colors duration-200 mb-8 inline-flex items-center gap-2"
          >
            ← Back to Blog
          </Link>

          <div className="flex items-center gap-4 mb-6 mt-8">
            <span className="text-green text-xs font-mono tracking-widest uppercase">{post.category}</span>
            <span className="text-sm text-neutral-400">{post.date}</span>
            <span className="text-sm text-neutral-400">{post.readTime}</span>
          </div>

          <h1 className="heading-xl text-black mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 pb-8 mb-12 border-b border-neutral-200">
            <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-sm font-medium text-black">
              ZA
            </div>
            <div>
              <span className="block text-sm font-medium text-black">Zuhaib Ahmed</span>
              <span className="text-xs text-neutral-400">Full Stack Developer & AI Engineer</span>
            </div>
          </div>

          <div>{renderContent(post.content)}</div>
        </div>
      </div>
    </article>
  );
}
