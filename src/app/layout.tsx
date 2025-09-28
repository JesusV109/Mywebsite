import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import "./globals.css";
import MotionBackgroundElegant from "@/components/MotionBackgroundElegant";
import { LazyMotion, domAnimation } from "framer-motion";

// Define custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jesus Vazquez Portfolio",
  description: "Portfolio website of Jesus Vazquez",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrap everything in LazyMotion */}
        <LazyMotion features={domAnimation}>
          {/* Background applied globally */}
          <MotionBackgroundElegant>
            {/* Foreground content */}
            <div className="relative z-10">
              <Navbar />
              {children}
              <footer className="text-center py-6 text-sm text-gray-400">
                © {new Date().getFullYear()} Jesus Vazquez · Built with Next.js & Tailwind
              </footer>
            </div>
          </MotionBackgroundElegant>
        </LazyMotion>
      </body>
    </html>
  );
}
