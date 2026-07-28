import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";
import { BlogPostHero } from "@/components/ui/BlogPostHero";

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

function getTakeaways(content: string): string[] {
  const blocks = content.split("\n\n");
  const takeaways: string[] = [];
  for (const block of blocks) {
    if (block.startsWith("## ")) {
      takeaways.push(block.replace("## ", "").trim());
    }
  }
  return takeaways.slice(0, 5);
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);

  const takeaways = getTakeaways(post.content);

  return (
    <>
      <BlogPostHero
        title={post.title}
        category={post.category}
        date={post.date}
        readTime={post.readTime}
      />

      <article className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-2xl mx-auto">
            <div>{renderContent(post.content)}</div>
          </div>
        </div>
      </article>

      {takeaways.length > 0 && (
        <section className="section-padding bg-neutral-50">
          <div className="container-main">
            <div className="max-w-2xl mx-auto">
              <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
                Key Takeaways
              </p>
              <h2 className="heading-lg text-black mb-8">What you will learn from this article</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {takeaways.map((takeaway, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 border border-neutral-200"
                  >
                    <span className="shrink-0 w-6 h-6 rounded-full bg-green flex items-center justify-center text-white text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="text-neutral-600 text-sm">{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {relatedPosts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="max-w-2xl mx-auto">
              <p className="text-neutral-400 text-sm font-mono tracking-widest uppercase mb-4">
                Related Articles
              </p>
              <h2 className="heading-lg text-black mb-8">Continue reading</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group block border border-neutral-200 p-6 hover:border-green transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-green text-xs font-mono tracking-widest uppercase">
                        {rp.category}
                      </span>
                      <span className="text-xs text-neutral-400">{rp.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-black mb-2 group-hover:text-green transition-colors duration-200">
                      {rp.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2">
                      {rp.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
