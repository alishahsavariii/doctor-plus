import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "دکتر پلاس",
  description: "سامانه جستجو آنلاین دکتر و رزرو نوبت",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>
        <Header />
        <main>{children}</main>
        <p className="tagLine">نوبت دهی پزشکی، سامانه نوبت دهی اینترنتی بیمارستان و پزشکان</p>
        <Footer />
      </body>
    </html>
  );
}
