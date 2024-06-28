import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Discover Abdal Rahman's diverse range of projects, showcasing his expertise in full-stack development, JavaScript, TypeScript, React, and Next.js. Explore innovative web applications, AI contributions, and open-source projects that highlight his technical skills and problem-solving abilities.",
  twitter: {
    card: "summary_large_image",
    site: "@abdalrahman.tech",
    creator: "@A.A.A",
    images: [
      {
        url: "https://abdalrahman.tech/opengraph-image.png",
        alt: "Abdal Rahman's Projects",
      },
    ],
  },
};


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
