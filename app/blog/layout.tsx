import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Here's some of my blog posts.",
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
