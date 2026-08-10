import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { SITE } from "@/lib/constants";
import {
  JsonLd,
  graph,
  organizationSchema,
  personSchema,
  websiteSchema,
} from "@/lib/schema";
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
    default: "Zuhaib Ahmed — Full Stack Developer & AI Engineer in Sindh",
    template: "%s | Zuhaib Ahmed",
  },
  description:
    "Zuhaib Ahmed is a Full Stack Developer and AI Engineer based in Sindh, Pakistan. He builds AI systems, multi-agent automation pipelines, AI chatbots, and high-performance Next.js web applications for clients in the UK, US, and Pakistan.",
  applicationName: "Zuhaib Ahmed",
  authors: [{ name: "Zuhaib Ahmed", url: SITE.url }],
  creator: "Zuhaib Ahmed",
  publisher: "Zuhaib Ahmed",
  category: "technology",
  keywords: [
    "Zuhaib Ahmed",
    "Zuhaib Ahmed Sindh",
    "Zuhaib Ahmed based in Sindh",
    "Zuhaib Ahmed Full Stack Developer",
    "Zuhaib AI Engineer",
    "Zuhaib Ahmed AI Engineer",
    "Zuhaib Ahmed developer",
    "Full Stack Developer",
    "AI Engineer",
    "Full Stack Developer Sindh",
    "AI Engineer Sindh",
    "Full Stack Developer Pakistan",
    "AI Engineer Pakistan",
    "Next.js Developer Sindh",
    "React Developer Pakistan",
    "AI Chatbot Development",
    "AI Automation Services",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Zuhaib Ahmed",
    title: "Zuhaib Ahmed — Full Stack Developer & AI Engineer in Sindh",
    description:
      "Zuhaib Ahmed is a Full Stack Developer and AI Engineer based in Sindh, Pakistan, building AI systems, automation pipelines, and high-performance web applications for clients worldwide.",
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Zuhaib Ahmed — Full Stack Developer & AI Engineer in Sindh",
    description:
      "Zuhaib Ahmed is a Full Stack Developer and AI Engineer based in Sindh, Pakistan. AI systems, automation, and web applications for clients in the UK, US, and Pakistan.",
    creator: "@zuhaibahmed",
  },
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = graph(personSchema, organizationSchema, websiteSchema);

  return (
    <html lang="en" className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <JsonLd schema={jsonLd} />
        <LoadingScreen />
        <CustomCursor />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
