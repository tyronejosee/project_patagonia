import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "The Cabins | Cabañas en Malalcahuello",
  description:
    "Rodeadas de volcanes, parques nacionales y termas, ofrecemos un servicio de primer nivel, ideal para desconectar y disfrutar todo el año en Malalcahuello - Chile.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col font-sans">
          <Header />
          {children}
          <Footer />
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
