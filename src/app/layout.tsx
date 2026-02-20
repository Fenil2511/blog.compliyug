import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsentBanner from "@/components/ConsentBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CompliYUG Intelligence Hub | DPDP Act 2023 Compliance",
  description: "Leading RegTech for DPDP Act 2023 compliance. Advanced insights on data breach reporting, Rule 7(2)(b), and strategic governance for the Digital YUG.",
  icons: {
    icon: "https://ik.imagekit.io/ib9n0o3ps/only%20logo.png?updatedAt=1770716238806",
    apple: "https://ik.imagekit.io/ib9n0o3ps/only%20logo.png?updatedAt=1770716238806",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
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



