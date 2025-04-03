import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Partei der Steuerverteilgerechtigkeit",
  description:
    "Steuerverteilung in Bürgerhand - Jeder Bürger erhält ein gleiches Recht, über die Verteilung der Steuergelder in Deutschland mitzuentscheiden.",
  keywords: [
    "Steuerverteilung",
    "Direkte Demokratie",
    "Transparenz",
    "Bürgerbeteiligung",
    "Steuerdemokratie",
  ],
  authors: [{ name: "Partei der Steuerverteilgerechtigkeit" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
