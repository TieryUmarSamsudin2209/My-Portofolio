import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NProgressProvider from "./components/LoadingBar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Portofolio - Tiery Umar Samsudin",
    template: "%s | Website Portofolio Tiery Umar Samsudin"
  },
  icons: {
    icon: "/favicon-portofolio-website.svg"
  },
  description: "Explore the web portfolio of Tiery Umar Samsudin, a professional front-end developer. He delivers interactive web design solutions using HTML, CSS, JavaScript, and React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <NProgressProvider>
          {children}
        </NProgressProvider>
      </body>
    </html>
  );
}
