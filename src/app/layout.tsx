import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rainbow Aura Quartz Necklace | ARVO STUDIO",
  description:
    "Rainbow Aura Quartz Necklace with a colorful crystal design and copper wrap. Shop now with free US shipping.",
  keywords: [
    "rainbow aura quartz",
    "crystal necklace",
    "chakra jewelry",
    "copper wrap pendant",
    "ARVO STUDIO",
  ],
  authors: [{ name: "ARVO STUDIO" }],
  openGraph: {
    title: "Rainbow Aura Quartz Necklace | ARVO STUDIO",
    description:
      "Rainbow Aura Quartz Necklace with a colorful crystal design and copper wrap. Shop now with free US shipping.",
    type: "website",
    siteName: "ARVO STUDIO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rainbow Aura Quartz Necklace | ARVO STUDIO",
    description:
      "Rainbow Aura Quartz Necklace with a colorful crystal design and copper wrap. Shop now with free US shipping.",
  },
};

export const viewport = {
  themeColor: "#0b0512",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased bg-onyx text-foreground overflow-x-hidden`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
