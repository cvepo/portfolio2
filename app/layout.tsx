import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted (latin subsets from Google Fonts) so builds don't depend on fetching them.
const fraunces = localFont({
  src: [
    { path: "./fonts/fraunces.woff2", weight: "400 600", style: "normal" },
    { path: "./fonts/fraunces-italic.woff2", weight: "400 600", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/inter.woff2",
  weight: "400 500",
  variable: "--font-inter",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "./fonts/plex-mono-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/plex-mono-500.woff2", weight: "500", style: "normal" },
  ],
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
