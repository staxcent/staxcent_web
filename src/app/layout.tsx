import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://staxcent.example"),
  title: { default: "Staxcent | Digital products, built to scale", template: "%s | Staxcent" },
  description: "Staxcent designs and builds web applications, SaaS platforms, and custom software for ambitious teams.",
  openGraph: { title: "Staxcent | Digital products, built to scale", description: "We design and build web applications that solve real business problems.", type: "website" },
  twitter: { card: "summary_large_image", title: "Staxcent | Digital products, built to scale", description: "We design and build web applications that solve real business problems." },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body><a className="skip-link" href="#main">Skip to content</a>{children}</body>
    </html>
  );
}
