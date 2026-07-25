import type { Metadata, Viewport } from "next";
import { AnalyticsRuntime } from "@/components/analytics-runtime";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://workchanged.com"),
  title: {
    default: "WorkChanged | What changed at work and what to do next",
    template: "%s | WorkChanged",
  },
  description:
    "Clear, sourced guidance on AI, job security, skills, career moves, pay, rights and managing work through change.",
  applicationName: "WorkChanged",
  authors: [{ name: "WorkChanged editorial desk", url: "/about" }],
  creator: "WorkChanged",
  publisher: "WorkChanged",
  alternates: {
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "WorkChanged",
    title: "What changed at work. Who it affects. What to do next.",
    description:
      "Independent, evidence-led guidance for experienced working professionals.",
    url: "https://workchanged.com",
    images: [
      {
        url: "/og-work-changed.jpg",
        width: 1536,
        height: 1024,
        alt: "WorkChanged editorial card about what changed at work and what to do next.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What changed at work. Who it affects. What to do next.",
    description:
      "Independent, evidence-led guidance for experienced working professionals.",
    images: ["/og-work-changed.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#173F3A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
        <SiteHeader />
        <AnalyticsRuntime />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
