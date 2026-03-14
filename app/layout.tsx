import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Jordin Lissone | Cyber Risk & Data Privacy Professional",
  description:
    "Portfolio of Jordin Lissone, M.S. -- Cyber Risk & Regulatory Associate at PwC specializing in Data Risk & Privacy. Based in New York / Connecticut.",
  keywords: [
    "Jordin Lissone",
    "Cybersecurity",
    "Data Privacy",
    "PwC",
    "Risk Management",
    "NIST",
    "GDPR",
    "CCPA",
  ],
  openGraph: {
    title: "Jordin Lissone | Cyber Risk & Data Privacy",
    description:
      "Cybersecurity consultant, product strategist, and licensed real estate agent.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
