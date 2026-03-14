import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Jordin Lissone, M.S. | Data Risk & Privacy Professional",
  description:
    "Jordin Lissone is a Data Risk & Privacy professional specializing in regulatory compliance, data governance, and privacy risk. Based in New York City.",
  keywords: [
    "Jordin Lissone",
    "Data Risk",
    "Privacy",
    "Compliance",
    "Data Governance",
    "PwC",
    "DMA",
    "DSA",
    "Alation",
    "OneTrust",
  ],
  openGraph: {
    title: "Jordin Lissone | Data Risk & Privacy",
    description:
      "Data Risk & Privacy professional specializing in regulatory compliance, data governance, and privacy risk across highly regulated industries.",
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
