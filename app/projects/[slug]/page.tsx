import {
  fetchProjectsBySlug,
  fetchProjectsBlocks,
  notion,
} from "@/lib/notionProjects";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import Link from "next/link";
import { Github, Link2 } from "lucide-react";

export const revalidate = 10;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
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
  const projects: any = await fetchProjectsBySlug(params.slug);
  const date = projects.properties.date?.created_time
    ? new Date(projects.properties.date.created_time).toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      )
    : null;
  const liveLink = projects.properties.liveLink?.rich_text[0].plain_text || "";
  const githubLink =
    projects.properties.githubLink.rich_text[0].plain_text || "";
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
    <div className="mx-auto select-none my-10 p-6">
      <div className="w-fit mx-auto">
        <div className="flex items-center justify-start gap-3">
          <h1 className="text-4xl font-bold">
            {projects.properties.Title?.title[0]?.plain_text}
          </h1>
          <span className={`links flex gap-2 text-lg text-primary`}>
            <Link href={liveLink} target="_blank">
              <Link2 className="hover:text-primary" />
            </Link>
            <Link href={githubLink} target="_blank">
              <Github className="hover:text-primary" />
            </Link>
          </span>
        </div>
        <div
          className="prose m-10 md:mx-auto select-none dark:prose-headings:text-white dark:prose:text-gray-300 dark:prose-a:text-blue-300 dark:prose-strong:text-white dark:prose-em:text-white dark:prose-blockquote:text-white dark:prose-hr:border-gray-800 dark:prose-table:border-gray-800 dark:prose-code:text-muted-foreground dark:prose-p:text-muted-foreground dark:prose-ol:text-muted-foreground dark:prose-h2:text-card-foreground dark:prose-h1:text-card-foreground dark:prose-h3:text-muted-foreground dark:prose-ul:text-muted-foreground dark:prose-li:text-muted-foreground dark:prose-img:shadow-md dark:prose-img:rounded-lg dark:prose-img:overflow-hidden"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </div>
  );
}
