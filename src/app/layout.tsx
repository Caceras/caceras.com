import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riki Caceras - AI- & Marknadsföringskonsult",
  description: "AI- & Marknadsföringskonsult. 4+ år som konsult inom digital marknadsföring.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white text-black dark:bg-zinc-950 dark:text-zinc-50`}
      >
        <div className="max-w-2xl mx-auto py-12 px-6">
          {children}
          <footer className="mt-16 text-sm text-zinc-500 dark:text-zinc-400">
            <p>© {new Date().getFullYear()} Riki Caceras</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
