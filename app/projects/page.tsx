import { cn } from "@/lib/utils";
import { Ubuntu } from "next/font/google";
import { ProjectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: "normal",
});

const ProjectsPage = () => {
  return (
    <section className="flex flex-col justify-start md:gap-8 gap-5 items-start mx-10 my-32 md:mx-40 md:my-24">
      <div className="flex flex-col gap-1">
        <h1 className={cn("text-2xl font-[700]", ubuntu.className)}>
          All Creative Works.
        </h1>
        <span className="text-base text-muted-foreground">
          {`Here's`} some of my projects that I have worked on.
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {ProjectsData.map((project, index) => (
          <ProjectCard
            key={index}
            discription={project.description}
            img={project.img}
            name={project.title}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
            technologies={project.technology}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
