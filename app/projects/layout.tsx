import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Here's some of my projects that I have worked on.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
