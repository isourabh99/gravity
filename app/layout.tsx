import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import UniversalLoaderWrapper from "@/components/loader/UniversalLoaderWrapper";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mg12Bold = localFont({
  src: "./fonts/mg12-bold.woff2",
  variable: "--font-mg12-bold",
  display: "swap",
});

const mg12Regular = localFont({
  src: "./fonts/mg12-regular.woff2",
  variable: "--font-mg12-regular",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gravity",
  description: "The Benchmark Of Innovation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${mg12Bold.variable} ${mg12Regular.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <SmoothScrollProvider>
          <UniversalLoaderWrapper>
            {children}
          </UniversalLoaderWrapper>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}


