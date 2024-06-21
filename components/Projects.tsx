import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { fetchProjects } from "@/lib/notionProjects";
import { ProjectCard } from "./ProjectCard";

export const revalidate = 3600 * 24;

export default async function Projects() {
  const projects = await fetchProjects();
  console.log("Fetched projects:", projects);

  const latestProjects = projects.length > 0 ? projects.slice(0, 2) : [];

  return (
    <section className="flex flex-col justify-start md:gap-8 gap-5 items-start mx-10 my-32 md:mx-40 md:my-24">
      <div className="flex flex-col justify-between items-start w-full">
        <h1 className="text-2xl font-bold">All Creative Works.</h1>
        <p className="text-lg font-medium text-muted-foreground/70">
          {`Here's`} some of my projects that I have worked on.
        </p>
        <Link
          href="/projects"
          className="flex justify-between items-center gap-2 text-primary text-base font-semibold"
        >
          <span>Explore more</span>
          <ExternalLink size={20} />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {latestProjects.length > 0 ? (
          latestProjects.map((project: any) => {
            const imageUrl =
              project.properties.img?.files[0]?.file?.url ||
              "../public/notAvilable.png";
            const title =
              project.properties.Title?.title[0]?.plain_text ||
              "Untitled Project";
            const description =
              project.properties.description?.rich_text[0]?.plain_text ||
              "No description available.";
            const tags =
              project.properties.tags?.multi_select.map(
                (tag: { name: any }) => tag.name
              ) || [];
            const liveLink =
              project.properties.liveLink?.rich_text[0].plain_text || "";
            const githubLink =
              project.properties.githubLink?.rich_text[0].plain_text || "";
            const projectPage = `/projects/project/${
              project.properties.slug?.rich_text[0].plain_text || ""
            }`;

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
          })
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </section>
  );
}
