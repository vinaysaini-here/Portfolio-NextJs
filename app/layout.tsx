import type { Metadata } from "next";
import { Space_Grotesk, Sora } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Vinay Saini | Full Stack Web Developer",
  description:
    "Modern portfolio of Vinay Saini, a Full Stack Web Developer building scalable, high-performance, and elegant web applications.",
  keywords: [
    "Vinay Saini",
    "Full Stack Web Developer",
    "Next.js portfolio",
    "React developer",
    "Node.js developer"
  ],
  openGraph: {
    title: "Vinay Saini | Full Stack Web Developer",
    description:
      "Scalable products, clean architecture, and premium user experiences.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinay Saini | Full Stack Web Developer",
    description:
      "Scalable products, clean architecture, and premium user experiences."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${sora.variable} bg-background font-sans text-text antialiased`}>
        {children}
      </body>
    </html>
  );
}