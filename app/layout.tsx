import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://workchanged.com"),
  title: {
    default: "Work Changed — Know what AI means for your job",
    template: "%s | Work Changed",
  },
  description:
    "Practical, role-specific intelligence about how AI is changing work, tools, tasks and skills.",
  applicationName: "Work Changed",
  authors: [{ name: "Work Changed", url: "https://workchanged.com/about" }],
  creator: "Work Changed",
  publisher: "Work Changed",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Work Changed",
    title: "Work Changed — Know what AI means for your job",
    description:
      "Clear, tested guidance on which tasks, tools and skills matter for your role — without the hype.",
    url: "https://workchanged.com",
    images: [
      {
        url: "/og-work-changed.png",
        width: 1731,
        height: 909,
        alt: "Work Changed — AI is changing your job. Know what to do next.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Changed — Know what AI means for your job",
    description:
      "Clear, tested guidance on which tasks, tools and skills matter for your role — without the hype.",
    images: ["/og-work-changed.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1020",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
