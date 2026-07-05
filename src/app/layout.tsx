import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import "./globals.css";
import MotionBackgroundElegant from "@/components/MotionBackgroundElegant";
import Footer from "@/components/Footer";

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
  title: { default: "Jesus Vazquez | Software Engineer", template: "%s | Jesus Vazquez" },
  description: "Software Engineer / IT Assistant at PDR building C#/.NET internal applications, APIs, and Dynamics 365 Business Central workflows.",
  keywords: ["Jesus Vazquez", "Software Engineer", "C#", ".NET", "Linux", "Dynamics 365 Business Central", "Full-Stack Developer"],
  applicationName: "Jesus Vazquez Portfolio",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Grammarly and similar extensions inject attributes before React hydrates.
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MotionBackgroundElegant>
          <div className="relative z-10">
            <Navbar />
            {children}
            <Footer />
          </div>
        </MotionBackgroundElegant>
      </body>
    </html>
  );
}
