import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.enzohiu.com"),
  title: "Enzo Hiu — Software & Product",
  description:
    "Enzo Hiu is a computer science student at Cornell. View projects for study room reservations, campus fitness, collection tracking, and job applications.",
  openGraph: {
    title: "Enzo Hiu — Software & Product",
    description: "Web and iOS projects by Enzo Hiu, a computer science student at Cornell. Apps for campus services, collection tracking, studying, and job applications.",
    url: "/",
    siteName: "Enzo Hiu",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
