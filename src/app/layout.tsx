import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Next Tech Soul - Web Development & Digital Solutions",
  description:
    "Nest Tech Soul delivers innovative web development, SEO services, AI solutions, digital marketing, UI/UX design, and custom technology solutions to grow your business online.",
  keywords: [
  "web development",
  "website development",
  "custom website development",
  "professional website design",
  "web design services",
  "frontend development",
  "backend development",
  "full stack development",
  "Next.js development",
  "React.js development",
  "React development services",
  "Node.js development",
  "Laravel development",
  "PHP development",
  "WordPress development",
  "Shopify development",
  "eCommerce website development",
  "online store development",
  "mobile app development",
  "Android app development",
  "iOS app development",
  "React Native development",
  "app development company",
  "software development services",
  "custom software solutions",
  "SaaS development",
  "AI solutions",
  "AI development services",
  "artificial intelligence solutions",
  "machine learning solutions",
  "automation solutions",
  "digital marketing",
  "digital marketing agency",
  "social media marketing",
  "social media management",
  "Facebook marketing",
  "Instagram marketing",
  "Google Ads services",
  "PPC advertising",
  "SEO services",
  "SEO agency",
  "technical SEO",
  "local SEO services",
  "search engine optimization",
  "content marketing",
  "graphic design services",
  "logo design services",
  "branding services",
  "UI UX design",
  "video editing services",
  "motion graphics",
  "creative design agency",
  "website maintenance",
  "web hosting services",
  "business website solutions",
  "startup website development",
  "IT solutions company",
  "technology solutions",
  "digital agency",
  "web development company",
  "best web development company",
  "web development company Pakistan",
"web development company Karachi",
"SEO agency Pakistan",
"digital marketing agency Karachi",
"software company Pakistan",
"website developer Karachi"
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
        url: "/og-image.svg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/assets/logo.svg",
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
