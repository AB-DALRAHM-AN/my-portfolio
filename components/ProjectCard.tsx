"use client";

import Link from "next/link";
import Image from "next/image";
import { Fullscreen, Github, Link2 } from "lucide-react";
import Technologies from "./Technologies";

interface ProjectCardProps {
  description: string;
  img: any;
  name: string;
  liveLink: string;
  githubLink: string;
  tags: string[];
  project: string;
}

export const ProjectCard = ({
  description,
  img,
  name,
  liveLink,
  githubLink,
  tags,
  project,
}: ProjectCardProps) => {
  return (
    <Link href={project} passHref>
      <div className="bg-card shadow-md rounded-md">
        <Image
          src={img}
          alt={name}
          width={1000}
          height={600}
          className="rounded-t-lg"
          unoptimized
        />
        <div className="p-5 pt-3">
          <div className="border-b border-[#aaa]">
            <div className="flex justify-between mb-2">
              <span className="text-2xl font-semibold">{name}</span>
              <div className={`links flex gap-2 text-lg`}>
                <Link href={liveLink} target="_blank">
                  <Link2 className="hover:text-primary" />
                </Link>
                <Link href={githubLink} target="_blank">
                  <Github className="hover:text-primary" />
                </Link>
              </div>
            </div>
            <span className="text-base font-semibold text-muted-foreground">
              <Technologies techs={tags} />
            </span>
          </div>

          <div className="mt-2 text-base font-semibold text-muted-foreground">
            <span>{description}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
