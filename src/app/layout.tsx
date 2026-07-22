import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Next Tech Soul - Web Development & Digital Solutions",
  description:
    "Next Tech Soul provides web development, SEO, AI solutions, graphic design and digital services.",
  keywords: [
    "web development",
    "SEO services",
    "Next.js development",
    "digital marketing",
    "AI solutions"
  ],
  authors: [{ name: "Next Tech Soul" }],
  openGraph: {
    title: "Next Tech Soul",
    description:
      "Professional web and digital solutions.",
    url: "https://nexttechsoul.com",
    siteName: "Next Tech Soul",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/assets/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Fraunces:ital,opsz,wght@0,9..144,400;1,9..144,400;1,9..144,500;1,9..144,600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Next Tech Soul",
              "url": "https://nexttechsoul.com",
              "logo": "https://nexttechsoul.com/logo.png"
            })
          }}
        />
      </head>
      <body>
        <div className="bg-fx"></div>
        <div className="grain"></div>
        <Header />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-TZMWQ389GW" />
      </body>
    </html>
  );
}
