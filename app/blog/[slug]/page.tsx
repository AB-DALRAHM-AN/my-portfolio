import {
  fetchBlogBySlug,
  fetchBlogPageBlocks,
  notion,
} from "@/lib/notionBlogs";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import Image from "next/image";
import MyPhoto from "@/public/Me.jpg";

export const revalidate = 10;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const posts: any = await fetchBlogBySlug(params.slug);
  if (!posts) {
    return {
      title: "Projects not found",
    };
  }
  return {
    title: posts.properties.Title.title[0].plain_text,
    description: posts.properties.description?.rich_text[0]?.plain_text,
  };
}

export default async function PostsPage({
  params,
}: {
  params: { slug: string };
}) {
  const post: any = await fetchBlogBySlug(params.slug);
  const readingTime =
    post.properties.readTime?.rich_text[0]?.plain_text || "N/A";
  const date = post.properties.date?.created_time
    ? new Date(post.properties.date.created_time).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;
  if (!post) {
    return <div>Post not found</div>;
  }
  const content = await fetchBlogPageBlocks(post.id);

  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const html = await renderer.render(...content);

  return (
    <div className="mx-auto w-full select-none my-10 p-6">
      <div className="w-3/4 mx-auto">
        <h1 className="text-4xl font-bold mb-3">
          {post.properties.Title?.title[0]?.plain_text}
        </h1>
        <div className="flex gap-1 ml-5 items-center justify-start text-muted-foreground">
          <Image
            src={MyPhoto}
            alt="author"
            width={30}
            height={30}
            className="rounded-full"
          />
          <p className="text-muted-foreground">{date}</p>.
          <p className="text-muted-foreground">{readingTime}</p>
        </div>
      </div>

      <div className="prose my-10 w-[1000px] mx-auto dark:prose-headings:text-white dark:prose:text-gray-300 dark:prose-a:text-blue-300 dark:prose-strong:text-white dark:prose-em:text-white dark:prose-blockquote:text-white dark:prose-hr:border-gray-800 dark:prose-table:border-gray-800 dark:prose-code:text-muted-foreground dark:prose-p:text-muted-foreground dark:prose-ol:text-muted-foreground dark:prose-h2:text-card-foreground dark:prose-h1:text-card-foreground dark:prose-h3:text-muted-foreground dark:prose-ul:text-muted-foreground dark:prose-li:text-muted-foreground dark:prose-img:shadow-md dark:prose-img:rounded-lg dark:prose-img:overflow-hidden">
        <span dangerouslySetInnerHTML={{ __html: html }}></span>
      </div>
    </div>
  );
}
