export const SITE = {
  name: "Zuhaib Ahmed",
  title: "Zuhaib Ahmed Based in Sindh - Full Stack Developer & AI Engineer",
  description:
    "Zuhaib Ahmed Based in Sindh, Pakistan — Full Stack Developer & AI Engineer building scalable web applications, AI automation systems, intelligent chatbots, and modern digital products for global clients.",
  url: "https://zuhaibahmed.com",
  locale: "en_US",
  author: "Zuhaib Ahmed",
  email: "myselfzuhaib@gmail.com",
  location: "Sindh, Pakistan",
  availability: true,
  social: {
    github: "https://github.com/Dzuhaib",
    linkedin: "https://linkedin.com/in/zuhaibah/",
    twitter: "https://x.com/zuhaibahmed",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const PROJECTS = [
  {
    title: "AIVIZED Agent Factory",
    slug: "aivized-agent-factory",
    category: "AI + No-Code",
    description:
      "Struggling with slow chatbot delivery? I built AIVIZED Agent Factory — a no-code AI platform that deploys production-ready chatbots in under 10 minutes. Custom-trained on your business data, embeddable anywhere, no coding required.",
    thumbnail: "/images/project-agent-factory.svg",
    technologies: [
      "Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "OpenAI",
      "React", "TypeScript", "Vite", "Docker",
    ],
    liveUrl: null,
    githubUrl: null,
    achievements: [
      "From 2-week delivery → 10-minute deployment",
      "Zero-code chatbot configuration & deployment",
      "Self-contained widget bundling via Vite IIFE",
    ],
    results: [],
    featured: true,
  },
  {
    title: "Instagram Growth OS — Grow with Meta Verified APIs",
    slug: "growth-os",
    category: "AI + Social",
    description:
      "Stop guessing what works on Instagram. Growth OS connects directly to Meta's official API to analyze your content, generate viral captions with AI, score every post, spy on competitors, and schedule posts — all from one dashboard.",
    thumbnail: "/images/growth-os/homepage.webp",
    technologies: [
      "TypeScript", "Next.js 16", "React 19", "Tailwind CSS v4",
      "Clerk", "OpenAI", "Meta Graph API", "Recharts",
      "Zustand", "Stripe",
    ],
    liveUrl: null,
    githubUrl: null,
    achievements: [
      "Deep Instagram analytics via official Meta APIs",
      "AI-powered caption, reel script & hook generation",
      "Competitor gap analysis & niche trend tracking",
    ],
    results: [],
    featured: true,
  },
  {
    title: "Talent AI — Smart Job & Candidate Matching",
    slug: "talent-ai",
    category: "AI + HR Tech",
    description:
      "Manual CV screening is dead. Talent AI lets you create custom job forms, share a link, and let Google Gemini AI automatically score, rank, and shortlist candidates based on their CV vs your requirements — with full transparency on why each candidate passed or failed.",
    thumbnail: "/images/talent-ai/Homepage.webp",
    technologies: [
      "TypeScript", "React 19", "Vite 6", "Express",
      "Google Gen AI", "Firebase", "Tailwind CSS v4",
    ],
    liveUrl: null,
    githubUrl: null,
    achievements: [
      "AI-powered CV scoring against job requirements",
      "Auto-shortlisting based on ATS compatibility",
      "Custom job application forms with shareable links",
    ],
    results: [],
    featured: true,
  },
  {
    title: "FiveOS — Fiverr Growth using AI",
    slug: "fiveos",
    category: "AI + Market Intelligence",
    description:
      "Want to dominate your Fiverr niche? FiveOS scrapes real-time gig data, reviews, and market stats — then uses OpenAI o3-mini and GPT-4o to generate a custom growth strategy streamed live to your browser. Know exactly where to compete and how to win.",
    thumbnail: "/images/fiveos/Homepage.webp",
    technologies: [
      "TypeScript", "Python", "Next.js 15", "React 19", "FastAPI",
      "OpenAI", "Tailwind CSS", "WebSockets", "GLSL",
    ],
    liveUrl: null,
    githubUrl: null,
    achievements: [
      "Real-time Fiverr scraping via curl_cffi bypassing Cloudflare",
      "Multi-model AI (o3-mini + gpt-4o) for deep strategy reasoning",
      "WebGL shader background with streaming strategy output",
    ],
    results: [],
    featured: false,
  },
  {
    title: "VideoDown — YouTube, Instagram & TikTok Downloader",
    slug: "videodown",
    category: "Tool",
    description:
      "Need to save a video or extract audio from any platform? Paste any YouTube, Instagram, or TikTok link — choose MP4 video or MP3 audio — and download instantly. Built with youtube-dl-exec and ffmpeg for maximum format support.",
    thumbnail: "/images/videodown/Youtube, insta, tiktok video downloader.webp",
    technologies: [
      "TypeScript", "Next.js 14", "React 18", "Tailwind CSS",
      "youtube-dl-exec", "ffmpeg",
    ],
    liveUrl: null,
    githubUrl: null,
    achievements: [
      "Cross-platform downloads (YouTube, TikTok, Instagram)",
      "Video + MP3 audio extraction via ffmpeg",
      "Rate-limited API for fair usage",
    ],
    results: [],
    featured: false,
  },
  {
    title: "AI Lead Engine — Automated Outreach System",
    slug: "ai-lead-engine",
    category: "AI + Automation",
    description:
      "Tired of manual lead generation? AI Lead Engine runs 4 autonomous agents — discovering businesses from Google Maps, verifying their SEO/chatbot needs, and sending personalized AI-crafted emails — all on autopilot. Set it and forget it.",
    thumbnail: "/images/project-lead-engine.svg",
    technologies: [
      "TypeScript", "Next.js 15", "React 19", "Tailwind CSS",
      "Prisma", "PostgreSQL", "BullMQ", "Redis",
      "Playwright", "Cheerio",
      "OpenAI SDK", "Nodemailer",
      "NextAuth.js", "Zustand", "Zod",
      "Docker", "Radix UI", "Recharts",
    ],
    liveUrl: "https://example.com",
    githubUrl: null,
    achievements: [
      "100 leads analyzed per job across 1–7 concurrent crawlers",
      "Automated SEO/speed/chatbot verification pipeline",
      "Personalized email generation via OpenAI with human-like delivery",
    ],
    results: [],
    featured: true,
  },
] as const;

export const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB"],
  },
  {
    title: "AI",
    skills: ["OpenAI", "LangChain", "RAG", "Vector Databases", "n8n"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "Vercel", "AWS", "CI/CD", "Linux"],
  },
] as const;

