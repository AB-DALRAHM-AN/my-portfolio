import React from "react";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { Ubuntu } from "next/font/google";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";
import { fetchProjects } from "@/lib/notionProjects";

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: "normal",
});

export default async function Projects() {
  const projects = await fetchProjects();

  // Get only the last three projects
  const latestProjects = projects.results.slice(0, 3);

  return (
    <section className="flex flex-col justify-start md:gap-8 gap-5 items-start mx-10 my-32 md:mx-40 md:my-24">
      <div className="flex flex-col gap-1">
        <h1 className={cn("text-2xl font-[700]", ubuntu.className)}>
          All Creative Works.
        </h1>
        <span className="text-base text-muted-foreground">
          {`Here's`} some of my projects that I have worked on.
        </span>
        <Link
          href={"/projects"}
          className="text-primary font-bold text-base flex gap-2 items-center"
        >
          <span>View All Projects</span>
          <ExternalLink size={20} />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {latestProjects.map((project: any, index) => {
          const imageUrl = project.properties.img?.files[0]?.file?.url;
          const title =
            project.properties.Title?.title[0]?.plain_text || "No Title";
          const description =
            project.properties.description?.rich_text[0]?.plain_text ||
            "No description available.";
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
