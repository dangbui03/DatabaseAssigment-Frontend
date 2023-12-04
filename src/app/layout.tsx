import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/Header";
import { Averia_Serif_Libre } from "next/font/google";
import MovieScreeningContextProvider from "./context/MovieScreeningContextProvider";

const averia = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
  variable: "--font-averia",
});

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
    <html lang="en" className={`${averia.variable}`}>
      <body className="flex">
        <MovieScreeningContextProvider>
          <Header />
          {children}
        </MovieScreeningContextProvider>
      </body>
    </html>
  );
}
