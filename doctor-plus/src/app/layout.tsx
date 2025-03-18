import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
}); 
export const metadata: Metadata = {
  title: "دکتر پلاس",
  description: "سامانه جستجو آنلاین دکتر و رزرو آنلاین",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>{children}</body>
    </html>
  );
}
