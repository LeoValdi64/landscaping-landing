import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GreenScape Landscaping | Professional Lawn Care & Landscape Design",
  description: "Transform your outdoor space with GreenScape Landscaping. Professional lawn care, landscape design, tree services, irrigation systems, and hardscaping. Free estimates!",
  keywords: "landscaping, lawn care, landscape design, tree service, irrigation, hardscaping, gardening, outdoor living",
  openGraph: {
    title: "GreenScape Landscaping | Transform Your Outdoor Space",
    description: "Professional landscaping services including lawn care, landscape design, and hardscaping. 15+ years experience. Free estimates!",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
