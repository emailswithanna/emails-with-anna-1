import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { DisableDraftMode } from "./components/disable-draft-mode";
import { Analytics } from '@vercel/analytics/next';
import { config } from "@/config";
import { sanityFetch } from "@/sanity/lib/live";
import { SiteSettings } from "@/sanity/lib/types";
import { urlFor } from "@/sanity/lib/image";
import { METADATA_QUERY } from "@/sanity/lib/queries";

const fraunces = Fraunces({
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = (await sanityFetch({ query: METADATA_QUERY, params: {} }))?.data as SiteSettings | null;

  return {
    title: siteSettings?.title || config.title,
    description: siteSettings?.description || config.description,
    openGraph: {
      title: siteSettings?.title || config.title,
      description: siteSettings?.description || config.description,
      images: siteSettings?.image ? [urlFor(siteSettings.image).width(1200).height(630).url()] : undefined,
    },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${dmSans.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        {(await draftMode()).isEnabled && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}
        <Analytics />
      </body>
    </html>
  );
}