export const EXPERIENCES = [
  {
    company: "Freelance",
    position: "Full Stack Developer & AI Engineer",
    duration: "2020 — Present",
    achievements: [
      "Delivered 50+ web applications and AI solutions for clients globally",
      "Built custom AI automation systems reducing operational costs by 40%",
      "Achieved 99% client satisfaction rate across all projects",
    ],
  },
  {
    company: "Tech Agency",
    position: "Senior Full Stack Developer",
    duration: "2022 — 2024",
    achievements: [
      "Led development of 15+ major web projects using Next.js and React",
      "Implemented CI/CD pipelines reducing deployment time by 70%",
      "Mentored junior developers and established code review practices",
    ],
  },
  {
    company: "Digital Solutions Inc",
    position: "Web Developer",
    duration: "2020 — 2022",
    achievements: [
      "Built responsive web applications serving 100k+ monthly users",
      "Migrated legacy PHP applications to modern React architecture",
      "Optimized Core Web Vitals achieving 95+ Lighthouse scores",
    ],
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "Zuhaib delivered beyond our expectations. The platform he built handles our traffic effortlessly, and our conversion rates have never been higher. He's not just a developer — he's a strategic partner.",
  },
  {
    name: "Michael Chen",
    role: "Product Manager, DataFlow Inc",
    content:
      "Working with Zuhaib was seamless. He understood our complex requirements immediately and delivered a dashboard that our users love. His attention to detail is remarkable.",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, Bloom Agency",
    content:
      "Zuhaib transformed our digital presence completely. The AI systems he built have automated 70% of our repetitive tasks. It was the best investment we made for our business.",
  },
  {
    name: "David Park",
    role: "CTO, ScaleUp Ventures",
    content:
      "I've worked with many developers, but Zuhaib stands out for his technical depth and AI expertise. He doesn't just write code — he solves problems intelligently.",
  },
] as const;

