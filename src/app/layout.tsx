import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import cn from "classnames";

import Footer from "@/app/_components/footer";
import { BASE_URL, HOME_OG_IMAGE_URL } from "@/lib/constants";

import "./globals.css";

const plexMono = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `Interweb Alchemy`,
  description: `Transmuting the Web.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
  metadataBase: new URL(BASE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css" />
      </head>
      <body className={cn(plexMono.className, "dark:bg-slate-900 dark:text-slate-400")}>
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
      <script async defer src="https://www.recurse-scout.com/loader.js?t=1b9ee5f39bb35af1073bda78cf4cabdf"></script>
    </html>
  );
}
