import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import RoamingAlien from "@/components/RoamingAlien";

import NavBar from "@/components/NavBar";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hack Rust Course",
  description: "Learn Rust the fun way with interactive lessons.",
};

import { CourseProvider } from "@/lib/context/course-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${robotoMono.variable} antialiased`} suppressHydrationWarning>
        <CourseProvider>
          <CustomCursor />
          <NavBar />
          <RoamingAlien />
          {children}
          <SpeedInsights />
        </CourseProvider>
      </body>
    </html>
  );
}
