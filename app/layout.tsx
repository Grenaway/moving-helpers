import type { Metadata } from "next";
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Moving Helpers LLC | Movers in Erie PA",
  description:
    "Moving Helpers LLC provides residential moving, loading, unloading, furniture moving, and cleanout services in Erie, Pennsylvania.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
