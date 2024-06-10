import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion";
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
  const content = await fetchPageBlocks(post.id);

  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const html = await renderer.render(...content);

  return (
    <div
      className="prose m-10 md:mx-auto select-none"
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
}
