import {
  fetchProjectsBySlug,
  fetchProjectsBlocks,
  notion,
} from "@/lib/notionProjects";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";

export const revalidate = 10;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const projects: any = await fetchProjectsBySlug(params.slug);
  if (!projects) {
    return {
      title: "Projects not found",
    };
  }
  return {
    title: projects.properties.Title.title[0].plain_text,
    description: projects.properties.description?.rich_text[0]?.plain_text,
  };
}

export default async function PostsPage({
  params,
}: {
  params: { slug: string };
}) {
  const projects = await fetchProjectsBySlug(params.slug);
  if (!projects) {
    return <div>Projects not found</div>;
  }
  const content = await fetchProjectsBlocks(projects.id);

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
