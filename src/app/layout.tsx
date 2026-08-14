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
    "software development company Zimbabwe", 
    "web development Harare", 
    "custom ERP solutions", 
    "loan management system software", 
    "fintech app developers", 
    "mobile app development Africa", 
    "API integrations", 
    "e-commerce website development",
    "technology consulting Zimbabwe",
    "axox",
    "axox technologies"
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
