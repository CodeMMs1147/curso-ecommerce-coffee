import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeMMs Ecommerce",
  description: "Welcome to my websinte using Next.js 14 Designed for an coffee e-commerce, thanks and have a good day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={urbanist.className}>
        <Navbar />
        {children}
      </body>

    </html>
  );
}
