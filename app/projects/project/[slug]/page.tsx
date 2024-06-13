import { fetchBySlug, fetchProjectsBlocks, notion } from "@/lib/notionProjects";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";

export default async function PostsPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await fetchBySlug(params.slug);
  if (!post) {
    return <div>Post not found</div>;
  }
  const content = await fetchProjectsBlocks(post.id);

  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const html = await renderer.render(...content);

  return (
    <div
      className="prose m-10 md:mx-auto select-none dark:prose-headings:text-white dark:prose:text-gray-300 dark:prose-a:text-blue-300 dark:prose-strong:text-white dark:prose-em:text-white dark:prose-blockquote:text-white dark:prose-hr:border-gray-800 dark:prose-table:border-gray-800 dark:prose-code:text-white dark:prose-p:text-muted-foreground dark:prose-ol:text-muted-foreground dark:prose-ul:text-muted-foreground dark:prose-li:text-muted-foreground dark:prose-img:shadow-md dark:prose-img:rounded-lg dark:prose-img:overflow-hidden"
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
}