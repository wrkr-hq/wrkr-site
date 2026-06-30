import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://getwrkr.com";
const SITE_NAME = "WRKR Holding Co.";
const TITLE = "WRKR Holding Co. | Digital Public Infrastructure for Africa";
const DESCRIPTION =
  "WRKR Holding Co. builds and backs the digital public infrastructure that holds society together — payments, identity, and policy. Rooted in Africa. Working globally.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | WRKR Holding Co.",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "WRKR",
    "WRKR Holding Co.",
    "digital public infrastructure",
    "DPI",
    "Africa",
    "fintech",
    "payments infrastructure",
    "digital identity",
    "policy advisory",
    "holding company",
    "Orchestrate",
    "Piipul",
    "Slice Finance",
    "Wavepoint",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#23258c",
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: "WRKR Holding Co.",
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  image: `${SITE_URL}/opengraph-image.jpg`,
  description: DESCRIPTION,
  email: "info@getwrkr.com",
  telephone: "+1-646-631-6118",
  slogan: "Rooted in Africa. Working globally.",
  knowsAbout: [
    "Digital public infrastructure",
    "Payments",
    "Digital identity",
    "Policy advisory",
  ],
  subOrganization: [
    { "@type": "Organization", name: "Orchestrate", url: "https://orchestrate.global" },
    { "@type": "Organization", name: "Piipul", url: "https://piipul.co" },
    { "@type": "Organization", name: "Slice Finance", url: "https://slicefinance.africa" },
    { "@type": "Organization", name: "Wavepoint", url: "https://wavepoint.africa" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
