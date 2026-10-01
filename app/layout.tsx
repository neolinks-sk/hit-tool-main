import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import Footer from "./components/Footer";
import { SITE_CONFIG } from "./lib/site-config";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "HITtools | 日常の手間をスグに解決する便利なWebツール",
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "料理のレシピ人数変更・調味料換算やメモ付き電卓、持ち物リストなど、日々のちょっとした手間や計算を瞬時に解決する便利Webツール集。日常生活や作業をより快適に効率化します。登録不要・完全無料で誰でも手軽に利用可能です。",
  keywords: [
    "Webツール",
    "便利ツール",
    "レシピ計算",
    "冷蔵庫",
    "ズボラ飯",
    "HITtools",
    "hit-tool",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "HITtools | 日常の手間をスグに解決する便利なWebツール",
    description:
      "料理のレシピ人数変更・調味料換算やメモ付き電卓、持ち物リストなど、日々のちょっとした手間や計算を瞬時に解決する便利Webツール集。日常生活や作業をより快適に効率化します。登録不要・完全無料で誰でも手軽に利用可能です。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} | 日常のちょっとした困りごとをすぐに解決できるWebツールポータル`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HITtools | 日常の手間をスグに解決する便利なWebツール",
    description:
      "料理のレシピ人数変更・調味料換算やメモ付き電卓、持ち物リストなど、日々のちょっとした手間や計算を瞬時に解決する便利Webツール集。日常生活や作業をより快適に効率化します。登録不要・完全無料で誰でも手軽に利用可能です。",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <head>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5640102305897046"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google Analytics (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KXFP18WL67"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KXFP18WL67');
          `}
        </Script>
      </head>
      <body className="flex min-h-full flex-col bg-slate-50 font-sans text-slate-800 isolate">
        <div className="flex flex-1 flex-col isolate">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
