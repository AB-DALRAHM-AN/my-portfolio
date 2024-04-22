import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
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
    <main className="flex flex-col justify-start md:gap-8 gap-5 items-start mx-10 md:mx-40 md:my-14 h-screen">
      <section className="">
        <div className="flex flex-col justify-start items-start gap-3">
          <h1 className="text-6xl font-bold">Blog</h1>
          <p className="text-secondary-foreground/50">
            A collection of my thoughts and experiences.
          </p>
        </div>
      </section>
      <span className="w-full h-[1px] bg-secondary"></span>
      <section className="py-5">
        <div className="py-2">
          {blogs.map((blog) => (
            <Link href={"blog/posts/" + blog.slug} passHref key={blog.slug}>
              <div className="py-2 flex justify-between align-middle items-center mb-4">
                <div>
                  <h3 className="text-lg font-blod">{blog.meta.title}</h3>
                  <div>
                    <span className="text-gray-400">
                      {blog.meta.description}
                    </span>
                  </div>
                  <div className="my-auto text-gray-400">
                      <span className="text-primary flex gap-1 justify-start items-center">Read more <ArrowRight /></span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
