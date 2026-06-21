import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SEO_CONFIG } from "@/lib/seo-config";
import { JsonLd } from "@/components/seo/json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090D14" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.siteUrl),
  title: {
    default: SEO_CONFIG.siteName,
    template: SEO_CONFIG.titleTemplate,
  },
  description: SEO_CONFIG.description,
  keywords: SEO_CONFIG.keywords,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SEO_CONFIG.siteUrl,
    siteName: SEO_CONFIG.siteName,
    title: SEO_CONFIG.siteName,
    description: SEO_CONFIG.description,
    images: [
      {
        url: "/sudipta-das, shiningsudipto, sit-1.png",
        width: 1200,
        height: 630,
        alt: SEO_CONFIG.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.siteName,
    description: SEO_CONFIG.description,
    images: ["/sudipta-das, shiningsudipto, sit-1.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const graphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SEO_CONFIG.siteUrl}/#person`,
      name: SEO_CONFIG.author,
      jobTitle: "Full Stack Engineer",
      url: SEO_CONFIG.siteUrl,
      email: SEO_CONFIG.email,
      telephone: SEO_CONFIG.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barishal",
        addressCountry: "Bangladesh",
      },
      sameAs: [SEO_CONFIG.socials.github, SEO_CONFIG.socials.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": `${SEO_CONFIG.siteUrl}/#website`,
      name: SEO_CONFIG.siteName,
      url: SEO_CONFIG.siteUrl,
      description: SEO_CONFIG.description,
      publisher: { "@id": `${SEO_CONFIG.siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={graphSchema} />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
