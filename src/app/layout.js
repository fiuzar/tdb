import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TDBase - AI Trading Coach for Consistent Traders",
  description: "Build Discipline, track mistakes and improve performance with TDBase, your AI trading mentor that analyzes your behaviour, trade quality and rule breaking patterns",
  openGraph: {
    title: "TDBase - AI Trading Assistant for Consistent Traders",
    description: "Build Discipline, track mistakes and improve performance with TDBase, your AI trading mentor that analyzes your behaviour, trade quality and rule breaking patterns",
    url: process.env.NEXT_PUBLIC_WEBSITE_ADDRESS,
    siteName: "TDBase",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEBSITE_ADDRESS}/img/logo.png`,
        width: 1200,
        height: 630,
        alt: "TDBase Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