export const SERVICES = [
  {
    title: "Next.js Development",
    slug: "nextjs-development",
    tagline: "High-performance React applications with modern SSR & SSG.",
    description:
      "I build blazing-fast Next.js applications with server-side rendering, static generation, and optimal Core Web Vitals. From marketing sites to complex SaaS platforms, every project is engineered for performance and scale.",
    icon: "NextjsIcon",
    features: [
      "Server Components & App Router architecture",
      "Optimized Core Web Vitals & Lighthouse scores",
      "Dynamic metadata & structured data implementation",
      "Full-stack capabilities with API routes",
      "Seamless CMS integration (Sanity, Contentful, Strapi)",
      "Automated deployment pipelines",
    ],
    keyword: "Next.js Development Services",
    h1: "Next.js Development Services That Drive Results",
  },
  {
    title: "React Development",
    slug: "react-development",
    tagline: "Dynamic, component-driven user interfaces.",
    description:
      "I craft scalable, maintainable React applications with clean architecture and exceptional user experiences. Every component is built with performance, accessibility, and reusability in mind.",
    icon: "ReactIcon",
    features: [
      "Component architecture & design systems",
      "State management (Redux, Zustand, Context)",
      "React Query & data synchronization",
      "Comprehensive unit & integration testing",
      "Accessibility-first development (WCAG)",
      "Migration from legacy frameworks",
    ],
    keyword: "React Development Services",
    h1: "React Development Services for Modern Web Applications",
  },
  {
    title: "TypeScript Development",
    slug: "typescript-development",
    tagline: "Type-safe code that scales with your business.",
    description:
      "I leverage TypeScript's type system to build robust, self-documenting codebases that catch errors before they reach production. The result is software you can trust and maintain long-term.",
    icon: "TypescriptIcon",
    features: [
      "Full-stack TypeScript (frontend & backend)",
      "Type-safe API contracts & data validation",
      "Generic patterns & utility types",
      "Strict configuration & custom linting",
      "Migration from JavaScript to TypeScript",
      "Automated type generation from schemas",
    ],
    keyword: "TypeScript Development Services",
    h1: "TypeScript Development Services for Robust Applications",
  },
  {
    title: "Front-End Development",
    slug: "frontend-development",
    tagline: "Pixel-perfect interfaces with world-class performance.",
    description:
      "I create beautiful, responsive front-ends that load fast and feel smooth. Every interface is crafted with modern CSS, optimized assets, and progressive enhancement for a flawless user experience.",
    icon: "FrontendIcon",
    features: [
      "Responsive & mobile-first designs",
      "Tailwind CSS & CSS-in-JS solutions",
      "Animation & micro-interactions",
      "Performance optimization & bundle analysis",
      "Cross-browser compatibility",
      "Design system creation & documentation",
    ],
    keyword: "Front-End Development Services",
    h1: "Front-End Development Services for Exceptional User Experiences",
  },
  {
    title: "WordPress Development",
    slug: "wordpress-development",
    tagline: "Custom WordPress solutions beyond page builders.",
    description:
      "I build bespoke WordPress themes and plugins that break free from template limitations. Custom post types, advanced Gutenberg blocks, and headless WordPress setups tailored to your exact requirements.",
    icon: "WordpressIcon",
    features: [
      "Custom theme development from scratch",
      "Advanced custom Gutenberg blocks",
      "Headless WordPress with Next.js frontend",
      "Custom plugin development",
      "WooCommerce & e-commerce solutions",
      "Performance optimization & security hardening",
    ],
    keyword: "WordPress Development Services",
    h1: "WordPress Development Services That Go Beyond Templates",
  },
  {
    title: "Website Maintenance",
    slug: "website-maintenance",
    tagline: "Keep your site secure, fast, and up-to-date.",
    description:
      "I provide comprehensive website maintenance to keep your digital presence running smoothly. From security updates to performance monitoring, I handle the technical heavy lifting so you can focus on your business.",
    icon: "MaintenanceIcon",
    features: [
      "Regular security updates & patches",
      "Performance monitoring & optimization",
      "Content updates & management",
      "Backup & disaster recovery planning",
      "SEO monitoring & technical audits",
      "24/7 uptime monitoring & incident response",
    ],
    keyword: "Website Maintenance Services",
    h1: "Website Maintenance Services for Peace of Mind",
  },
] as const;

