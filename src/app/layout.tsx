import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsentBanner from "@/components/ConsentBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const LOGO_URL = "https://ik.imagekit.io/ib9n0o3ps/only%20logo.png?updatedAt=1770716238806";
const SITE_URL = "https://blog.compliyug.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CompliYUG Intelligence Hub | DPDP Act 2023 Compliance",
    template: "%s | CompliYUG Intelligence Hub",
  },
  description:
    "India's leading RegTech intelligence hub for DPDP Act 2023 compliance. Expert insights on data breach reporting, Rule 7(2)(b), sectoral governance, and strategic automation for the Digital YUG.",
  keywords: [
    "DPDP Act 2023",
    "data protection compliance India",
    "Digital Personal Data Protection",
    "data breach reporting",
    "Rule 7(2)(b)",
    "compliance automation",
    "CISO India",
    "cybersecurity India",
    "RegTech India",
    "CompliYUG",
    "BreachBlitz",
    "data fiduciary",
    "DPB India",
  ],
  authors: [{ name: "CompliYUG Research", url: SITE_URL }],
  creator: "CompliYUG",
  publisher: "CompliYUG Operations",
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
    icon: [
      { url: LOGO_URL, type: "image/png" },
    ],
    apple: LOGO_URL,
    shortcut: LOGO_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "CompliYUG Intelligence Hub",
    title: "CompliYUG Intelligence Hub | DPDP Act 2023 Compliance",
    description:
      "Strategic governance, DPDP compliance, and sectoral mapping for the Digital YUG. Expert insights for CISOs, compliance officers, and data fiduciaries.",
    images: [
      {
        url: LOGO_URL,
        width: 1200,
        height: 630,
        alt: "CompliYUG Intelligence Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CompliYUG Intelligence Hub | DPDP Act 2023 Compliance",
    description:
      "Strategic governance, DPDP compliance, and sectoral mapping for the Digital YUG.",
    images: [LOGO_URL],
    creator: "@compliyug",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CompliYUG Intelligence Hub",
  url: SITE_URL,
  description:
    "India's leading DPDP Act 2023 compliance intelligence hub for CISOs, compliance officers, and data fiduciaries.",
  publisher: {
    "@type": "Organization",
    name: "CompliYUG",
    url: "https://www.compliyug.com",
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ConsentBanner />
      </body>
    </html>
  );
}
