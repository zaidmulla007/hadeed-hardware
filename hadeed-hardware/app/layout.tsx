import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import ClientLoader from "./components/ClientLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hadeed Hardware & Tools Trading LLC | Dubai UAE",
  description:
    "Trusted supplier of hardware, industrial tools, safety equipment, and building materials in Dubai, UAE. Power tools, hand tools, welding equipment, safety gear from top global brands.",
  keywords:
    "hardware dubai, industrial tools, safety equipment, building materials, power tools, welding, Deira Dubai, Hadeed Hardware",
  icons: {
    icon: "/favicon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLoader />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
