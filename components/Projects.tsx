'use client';

import React, { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { Ubuntu } from "next/font/google";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { fetchProjects } from "@/lib/notionProjects";

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: "normal",
});

// Define the Project type
interface Project {
  id: string;
  properties: {
    Title: { title: { plain_text: string }[] };
    description: { rich_text: { plain_text: string }[] };
    img: { files: { file: { url: string } }[] };
    tags: { multi_select: { name: string }[] };
    slug: { rich_text: { plain_text: string }[] };
    liveLink: { rich_text: { plain_text: string }[] };
    githubLink: { rich_text: { plain_text: string }[] };
  };
}

// Type guard to check if the data is of type Project
const isProject = (data: any): data is Project => {
  return (
    data &&
    data.id &&
    data.properties &&
    data.properties.Title &&
    Array.isArray(data.properties.Title.title) &&
    data.properties.description &&
    Array.isArray(data.properties.description.rich_text) &&
    data.properties.img &&
    Array.isArray(data.properties.img.files) &&
    data.properties.tags &&
    Array.isArray(data.properties.tags.multi_select) &&
    data.properties.slug &&
    Array.isArray(data.properties.slug.rich_text) &&
    data.properties.liveLink &&
    Array.isArray(data.properties.liveLink.rich_text) &&
    data.properties.githubLink &&
    Array.isArray(data.properties.githubLink.rich_text)
  );
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProjects();
        const filteredProjects = data.filter(isProject);
        setProjects(filteredProjects);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to fetch projects");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const latestProjects = useMemo(() => projects.slice(0, 3), [projects]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="flex flex-col justify-start md:gap-8 gap-5 items-start mx-10 my-32 md:mx-40 md:my-24">
      <div className="flex flex-col gap-1">
        <h1 className={cn("text-2xl font-[700]", ubuntu.className)}>
          All Creative Works.
        </h1>
        <span className="text-base text-muted-foreground">
          Here&apos;s some of my projects that I have worked on.
        </span>
        <Link
          href="/projects"
          className="text-primary font-bold text-base flex gap-2 items-center"
        >
          <span>View All Projects</span>
          <ExternalLink size={20} />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {latestProjects.map((project) => {
          const { properties } = project;
          const imageUrl = properties.img?.files[0]?.file?.url;
          const title = properties.Title?.title[0]?.plain_text || "No Title";
          const description =
            properties.description?.rich_text[0]?.plain_text ||
            "No description available.";
          const tags = properties.tags?.multi_select || [];

          return (
            <Link
              href={`/projects/project/${properties.slug?.rich_text[0]?.plain_text}`}
              key={project.id}
            >
              <ProjectCard
                key={project.id}
                discription={description}
                img={imageUrl}
                name={title}
                liveLink={properties.liveLink?.rich_text[0]?.plain_text || ""}
                githubLink={
                  properties.githubLink?.rich_text[0]?.plain_text || ""
                }
                technologies={tags.map((tag) => tag.name)}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
