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

export const metadata = {
  title: "HDev - Crash Course",
  description: "Build, Innovate & Elevate your Skills to the Next Level.",
  keywords: 'next.js, web development, free, development, website, creating, create',
  icons: {
    icon: '/IMG_20250415_155941.png', // Path to the favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/IMG_20250415_155941.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
