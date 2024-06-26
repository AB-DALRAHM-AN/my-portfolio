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
    "Abdal Rahman is a highly skilled self-taught software engineer specializing in full-stack development, proficient in JavaScript, TypeScript, React and Nextjs. With a strong background in Computer Science, Abdalrahman has developed innovative web applications, contributed to ai and open-source projects, and solved complex technical challenges. Explore his portfolio to see his latest projects and achievements.",
  twitter: {
    card: "summary_large_image",
    site: "@abdalrahman.tech",
    creator: "@A.A.A",
    images: [
      {
        url: "https://abdalrahman.tech/opengraph-image.png",
        alt: "Abdal Rahman - Software Engineer",
      },
    ],
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
      <body className={`${inter.className} dark Dark-Light-theme`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
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
