import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { Ubuntu } from "next/font/google";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";
import Portfolio from "@/public/Portfolio.png";
import Dashboard from "@/public/Nike.png";

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: "normal",
});

const Projects = () => {
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
        <ProjectCard
          discription="A simple and elegant portfolio website to showcase your work."
          img={Portfolio}
          name="Portfolio"
          liveLink="https://google.com"
          githubLink="https://google.com"
          technologies={["next.js", "tailwindcss", "typescript", "express.js"]}
        />
        <ProjectCard
          discription="A simple and elegant portfolio website to showcase your work."
          img={Dashboard}
          name="Portfolio"
          liveLink="https://google.com"
          githubLink="https://google.com"
          technologies={["next.js", "tailwindcss", "typescript", "express.js"]}
        />
      </div>
    </section>
  );
};

export default Projects;
