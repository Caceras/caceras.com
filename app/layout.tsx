import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Riki Caceras - AI & Marknadsföringskonsult | SEO Expert",
  description:
    "Riki Caceras är en erfaren AI- & Marknadsföringskonsult med 4+ års erfarenhet inom digital marknadsföring, SEO, och webbutveckling. 150+ nöjda kunder.",
  keywords: [
    "Riki Caceras",
    "AI konsult",
    "marknadsföringskonsult",
    "SEO expert",
    "digital marknadsföring",
    "Stockholm SEO",
    "Pineberry",
    "webbutveckling",
    "sökmotoroptimering",
    "AI automation",
  ],
  authors: [{ name: "Riki Caceras", url: "https://caceras.com" }],
  creator: "Riki Caceras",
  publisher: "Riki Caceras",
  alternates: {
    canonical: "https://caceras.com",
  },
  openGraph: {
    type: "profile",
    locale: "sv_SE",
    url: "https://caceras.com",
    title: "Riki Caceras - AI & Marknadsföringskonsult",
    description:
      "AI- & Marknadsföringskonsult med 4+ års erfarenhet inom digital marknadsföring och SEO. 150+ nöjda kunder.",
    siteName: "Riki Caceras Portfolio",
    images: [
      {
        url: "/images/riki.png",
        width: 1200,
        height: 630,
        alt: "Riki Caceras - AI & Marketing Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riki Caceras - AI & Marknadsföringskonsult",
    description: "AI- & Marknadsföringskonsult med 4+ års erfarenhet inom digital marknadsföring och SEO",
    creator: "@RikiCaceras",
    images: ["/images/riki.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sv" className={`${inter.variable} antialiased`}>
      <head>
        <meta name="author" content="Riki Caceras" />
        <meta name="geo.region" content="SE-AB" />
        <meta name="geo.placename" content="Hägersten, Stockholm" />
        <link rel="me" href="https://github.com/Caceras" />
        <link rel="me" href="https://linkedin.com/in/caceras" />
        <link rel="me" href="https://x.com/RikiCaceras" />
      </head>
      <body>
        {children}
        <Script src="https://cse.google.com/cse.js?cx=b3594773bbee7436a" strategy="afterInteractive" />
      </body>
    </html>
  )
}
