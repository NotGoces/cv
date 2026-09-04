import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
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
  metadataBase: new URL("https://pabloabad.vercel.app"),
  title: "Pablo Abad Goldsmith | Front-End & Full-Stack Developer",
  description: "Professional portfolio and CV of Pablo Abad Goldsmith. Front-End Developer specializing in building modern web applications with React, Next.js, TypeScript, and Tailwind CSS.",
  keywords: ["Pablo Abad Goldsmith", "Front-End Developer", "Full-Stack Developer", "Web Developer", "React", "Next.js", "TypeScript", "CV", "Portfolio"],
  authors: [{ name: "Pablo Abad Goldsmith" }],
  creator: "Pablo Abad Goldsmith",
  // 1. Verificación automática para Google Search Console
  verification: {
    google: "N58a7Z1TUDHtTtEJA5Flq7rex5fH7WUcv8UHQ4ROBmM",
  },
  // 2. Definición explícita de URL canónica
  alternates: {
    canonical: "/",
  },

  // 3. Control explícito de bots de búsqueda
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
  icons: {
    icon: [
      {
        url: "/projects/pag.svg",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Pablo Abad Goldsmith | Front-End & Full-Stack Developer",
    description: "Explore the professional portfolio of Pablo Abad Goldsmith. Modern web projects, interactive applications, and efficient software engineering solutions.",
    url: "https://pabloabad.vercel.app",
    siteName: "Pablo Abad Goldsmith CV",
    images: [
      {
        url: "/projects/socialpreview.png",
        width: 1280,
        height: 640,
        alt: "Pablo Abad Goldsmith - CV & Professional Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pablo Abad Goldsmith | Front-End Developer",
    description: "Professional portfolio and CV of Pablo Abad Goldsmith. Front-End Developer specializing in React, Next.js, and TypeScript.",
    images: ["/projects/socialpreview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}