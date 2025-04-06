import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { RootProps } from "@/types/features/language";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nextjs Base Project",
  description: "Use this file when you make new projects.",
};

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<RootProps>;
  }>,
) {
  const params = await props.params;

  const { children } = props;
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
