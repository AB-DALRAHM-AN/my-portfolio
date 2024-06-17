import { fetchProjects } from "@/lib/notionProjects";
import React from "react";
import { ProjectCard } from "@/components/ProjectCard";

export const revalidate = 10;

export default async function BlogPage() {
  const projects = await fetchProjects();

  return (
    <div className="container my-10 mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">My projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project: any) => {
          const imageUrl = project.properties.img?.files[0]?.file?.url;
          const title = project.properties.Title?.title[0]?.plain_text;
          const description =
            project.properties.description?.rich_text[0]?.plain_text;
            const tags = project.properties.tags?.multi_select.map((tag: { name: any; }) => tag.name);
            const liveLink = project.properties.liveLink?.rich_text[0].plain_text || '';
            const githubLink = project.properties.githubLink.rich_text[0].plain_text || '';
            const projectPage = `/projects/project/${project.properties.slug.rich_text[0].plain_text}`;

          return (
            <ProjectCard
              key={project.id}
              img={imageUrl}
              name={title}
              description={description}
              liveLink={liveLink}
              githubLink={githubLink}
              tags={tags}
              project={projectPage}
            />
          );
        })}
      </div>
    </div>
  );
}
