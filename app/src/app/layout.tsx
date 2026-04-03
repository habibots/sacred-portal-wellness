import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Sacred Portal Wellness",
  description: "Holistic wellness and yoni steaming products for women's health",
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
