import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  slug: string;
  category: string;
  description: string;
  thumbnail: string;
  technologies: readonly string[];
}

export function ProjectCard({
  title,
  slug,
  category,
  description,
  thumbnail,
  technologies,
}: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${slug}`} className="group block">
      <article className="relative overflow-hidden rounded-2xl bg-warm-white border border-stone transition-all duration-500 hover:border-forest/30 hover:shadow-[0_24px_80px_-24px_rgba(26,60,52,0.12)] hover:-translate-y-0.5">
        <div className="aspect-[16/11] relative overflow-hidden bg-sand">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/5 to-transparent" />
        </div>
        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-dark">
              {category}
            </span>
            <span className="w-px h-3 bg-stone-dark/30" />
            <div className="flex gap-2">
              {technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-charcoal/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <h3 className="font-serif text-xl md:text-2xl leading-tight mb-2 text-charcoal group-hover:text-forest transition-colors duration-300">
            {title}
          </h3>
          <p className="text-charcoal/50 text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
          <span className="link-arrow mt-6 inline-flex text-xs uppercase tracking-widest font-semibold">
            View Case Study
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
        </div>
      </article>
    </Link>
  );
}
