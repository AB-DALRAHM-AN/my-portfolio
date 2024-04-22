import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Abdal Rahman - Software Engineer",
  description:
    "I'm a self-taught developer with an interest in Computer Science, and I write about my experiences and learnings in this blog, which is a collection of my thoughts and ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}
