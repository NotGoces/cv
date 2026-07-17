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
  title: "Pablo Abad Goldsmith CV",
  description: "Desarrollador Front-End",
  icons: {
    icon: [
      {
        url: "/projects/pag.svg",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Pablo Abad Goldsmith CV",
    description: "Desarrollador Front-End",
    url: "https://pabloabad.vercel.app/",
    siteName: "Pablo Abad Goldsmith CV",
    images: [
      {
        url: "/projects/social_preview.png",
        width: 1280,
        height: 640,
        alt: "Pablo Abad Goldsmith - CV",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pablo Abad Goldsmith CV",
    description: "Desarrollador Front-End",
    images: ["/projects/social_preview.png"],
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
      </body>
    </html>
  );
}