export const BLOG_POSTS = [
  {
    title: "Why Next.js Is the Best Choice for Your Next Project in 2025",
    slug: "why-nextjs-best-choice-2025",
    category: "Next.js",
    excerpt:
      "A deep dive into why Next.js continues to dominate the React framework landscape and how it can benefit your business.",
    date: "December 15, 2025",
    readTime: "8 min read",
    content: `Next.js has evolved significantly over the years, and 2025 is shaping up to be its strongest year yet. With the App Router maturing, server components becoming the norm, and performance optimizations that push the boundaries of what's possible on the web, there has never been a better time to build with Next.js.`,
  },
  {
    title: "Building Accessible React Components: A Practical Guide",
    slug: "building-accessible-react-components",
    category: "React",
    excerpt:
      "Learn how to build React components that work for everyone, with practical examples and WCAG best practices.",
    date: "November 28, 2025",
    readTime: "10 min read",
    content: `Accessibility isn't an afterthought — it's a fundamental part of good development. Building accessible React components means creating experiences that work for everyone, regardless of how they interact with the web.`,
  },
  {
    title: "TypeScript Tips Every Developer Should Know",
    slug: "typescript-tips-every-developer",
    category: "TypeScript",
    excerpt: "Advanced TypeScript patterns and techniques that will make your code more robust and maintainable.",
    date: "November 10, 2025",
    readTime: "6 min read",
    content: `TypeScript has become the standard for serious web development. Here are some tips that will help you write better TypeScript code.`,
  },
  {
    title: "Headless WordPress vs Traditional WordPress: Which Is Right for You?",
    slug: "headless-vs-traditional-wordpress",
    category: "WordPress",
    excerpt:
      "An honest comparison of headless and traditional WordPress approaches to help you make the right decision.",
    date: "October 22, 2025",
    readTime: "7 min read",
    content: `The debate between headless and traditional WordPress continues. Both approaches have their place, and the right choice depends on your specific needs.`,
  },
  {
    title: "How AI Is Changing the Way We Build Websites",
    slug: "ai-changing-website-development",
    category: "AI Tools",
    excerpt:
      "Exploring the practical applications of AI in web development and how to leverage them without compromising quality.",
    date: "October 5, 2025",
    readTime: "5 min read",
    content: `AI is transforming web development, but not in the way many people think. Instead of replacing developers, AI is augmenting our capabilities and changing how we approach problems.`,
  },
  {
    title: "The Freelancer's Guide to Pricing Web Development Projects",
    slug: "freelancer-guide-pricing-web-projects",
    category: "Freelancing",
    excerpt:
      "A transparent look at how to price your web development services — from hourly rates to value-based pricing.",
    date: "September 18, 2025",
    readTime: "9 min read",
    content: `Pricing is one of the hardest parts of freelancing. Charge too little and you burn out. Charge too much and you scare away clients. Here's how to find the right balance.`,
  },
] as const;

export const TECH_LOGOS = [
  { name: "Next.js", icon: "NextjsIcon" },
  { name: "React", icon: "ReactIcon" },
  { name: "TypeScript", icon: "TypescriptIcon" },
  { name: "Node.js", icon: "NodejsIcon" },
  { name: "Python", icon: "PythonIcon" },
  { name: "Docker", icon: "DockerIcon" },
  { name: "PostgreSQL", icon: "PostgresIcon" },
  { name: "MongoDB", icon: "MongoIcon" },
  { name: "OpenAI", icon: "OpenAIIcon" },
  { name: "LangChain", icon: "LangchainIcon" },
  { name: "Tailwind CSS", icon: "TailwindIcon" },
  { name: "Framer Motion", icon: "FramerIcon" },
  { name: "Shopify", icon: "ShopifyIcon" },
  { name: "WordPress", icon: "WordpressIcon" },
  { name: "SEO", icon: "SEOIcon" },
  { name: "Git", icon: "GitIcon" },
  { name: "Redis", icon: "RedisIcon" },
  { name: "AWS", icon: "AWSIcon" },
] as const;
