import type { Metadata } from "next";
import "./globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "GreenScape Landscaping",
  url: "https://landscaping-landing-leovaldi64.vercel.app",
  description:
    "Professional lawn care, landscape design, tree services, irrigation systems, and hardscaping. 15+ years experience.",
  image: "/og-image.png",
  telephone: "(555) 123-4567",
  email: "info@greenscapelandscaping.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Riverside Heights",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "500",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://landscaping-landing-leovaldi64.vercel.app"),
  title: "GreenScape Landscaping | Lawn Care & Design",
  description:
    "Professional lawn care, landscape design, tree services, irrigation, and hardscaping. 15+ years experience. Free estimates!",
  keywords:
    "landscaping, lawn care, landscape design, tree service, irrigation, hardscaping, gardening, outdoor living",
  alternates: {
    canonical: "https://landscaping-landing-leovaldi64.vercel.app",
  },
  openGraph: {
    title: "GreenScape Landscaping | Transform Your Outdoor Space",
    description:
      "Professional landscaping services including lawn care, landscape design, and hardscaping. 15+ years experience. Free estimates!",
    url: "https://landscaping-landing-leovaldi64.vercel.app",
    siteName: "GreenScape Landscaping",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GreenScape Landscaping - Professional Lawn Care and Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenScape Landscaping | Lawn Care & Design",
    description:
      "Professional landscaping services. 15+ years experience. Free estimates!",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
