import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { SITE } from "@/lib/constants";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Zuhaib Ahmed Based in Sindh - Full Stack Developer & AI Engineer",
    template: "%s | Zuhaib Ahmed Based in Sindh",
  },
  description: "Zuhaib Ahmed Based in Sindh — a Full Stack Developer & AI Engineer building intelligent web apps, AI chatbots, and automation systems for global clients. Expert in Next.js, React, Python, and OpenAI. Based in Sindh, Pakistan.",
  keywords: [
    "Zuhaib Ahmed Based in Sindh", "Zuhaib Ahmed", "Full Stack Developer Sindh Pakistan",
    "AI Engineer Sindh Pakistan", "Web Developer Based in Sindh",
    "Next.js Developer Pakistan", "React Developer Sindh",
    "AI Chatbot Development", "Web Application Development Sindh",
    "TypeScript Developer Pakistan", "Freelance Web Developer Sindh",
    "AI Automation Services", "Custom Web Development Pakistan",
  ],
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Zuhaib Ahmed",
    title: "Zuhaib Ahmed Based in Sindh — Full Stack Developer & AI Engineer",
    description: "Zuhaib Ahmed Based in Sindh, Pakistan — a Full Stack Developer & AI Engineer building intelligent web apps, AI chatbots, and automation systems for clients worldwide. Expertise in Next.js, React, Python, and OpenAI.",
    url: SITE.url,
    images: [{ url: "/images/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zuhaib Ahmed — Full Stack Developer & AI Engineer",
    description: "Zuhaib Ahmed Based in Sindh — Full Stack Developer & AI Engineer. Web app development, AI chatbots, automation — serving clients worldwide from Sindh, Pakistan.",
    images: ["/images/og-image.svg"],
  },
  metadataBase: new URL("https://zuhaib.aivized.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zuhaib Ahmed",
    url: "https://zuhaib.aivized.com",
    image: "https://zuhaib.aivized.com/images/og-image.svg",
    sameAs: [SITE.social.github, SITE.social.linkedin, SITE.social.twitter],
    jobTitle: ["Full Stack Developer", "AI Engineer"],
    description: SITE.description,
  };

  return (
    <html lang="en" className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LoadingScreen />
        <CustomCursor />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
