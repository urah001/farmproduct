import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/ui/cart-provider";
import Header from "@/components/ui/header";
//import Footer from "@/components/ui/footer";
{/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/}

export const metadata: Metadata = {
  title: "FarmerHome",
  description: "univendor farmer ecommerce site ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (
    <html lang="en">
      <body
       // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            {children}
            {/* <Footer /> */}
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
