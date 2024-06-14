'use client';

import { Ubuntu } from "next/font/google";
import { ProjectCard } from "@/components/ProjectCard";
import { fetchProjects } from "@/lib/notionProjects";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

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

export default function BlogPage() {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
        {projects.map((project, index) => {
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
                technologies={tags.map((tag) => tag.name)}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
