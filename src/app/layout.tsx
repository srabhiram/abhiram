import type { Metadata } from "next";
import Head from 'next/head';
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Abhiram Portfolio",
  description: "A Full stack web developer from Hyderabad, India.",
  icons: {
    icon: "/new-icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

  return (
    <html lang="en" className={cx(GeistSans.variable, GeistMono.variable)}>
      <Head>
        <meta
          name="google-site-verification"
          content="iTIYemNM9tmUoVmVehyjWg3N6_Cp2ghX5Y9MTskeE3I"
        />
      </Head>
      <body
        className={` antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-4 lg:mx-auto`}
      >
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Nav />
          {children}
          <Footer />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
