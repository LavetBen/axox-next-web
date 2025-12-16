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
  title: "Axox - Premium Software Development Company",
  description: "Axox is a leading technology company specializing in custom software development, web applications, mobile apps, desktop systems, and API integrations. We build powerful software for the future.",
  keywords: ["software development", "web development", "mobile apps", "custom systems", "API development", "technology consulting"],
  authors: [{ name: "Axox" }],
  openGraph: {
    title: "Axox - Premium Software Development Company",
    description: "We build powerful software for the future. Custom systems, web & mobile apps, APIs, and more.",
    type: "website",
    url: "https://axox.com",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@axox",
    title: "Axox - Premium Software Development Company",
    description: "We build powerful software for the future.",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
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
      <body className={`${montserrat.variable} font-montserrat antialiased`}>
        <Providers>
          <Layout>{children}</Layout>
          <TawkTo />
        </Providers>
      </body>
    </html>
  );
}
