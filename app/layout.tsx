import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sans = localFont({
  src: [
    {
      path: "./fonts/manrope-latin-wght-normal.woff2",
      weight: "200 800",
      style: "normal",
    },
    {
      path: "./fonts/manrope-cyrillic-wght-normal.woff2",
      weight: "200 800",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});
const editorial = localFont({
  src: [
    {
      path: "./fonts/cormorant-garamond-latin-500-italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/cormorant-garamond-cyrillic-500-italic.woff2",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-editorial",
  display: "swap",
});
const title = "Юлиана Старостина — Content & Creative Specialist";
const description =
  "Контент, креатив и продуктовые смыслы. Кейсы Me&Me, ЛЮМИ, персонального продвижения и проектной работы. От идеи до реализации и аналитики.";
const siteUrl =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "Юлиана Старостина" }],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    type: "website",
    locale: "ru_RU",
    siteName: "Юлиана Старостина · Portfolio",
    images: [{ url: "/share.jpg", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/share.jpg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
};
export const viewport: Viewport = {
  themeColor: "#f5f2ea",
  colorScheme: "light",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${sans.variable} ${editorial.variable}`}>
        {children}
      </body>
    </html>
  );
}
