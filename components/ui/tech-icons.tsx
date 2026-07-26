export const iconComponents: Record<string, React.ReactNode> = {
  NextjsIcon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-neutral-800">
      <rect width="24" height="24" rx="4" fill="currentColor" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="system-ui">N</text>
    </svg>
  ),
  ReactIcon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-sky-500">
      <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(-60 12 12)" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),
  TypescriptIcon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-blue-600">
      <rect width="24" height="24" rx="3" fill="currentColor" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="system-ui">TS</text>
    </svg>
  ),
  NodejsIcon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-green-600">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="currentColor" opacity="0.3" />
      <path d="M12 2L3 7v10l9 5V2z" fill="currentColor" opacity="0.5" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="system-ui">N</text>
    </svg>
  ),
  PythonIcon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
      <path d="M12 2C8.5 2 8 3.5 8 5v3h6v1H6c-2 0-4 1.5-4 4v4c0 2 2 4 4 4h2v-3c0-2 2-3 3.5-3H16c2 0 4-1.5 4-3.5V9c0-2-2-4-4-4h-4z" fill="#3776AB" />
      <path d="M16 22c3.5 0 4-1.5 4-3v-3h-6v-1h6c2 0 4-1.5 4-4V7c0-2-2-4-4-4h-2v3c0 2-2 3-3.5 3H8c-2 0-4 1.5-4 3.5V15c0 2 2 4 4 4h4z" fill="#FFD43B" />
    </svg>
  ),
  DockerIcon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-blue-500">
      <rect x="2" y="10" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="6" y="10" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="10" y="7" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="10" y="10" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="14" y="10" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="6" y="7" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="14" y="7" width="3" height="3" rx="0.5" fill="currentColor" />
      <path d="M2 14h18c0 3-2 5-5 5H7c-3 0-5-2-5-5z" fill="currentColor" opacity="0.3" />
      <path d="M20 14c0-2-1-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  PostgresIcon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-blue-400">
      <path d="M12 3c-2 0-4 1-4 3v4c0 2 2 4 4 4s4-2 4-4V6c0-2-2-3-4-3z" fill="currentColor" opacity="0.5" />
      <path d="M8 10c0 2 2 3 4 3s4-1 4-3" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M12 14v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 20h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <text x="12" y="11" textAnchor="middle" fill="currentColor" fontSize="7" fontWeight="bold" fontFamily="system-ui">P</text>
    </svg>
  ),
  MongoIcon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-green-500">
      <path d="M12 2v15c-2-.5-4-4-3-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M12 17v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 9c1-3 4-5 4-5s3 2 4 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  ),
  OpenAIIcon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-green-600">
      <path d="M12 4c-1.5 0-3 1-3 3 0 .5.2 1 .5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M15 8c0-2.5-1.5-4-3-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M8 12c-2 0-3.5 1.5-3.5 3.5S6 19 8 19" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M16 12c2 0 3.5 1.5 3.5 3.5S18 19 16 19" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <circle cx="12" cy="14" r="6" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <circle cx="12" cy="14" r="2" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  LangchainIcon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-amber-600">
      <circle cx="12" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <circle cx="6" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <circle cx="18" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <line x1="12" y1="8.5" x2="7" y2="15.5" stroke="currentColor" strokeWidth="1.2" />
      <line x1="12" y1="8.5" x2="17" y2="15.5" stroke="currentColor" strokeWidth="1.2" />
      <line x1="8.5" y1="18" x2="15.5" y2="18" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  TailwindIcon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-cyan-500">
      <path d="M5 16c0-3 2-5 4-5 1 0 2 1 3 1s2-1 3-1c2 0 4 2 4 5 0 3-2 5-4 5-1 0-2-1-3-1s-2 1-3 1c-2 0-4-2-4-5z" fill="currentColor" opacity="0.5" />
      <path d="M3 10c0-3 2-5 4-5 1 0 2 1 3 1s2-1 3-1c2 0 4 2 4 5" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  ),
  ShopifyIcon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-green-600">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M6 5l1-2h10l1 2" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M8 9h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M8 13h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M8 17h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <text x="17" y="10" textAnchor="middle" fill="currentColor" fontSize="5" fontWeight="bold" fontFamily="system-ui">$</text>
    </svg>
  ),
  WordpressIcon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-blue-700">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M5 7c1-2 3-3 5-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M19 7c-1-2-3-3-5-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M7 19l3-10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M17 19l-3-10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M8 16h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  SEOIcon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-emerald-500">
      <circle cx="10" cy="10" r="5" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <line x1="14" y1="14" x2="19" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="3" y="16" width="4" height="5" rx="0.5" fill="currentColor" opacity="0.3" />
      <rect x="8" y="13" width="4" height="8" rx="0.5" fill="currentColor" opacity="0.5" />
      <rect x="13" y="10" width="4" height="11" rx="0.5" fill="currentColor" opacity="0.4" />
    </svg>
  ),
  GitIcon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-orange-600">
      <path d="M12 3L3 12l9 9 9-9-9-9z" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.3" />
      <path d="M9 9l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M15 9l-2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12 14v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  RedisIcon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-red-500">
      <path d="M4 12l8-4 8 4-8 4-8-4z" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M4 16l8 4 8-4" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M4 8l8 4 8-4" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  AWSIcon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-amber-500">
      <path d="M12 4c-2 0-4 1-5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M17 7c1.5 1 2 3 2 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M5 11c0 2 1 4 3 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M19 12c0 4-3 7-7 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M5 12c0-4 3-7 7-7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M8 9l4-3 4 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 6v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  FramerIcon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-pink-500">
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M8 10l4-4 4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 14l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};
