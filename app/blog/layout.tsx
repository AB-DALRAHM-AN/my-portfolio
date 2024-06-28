import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Explore Abdal Rahman's blog posts where he shares insights on software development, full-stack technologies, and his journey in the tech industry. Discover tutorials, industry trends, and personal experiences in the world of coding and development.",
  twitter: {
    card: "summary_large_image",
    site: "@abdalrahman.tech",
    creator: "@A.A.A",
    images: [
      {
        url: "https://abdalrahman.tech/opengraph-image.png",
        alt: "Abdal Rahman's Blog",
      },
    ],
  },
};


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
    </section>
  );
}
