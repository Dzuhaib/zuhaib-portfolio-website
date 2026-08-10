import { SITE } from "./constants";

/**
 * Stable @id values. Every schema node on the site points at these instead of
 * repeating the entity inline, so crawlers resolve one Person and one
 * Organization across all 27 URLs rather than 27 disconnected fragments.
 */
export const ID = {
  person: `${SITE.url}/#person`,
  organization: `${SITE.url}/#aivized`,
  website: `${SITE.url}/#website`,
} as const;

export const personSchema = {
  "@type": "Person",
  "@id": ID.person,
  name: "Zuhaib Ahmed",
  alternateName: [
    "Zuhaib Ahmed Sindh",
    "Zuhaib Ahmed Full Stack Developer",
    "Zuhaib AI Engineer",
    "Zuhaib",
  ],
  url: SITE.url,
  image: `${SITE.url}/opengraph-image`,
  jobTitle: SITE.jobTitles,
  description: SITE.description,
  email: `mailto:${SITE.email}`,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    addressCountry: SITE.countryCode,
  },
  homeLocation: {
    "@type": "Place",
    name: SITE.location,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.countryCode,
    },
  },
  workLocation: SITE.servesAreas.map((area) => ({
    "@type": "Place",
    name: area,
  })),
  nationality: { "@type": "Country", name: SITE.country },
  knowsLanguage: ["en", "ur"],
  knowsAbout: [
    "Full Stack Development",
    "Artificial Intelligence Engineering",
    "Multi-Agent Systems",
    "Retrieval Augmented Generation",
    "AI Automation",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
    "LangChain",
    "PostgreSQL",
    "Web Application Development",
    "Technical SEO",
  ],
  founder: { "@id": ID.organization },
  worksFor: { "@id": ID.organization },
  sameAs: [SITE.social.github, SITE.social.linkedin, SITE.social.twitter],
};

export const organizationSchema = {
  "@type": "Organization",
  "@id": ID.organization,
  name: "AIVIZED",
  url: "https://aivized.com",
  description:
    "AIVIZED builds AI chatbots, automation systems, and AI SaaS platforms. Founded by Zuhaib Ahmed in Sindh, Pakistan.",
  founder: { "@id": ID.person },
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    addressCountry: SITE.countryCode,
  },
  areaServed: SITE.servesAreas.map((area) => ({
    "@type": "Country",
    name: area,
  })),
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": ID.website,
  url: SITE.url,
  name: SITE.title,
  description: SITE.description,
  publisher: { "@id": ID.person },
  inLanguage: "en",
};

/** Wraps nodes in a JSON-LD @graph document. */
export function graph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

/** BreadcrumbList from an ordered list of [name, path] pairs. */
export function breadcrumbSchema(trail: Array<{ name: string; path: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${SITE.url}${crumb.path}`,
    })),
  };
}

/** Renders a JSON-LD script tag. */
export function JsonLd({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
