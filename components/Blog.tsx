// import Link from "next/link";
// import React from "react";
// import ArticleCard from "./ArticleCard";
// import { Ubuntu } from "next/font/google";
// import { ExternalLink } from "lucide-react";
// import { cn } from "@/lib/utils";
// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

// const ubuntu = Ubuntu({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   style: "normal",
// });

// const Blog = () => {
//   const blogDir = "posts";

//   const files = fs.readdirSync(path.join(blogDir));
//   const blogs = files.map((filename) => {
//     const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

//     const { data: frontMatter } = matter(fileContent);
//     return {
//       meta: frontMatter,
//       slug: filename.replace(".mdx", ""),
//     };
//   });

//   return (
//     <section className="flex flex-col justify-start md:gap-8 gap-5 items-start mx-10 my-32 md:mx-40 md:my-24">
//       <div className="flex justify-between items-center w-full">
//         <h1 className={cn("text-2xl font-bold", ubuntu.className)}>
//           📰 Latest Articles.
//         </h1>
//         <Link
//           href="/blog"
//           className="flex justify-between items-center gap-2 text-primary text-base font-semibold"
//         >
//           <span>View All Articles</span>
//           <ExternalLink size={20} />
//         </Link>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {blogs.map((blog) => (
//             <Link href={"blog/post/" + blog.slug} passHref key={blog.slug}>
//               <ArticleCard description={blog.meta.description} slug={blog.slug} title={blog.meta.title} date={blog.meta.date} readingTime={blog.meta.readingTime} />
//             </Link>
//           ))}
//       </div>
//     </section>
//   );
// };

// export default Blog;

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { fetchPages } from "@/lib/notion";
import { ExternalLink } from "lucide-react";

export default async function LatestPosts() {
  const posts = await fetchPages();
  return (
    <section className="flex flex-col justify-start md:gap-8 gap-5 items-start mx-10 my-32 md:mx-40 md:my-24">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-2xl font-bold">📰 Latest Articles.</h1>
        <Link
          href="/blog"
          className="flex justify-between items-center gap-2 text-primary text-base font-semibold"
        >
          <span>View All Articles</span>
          <ExternalLink size={20} />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.results.map((post) => {
          const readingTime =
            post.properties.readTime?.rich_text[0]?.plain_text || "N/A";
          const date = post.properties.date?.created_time
            ? new Date(post.properties.date.created_time).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )
            : null;

          return (
            <Link
              href={`/blog/post/${post.properties.slug.rich_text[0].plain_text}`}
              passHref
              key={post.id}
            >
              <div className="flex shadow-md flex-col justify-between gap-4 items-start px-10 py-5 bg-card rounded-md w-full hover:bg-card-foreground/5">
                <div>
                  <h3 className="text-2xl font-bold">
                    {post.properties.Title.title[0].plain_text}
                  </h3>
                </div>
                <div className="flex flex-col justify-start items-start gap-1">
                  <p className="text-sm text-muted-foreground">
                    {date} - {readingTime}
                  </p>
                </div>
                <div className="px-4 flex flex-col justify-between h-full"></div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
