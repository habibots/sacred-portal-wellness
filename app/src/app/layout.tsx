import type { Metadata, Viewport } from "next";
import { Inter, Cinzel_Decorative } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartProvider } from "@/lib/cart/context";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-cinzel",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sacredportalwellness.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1B5E20",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sacred Portal Wellness — Small Batch Herbal Medicine & Female Wellness Coaching",
    template: "%s | Sacred Portal Wellness",
  },
  description:
    "Hand-crafted yoni steam herbs, salves, and yoni steam seats. Holistic nurse coaching for women's hormonal, cycle, digestive, and emotional wellness with Amber Rodriguez, RN, BSN, HNB-BC.",
  keywords: [
    "yoni steaming",
    "yoni steam herbs",
    "yoni steam seat",
    "herbal medicine",
    "female wellness coaching",
    "holistic nurse coach",
    "women's health",
    "menstrual wellness",
    "postpartum healing",
    "Sacred Portal Wellness",
    "Amber Rodriguez",
    "San Diego wellness",
  ],
  authors: [{ name: "Amber Rodriguez" }],
  creator: "Sacred Portal Wellness",
  publisher: "Sacred Portal Wellness",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Sacred Portal Wellness",
    title: "Sacred Portal Wellness — Small Batch Herbal Medicine & Female Wellness Coaching",
    description:
      "Hand-crafted yoni steam herbs, salves, and yoni steam seats. Holistic nurse coaching for women's hormonal, cycle, digestive, and emotional wellness.",
    images: [
      {
        url: "/images/logo-wellness.png",
        width: 600,
        height: 600,
        alt: "Sacred Portal Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sacred Portal Wellness",
    description:
      "Hand-crafted yoni steam herbs, salves, and yoni steam seats. Holistic nurse coaching for women's wellness.",
    images: ["/images/logo-wellness.png"],
  },
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
    icon: "/favicon.ico",
    apple: "/images/logo-main.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzelDecorative.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <CartProvider>
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
