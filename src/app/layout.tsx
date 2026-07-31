import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import HeaderHero from "@/components/HeaderHero";
import Footer from "@/components/Footer";
import Script from "next/script";

// Fallbacks temporários para Canela e Neue Haas Unica
const displayFontFallback = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sansFontFallback = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://almaristrade.com"),
  title: {
    default: "Almaris International Trade | Fornecimento Consistente. Alcance Global.",
    template: "%s | Almaris International Trade"
  },
  description: "Empresa brasileira de comércio internacional fundada em 2016. Operação B2B ponta a ponta em commodities agrícolas, alimentos e matérias-primas naturais.",
  keywords: ["comércio internacional", "trading brasileira", "pimenta preta exportação", "café arábica conilon", "farelo de soja 46", "rochas ornamentais", "commodities agrícolas"],
  authors: [{ name: "Almaris International Trade" }],
  creator: "Almaris International Trade",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://almaristrade.com",
    siteName: "Almaris International Trade",
    title: "Almaris International Trade | Fornecimento Consistente. Alcance Global.",
    description: "Operação comercial B2B ponta a ponta no comércio internacional de commodities agrícolas, alimentos e materiais naturais.",
    images: [
      {
        url: "/assets/images/hero-port.png",
        width: 1200,
        height: 630,
        alt: "Almaris International Trade - Porto e Logística Global"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Almaris International Trade",
    description: "Fornecimento Consistente. Alcance Global."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${displayFontFallback.variable} ${sansFontFallback.variable} ${montserrat.variable}`}>
      <body className="antialiased font-interface flex flex-col min-h-screen">
        <div id="google_translate_element" style={{ opacity: 0, position: 'absolute', zIndex: -1, width: '1px', height: '1px', overflow: 'hidden' }}></div>
        <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                { pageLanguage: 'pt', autoDisplay: false },
                'google_translate_element'
              );
            }
          `}
        </Script>
        <HeaderHero />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
