import type { Metadata } from "next";
import { Inter, Prosto_One } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        content="https://abdalrahman.tech/opengraph-image.png"
        property="og:image"
      />
      <meta
        content="https://abdalrahman.tech/opengraph-image.png"
        property="twitter:image"
      />
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
          <Analytics />
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
