import BlogPostsCard from "@/components/blogPostsCard";
import { fetchBlogPages } from "@/lib/notionBlogs";
import React from "react";

export const revalidate = 10;

export default async function BlogPage() {
  const posts = await fetchBlogPages();

  return (
    <div className="container my-10 mx-auto p-6 h-screen">
      <h1 className="text-5xl font-bold mb-16">Blog</h1>
      <div className="flex flex-col justify-between items-start gap-10">
        {posts.map((post: any) => {
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
            <BlogPostsCard
              key={post.id}
              date={date}
              readTime={readingTime}
              title={post.properties.Title.title[0].plain_text}
              description={post.properties.description.rich_text[0].plain_text}
              postLink={`/blog/${post.properties.slug.rich_text[0].plain_text}`}
            />
          );
        })}
      </div>
    </div>
  );
}
