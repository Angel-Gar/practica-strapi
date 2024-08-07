import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";
import CartProvider from "./context/CartContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader />
        <main className="container mx-auto max-w-3xl mt-4 space-y-4 px-6">
          <CartProvider>
            <Header />
            <PageTransition>{children}</PageTransition>
          </CartProvider>
        </main>
      </body>
    </html>
  );
}
