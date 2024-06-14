import { Ubuntu } from "next/font/google";
import { ProjectCard } from "@/components/ProjectCard";
import { fetchProjects } from "@/lib/notionProjects";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: "normal",
});

export default async function BlogPage() {
  const projects = await fetchProjects();

  return (
    <section className="container flex flex-col justify-start md:gap-8 gap-5 items-start h-fit my-16 md:my-24">
      <div className="flex flex-col gap-1 mb-6">
        <h1 className={cn("text-2xl font-[700]", ubuntu.className)}>
          All Creative Works.
        </h1>
        <span className="text-base text-muted-foreground">
          {`Here's`} some of my projects that I have worked on.
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.results.map((project: any, index) => {
          const imageUrl = project.properties.img?.files[0]?.file?.url;
          const title = project.properties.Title?.title[0]?.plain_text;
          const description =
            project.properties.description?.rich_text[0]?.plain_text;
          const tags = project.properties.tags?.multi_select || [];

          return (
            <Link
              href={`/projects/project/${project.properties.slug?.rich_text[0]?.plain_text}`}
              key={index}
            >
              <ProjectCard
                key={index}
                discription={description}
                img={imageUrl}
                name={title}
                liveLink={
                  project.properties.liveLink?.rich_text[0]?.plain_text || ""
                }
                githubLink={
                  project.properties.githubLink?.rich_text[0]?.plain_text || ""
                }
                technologies={tags.map((tag: any) => tag.name)}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
