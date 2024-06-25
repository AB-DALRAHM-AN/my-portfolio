import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Technologies = ({ techs }: { techs: string[] }) => {
  return (
    <div className="mb-2 flex flex-row flex-wrap justify-start gap-2 items-center">
      {techs.map((tech, index) => {
        return (
          <span
            key={index}
            className="flex gap-1 items-center text-sm font-base flex-wrap px-2 py-1 rounded-md bg-card-foreground/5 transition-all duration-300 ease-in-out"
          >
            {tech === "html" && (
              <span className="flex justify-center items-center gap-1 text-red-500">
                <FaHtml5 className="text-red-500" />
                <span>HTML</span>
              </span>
            )}
            {tech === "css" && (
              <span className="flex justify-center items-center gap-1 text-blue-500">
                <FaCss3 className="text-blue-500" />
                <span>CSS</span>
              </span>
            )}
            {tech === "js" && (
              <span className="flex justify-center items-center gap-1 text-yellow-500">
                <FaJs className="text-yellow-500" />
                <span>JavaScript</span>
              </span>
            )}
            {tech === "react" && (
              <span className="flex justify-center items-center gap-1 text-blue-300">
                <FaReact className="text-blue-300" />
                <span>React</span>
              </span>
            )}
            {tech === "node.js" && (
              <span className="flex justify-center items-center gap-1 text-green-500">
                <FaNodeJs className="text-green-500" />
                <span>Node.js</span>
              </span>
            )}
            {tech === "sass" && (
              <span className="flex justify-center items-center gap-1 text-pink-500">
                <FaSass className="text-pink-500" />
                <span>Sass</span>
              </span>
            )}
            {tech === "bootstrap" && (
              <span className="flex justify-center items-center gap-1 text-purple-500">
                <FaBootstrap className="text-purple-500" />
                <span>Bootstrap</span>
              </span>
            )}
            {tech === "tailwindcss" && (
              <span className="flex justify-center items-center gap-1 text-cyan-500">
                <SiTailwindcss className="text-cyan-500" />
                <span>Tailwindcss</span>
              </span>
            )}
            {tech === "next.js" && (
              <span className="flex justify-center items-center gap-1">
                <TbBrandNextjs />
                <span>Next.js</span>
              </span>
            )}
            {tech === "typescript" && (
              <span className="flex justify-center items-center gap-1 text-blue-600">
                <SiTypescript className="text-blue-600" />
                <span>TypeScript</span>
              </span>
            )}
            {tech === "mongodb" && (
              <span className="flex justify-center items-center gap-1 text-green-400">
                <SiMongodb className="text-green-400" />
                <span>MongoDB</span>
              </span>
            )}
            {tech === "express.js" && (
              <span className="flex justify-center items-center gap-1">
                <SiExpress />
                <span>Express.js</span>
              </span>
            )}
            {tech === "firebase" && (
              <span className="flex justify-center items-center gap-1 text-yellow-500">
                <SiFirebase className="text-yellow-500" />
                <span>Firebase</span>
              </span>
            )}
            {tech === "notion" && (
              <span className="flex justify-center items-center gap-1 text-gray-500">
                <span>Notion</span>
              </span>
            )}
            {tech === "figma" && (
              <span className="flex justify-center items-center gap-1 text-red-500">
                <span>Figma</span>
              </span>
            )}
            {tech === "shadcn" && (
              <span className="flex justify-center items-center gap-1">
                <span>Shadcn</span>
              </span>
            )}
            {tech === "ai" && (
              <span className="flex justify-center items-center gap-1">
                <span>AI</span>
              </span>
            )}
            {tech === "gemini" && (
              <span className="flex justify-center items-center gap-1 text-blue-600">
                <span>Gemini</span>
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Technologies;
