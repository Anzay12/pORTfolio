import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Himanshu Pandey | Data Science & ML Engineer",
  description:
    "Portfolio of Himanshu Pandey — Data Science & ML Engineer building intelligent systems from data to production. IIT Madras B.Sc. Data Science.",
  keywords: [
    "Himanshu Pandey",
    "Data Science",
    "Machine Learning",
    "MLOps",
    "Portfolio",
  ],
  authors: [{ name: "Himanshu Pandey" }],
  openGraph: {
    title: "Himanshu Pandey | Data Science & ML Engineer",
    description:
      "Building intelligent systems that scale from data to production.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Pandey | Data Science & ML Engineer",
    description:
      "Building intelligent systems that scale from data to production.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-dark text-zinc-300`}
      >
        {children}
      </body>
    </html>
  );
}
