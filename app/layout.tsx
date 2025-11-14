import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Hindi Sleep Stories Channel Blueprint",
  description:
    "Actionable strategy, storytelling systems, and production workflows to grow a Hindi moral sleep stories YouTube channel.",
  metadataBase: new URL("https://agentic-7f0faad4.vercel.app"),
  openGraph: {
    title: "Hindi Sleep Stories Channel Blueprint",
    description:
      "Actionable strategy, storytelling systems, and production workflows to grow a Hindi moral sleep stories YouTube channel.",
    url: "https://agentic-7f0faad4.vercel.app",
    siteName: "Moral Story Sleep Domination",
    images: [
      {
        url: "https://dummyimage.com/1200x630/0b102b/ffe3a1.png&text=Hindi+Sleep+Stories+Blueprint",
        width: 1200,
        height: 630,
        alt: "Hindi Sleep Stories Strategy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@sleepstorycoach",
    creator: "@sleepstorycoach",
    title: "Hindi Sleep Stories Channel Blueprint",
    description:
      "Actionable strategy, storytelling systems, and production workflows to grow a Hindi moral sleep stories YouTube channel.",
    images: [
      "https://dummyimage.com/1200x630/0b102b/ffe3a1.png&text=Hindi+Sleep+Stories+Blueprint"
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
