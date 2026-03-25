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
    // Brand
    "CompliYUG", "CompliYUG blog", "CompliYUG intelligence hub",
    // Product
    "BreachBlitz", "DPDP compliance automation", "data breach automation India",
    // Act / Regulation
    "DPDP Act 2023", "Digital Personal Data Protection Act", "DPDP Rules 2025",
    "data protection law India", "India privacy law 2023", "data fiduciary India",
    "data processor India", "Data Protection Board India",
    // Compliance intent
    "Rule 7(2)(b)", "72 hour breach reporting", "data breach notification India",
    "vendor compliance DPDP", "DPDP compliance checklist",
    "data processing agreement India", "DPA India",
    // Sector
    "DPDP banking compliance", "BFSI data protection",
    "healthcare data privacy India", "EdTech DPDP compliance",
    "e-commerce consent management India",
    // Role-based intent
    "CISO India", "compliance officer India", "DPO India",
    "RegTech India", "cybersecurity compliance India",
    // Penalty intent
    "₹250 crore DPDP penalty", "DPDP penalty for banks",
    // Technical
    "log retention DPDP", "data erasure DPDP", "data principal rights India",
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CompliYUG",
  alternateName: "CompliYUG Intelligence Hub",
  url: "https://www.compliyug.com",
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: 512,
    height: 512,
  },
  description:
    "India's leading RegTech company providing DPDP Act 2023 compliance automation, BreachBlitz breach reporting engine, and sectoral governance solutions for CISOs and data fiduciaries.",
  sameAs: [
    "https://linktr.ee/compliyug",
    "https://blog.compliyug.com",
  ],
  knowsAbout: [
    "DPDP Act 2023",
    "Data Protection Compliance",
    "Cybersecurity Governance",
    "RegTech",
    "Data Breach Reporting",
  ],
  areaServed: {
    "@type": "Country",
    name: "India",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <link rel="canonical" href={SITE_URL} />
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
