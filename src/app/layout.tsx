import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ScreeningNav from "./components/navbar/ScreeningNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Retro cinema",
  description:
    "Website for Retro cinema, where you can watch your classic film",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ScreeningNav />
        {children}
      </body>
    </html>
  );
}
