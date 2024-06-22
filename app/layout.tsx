import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Abdal Rahman - Software Engineer",
    template: `%s | Abdal Rahman`,
  },
  description:
    "I'm a self-taught developer with an interest in Computer Science.",
    twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdalrahman.tech/opengraph-image.png",
    siteName: "Abdal Rahman",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} Dark-Light-theme`}>
        <ThemeProvider
          attribute="class"
          defaultTheme=""
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <SpeedInsights />
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
