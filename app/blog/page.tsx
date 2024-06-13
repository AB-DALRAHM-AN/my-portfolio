import { fetchPages } from "@/lib/notionBlogs";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";

export default async function BlogPage() {
  const posts = await fetchPages();

  return (
    <div className="container my-10 mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.results.map((post: any) => {
          const readingTime =
            post.properties.readTime?.rich_text[0]?.plain_text || "Unknown";
          const date = post.properties.date?.created_time
            ? new Date(post.properties.date.created_time).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )
            : "Unknown Date";
          const imageUrl =
            post.properties.img?.files[0]?.file?.url || "/default-image.jpg";
          const title =
            post.properties.Title?.title[0]?.plain_text || "No Title";
          const description =
            post.properties.description?.rich_text[0]?.plain_text ||
            "No description available.";

          return (
            <div
              key={post.id}
              className="bg-card shadow-md select-none rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
            >
              <Link
                href={`/blog/post/${post.properties.slug?.rich_text[0]?.plain_text}`}
              >
                <div className="w-full h-48 relative">
                  <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                </div>
                <div className="block cursor-pointer py-3">
                  <div className="flex justify-between mx-2 my-1 items-center text-muted-foreground text-sm">
                    <span>{date}</span>
                    <Badge variant={'card'}>{readingTime}</Badge>
                  </div>
                  <div className="px-4">
                    <h2 className="text-2xl font-bold mb-2">{title}</h2>
                    <p className="text-muted-foreground/70 mb-4 line-clamp-3">
                      {description}
                    </p>
                    <div className="flex justify-between items-center text-gray-600 text-sm mb-2"></div>
                    {post.properties.tags?.multi_select.length > 0 && (
                      <div className="flex flex-wrap gap-2 -m-1">
                        {post.properties.tags.multi_select.map((tag: any) => (
                          <Badge variant={'card'} key={tag.id}>
                            {tag.name}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
