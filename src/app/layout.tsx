import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import QueryProvider from "@/components/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "WalletWise Events",
    template: "%s | WalletWise Events",
  },
  description:
    "Buy tickets to WalletWise programs, workshops, and events designed to help individuals and businesses grow financially and digitally.",

  keywords: [
    "WalletWise",
    "WalletWise events",
    "buy event tickets",
    "finance workshops",
    "business programs",
    "financial literacy events",
    "Nigeria tech events",
  ],

  authors: [{ name: "WalletWise Team" }],

  openGraph: {
    title: "WalletWise Events",
    description:
      "Get tickets to WalletWise programs, workshops, and exclusive events focused on financial growth and digital innovation.",
    url: "https://events.walletwise.ng",
    siteName: "WalletWise Events",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WalletWise Events",
    description:
      "Secure your ticket to WalletWise programs, workshops, and events.",
  },

  metadataBase: new URL("https://events.walletwise.ng"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
          <Toaster />
        </body>
      </QueryProvider>
    </html>
  );
}
