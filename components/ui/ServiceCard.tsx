import Link from "next/link";

interface ServiceCardProps {
  title: string;
  slug: string;
  tagline: string;
  icon?: string;
}

const iconMap: Record<string, string> = {
  NextjsIcon: "N",
  ReactIcon: "⚛",
  TypescriptIcon: "TS",
  FrontendIcon: "</>",
  WordpressIcon: "W",
  MaintenanceIcon: "⟳",
};

export function ServiceCard({ title, slug, tagline, icon }: ServiceCardProps) {
  const iconLabel = icon ? iconMap[icon] || "●" : "●";
  return (
    <Link
      href={`/services/${slug}`}
      className="group relative block p-10 bg-warm-white border border-stone rounded-2xl transition-all duration-500 hover:border-forest/30 hover:shadow-[0_24px_80px_-24px_rgba(26,60,52,0.12)] hover:-translate-y-0.5"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-forest/8 to-forest/3 flex items-center justify-center text-lg font-bold tracking-tight text-forest group-hover:scale-105 group-hover:from-forest/12 group-hover:to-forest/6 transition-all duration-500">
          {iconLabel}
        </div>
        <span className="text-xs tracking-[0.15em] uppercase text-charcoal/20 group-hover:text-forest/40 transition-colors duration-300">
          Service
        </span>
      </div>
      <h3 className="font-serif text-xl md:text-2xl leading-tight mb-3 text-charcoal group-hover:text-forest transition-colors duration-300">
        {title}
      </h3>
      <p className="text-charcoal/50 text-sm leading-relaxed">
        {tagline}
      </p>
      <span className="link-arrow mt-8 inline-flex text-xs uppercase tracking-widest font-semibold">
        Explore
        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
      </span>
    </Link>
  );
}
