import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { TawkTo } from "@/components/TawkTo";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Axox - Premium Software Development Company",
    template: "%s | Axox"
  },
  description: "Axox is a leading technology company specializing in custom software development, web applications, mobile apps, desktop systems, and API integrations. We build powerful software for the future.",
  keywords: [
    // Brand & General
    "axox",
    "axox technologies",
    "software development company Zimbabwe", 
    "web development Harare", 
    "technology consulting Zimbabwe",
    "IT company Africa",
    
    // Custom Software & Apps
    "mobile app development Africa", 
    "fintech app developers", 
    "custom software development",
    "API integrations", 
    "SaaS development company",
    
    // Web & E-commerce
    "e-commerce website development",
    "Tuck no-code builder",
    "professional website design Harare",
    
    // POS & Retail Systems
    "POS system for sale",
    "point of sale software Zimbabwe",
    "retail management systems",
    "inventory management software",
    
    // ERPs & Business Management
    "custom ERP solutions", 
    "enterprise resource planning software",
    "accounting software integrations",
    "HR management systems (HRMS)",
    "customer relationship management (CRM) development",
    
    // Finance & Loan Management
    "loan management system software", 
    "microfinance software solutions",
    "credit scoring systems",
    "payment gateway integration",
    
    // Industry Specific
    "healthcare management software",
    "real estate property management software",
    "food traceability software",
    "smart metering software energy"
  ],
  authors: [{ name: "Axox Technologies" }],
  openGraph: {
    title: "Axox - Build smarter with Axox Technologies. We provide custom software, web and mobile app development, ERP solutions, and digital services for businesses in Zimbabwe.",
    description: "We build powerful software for the future. Custom systems, web & mobile apps, APIs, and more.",
    type: "website",
    url: "https://axox.com",
    images: ["https://i.ibb.co/n813PQcJ/AXOX-TECHNOLOGIES-1.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@axox",
    title: "Axox - Premium Software Development Company",
    description: "We build powerful software for the future.",
    images: ["https://i.ibb.co/n813PQcJ/AXOX-TECHNOLOGIES-1.png"],
  },
};

import { Layout } from "@/components/layout/Layout";

// ... imports ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased bg-background text-foreground`}>
        <Providers>
          <Layout>{children}</Layout>
          <TawkTo />
        </Providers>
      </body>
    </html>
  );
}
