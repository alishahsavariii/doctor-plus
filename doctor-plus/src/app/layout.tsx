import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ToasterComponent from "@/components/toaster/toaster.component";

import "./globals.css";
import "@/styles/typography.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "دکتر پلاس",
  description: "سامانه جستجو آنلاین دکتر و رزرو نوبت",
  manifest: "/manifest.json",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <head>
        <meta name="theme-color" content="#FFFFFF" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <p className="tagline">
          نوبت دهی پزشکی، سامانه نوبت دهی اینترنتی بیمارستان و پزشکان
        </p>
        <Footer />
        <ToasterComponent />
      </body>
    </html>
  );
}
