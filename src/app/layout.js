import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "LinksTree - Your favorite links sharing website",
  description: "We brought a revolution in link sharing.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense fallback={<div>Loading...</div>} >
          <Navbar />
        </Suspense>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
