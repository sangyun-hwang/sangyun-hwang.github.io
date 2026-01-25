import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  BASE_URL,
  DESCRIPTION,
  OPEN_GRAHPH_IMAGE_NAME,
  SITE_NAME,
} from "@/shared/config/constant";
import "./globals.css";
import { Header } from "@/shared/common-ui/header";

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
    default: SITE_NAME,
    template: `%s - ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: SITE_NAME,
    description: DESCRIPTION,
    url: BASE_URL,
    type: "website",
    siteName: `${SITE_NAME}`,
    images: {
      url: `${BASE_URL}/${OPEN_GRAHPH_IMAGE_NAME}`,
      alt: "description of the blog site",
      width: 1200,
      height: 600,
    },
  },
  twitter: {
    card: "summary",
    site: BASE_URL,
    title: SITE_NAME,
    description: DESCRIPTION,
    images: {
      url: `${BASE_URL}/${OPEN_GRAHPH_IMAGE_NAME}`,
      alt: "description of the blog site",
      width: 1200,
      height: 600,
    },
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
