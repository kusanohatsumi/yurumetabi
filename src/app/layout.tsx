import Header_main from "@/feature/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PR from "@/feature/PR";
import Menu from "@/feature/menu";
import Head from "next/head";
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
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GMAPS_API_KEY;
  return (
    <html lang="ja">
      {/* <Head>
        {googleMapsApiKey && (
          <script
            async
            src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&callback=console.debug&libraries=maps,marker&v=beta"
          />
        )}
      </Head> */}
      <body>
        <Header_main params="main" />
        <main className="relative">
          {children}
          <Menu />
        </main>
        <PR />
      </body>
    </html>
  );
}
