import Link from "next/link";
import React from "react";
import ArticleCard from "./ArticleCard";
import { Ubuntu } from "next/font/google";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: "normal",
});

const Blog = () => {
  const blogDir = "posts";

  const files = fs.readdirSync(path.join(blogDir));
  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return (
    <section className="flex flex-col justify-start md:gap-8 gap-5 items-start mx-10 my-32 md:mx-40 md:my-24">
      <div className="flex justify-between items-center w-full">
        <h1 className={cn("text-2xl font-bold", ubuntu.className)}>
          📰 Latest Articles.
        </h1>
        <Link
          href="/blog"
          className="flex justify-between items-center gap-2 text-primary text-base font-semibold"
        >
          <span>View All Articles</span>
          <ExternalLink size={20} />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {blogs.map((blog) => (
            <Link href={"blog/posts/" + blog.slug} passHref key={blog.slug}>
              <ArticleCard description={blog.meta.description} slug={blog.slug} title={blog.meta.title} date={blog.meta.date} readingTime={blog.meta.readingTime} />
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Blog;
