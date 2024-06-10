"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Link2 } from "lucide-react";
import Technologies from "./Technologies";

interface ProjectCardProps {
  discription: string;
  img: any;
  name: string;
  liveLink: string;
  githubLink: string;
  technologies: string[];
}

export const ProjectCard = ({
  discription,
  img,
  name,
  liveLink,
  githubLink,
  technologies,
}: ProjectCardProps) => {
  return (
    <div className="bg-card shadow-md rounded-md">
      <Image
        src={img}
        alt={name}
        width={580}
        height={280}
        className="rounded-t-lg"
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
            <Technologies techs={technologies} />
          </span>
        </div>

        <div className="mt-2 text-base font-semibold text-muted-foreground">
          <span>{discription}</span>
        </div>
      </div>
    </div>
  );
};
