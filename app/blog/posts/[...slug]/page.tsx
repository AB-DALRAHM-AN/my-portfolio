import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useTheme } from "next-themes"; // Import useTheme from next-themes

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(postsDir);

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", "").split("/"),
    },
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );
  const { data: fontMatter, content } = matter(markdownFile);

  return {
    fontMatter,
    slug,
    content,
  };
}

export default function Page({ params }: any) {
  const props = getPost(params);
  const { theme } = useTheme(); // Use useTheme hook from next-themes
  const textColor = theme === "dark" ? "white" : "black"; // Determine text color based on theme

  return (
    <article
      className="prose prose-sm md:prose-base lg:prose-lg prose-blue prose-invert my-10 mx-auto"
      style={{ color: textColor }}
    >
      <h1>{props.fontMatter.title}</h1>
      <MDXRemote source={props.content} />
    </article>
  );
}
