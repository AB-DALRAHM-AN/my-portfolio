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
            className="flex gap-1 items-center text-sm font-base flex-wrap bg-secondary px-2 py-1 rounded-md hover:bg-secondary transition-all duration-300 ease-in-out"
          >
            {tech === "html" && (
              <span className="flex justify-center items-center gap-1 text-red-500">
                <FaHtml5 className="text-red-500" />
                <p>HTML</p>
              </span>
            )}
            {tech === "css" && (
              <span className="flex justify-center items-center gap-1 text-blue-500">
                <FaCss3 className="text-blue-500" />
                <p>CSS</p>
              </span>
            )}
            {tech === "js" && (
              <span className="flex justify-center items-center gap-1 text-yellow-500">
                <FaJs className="text-yellow-500" />
                <p>JavaScript</p>
              </span>
            )}
            {tech === "react" && (
              <span className="flex justify-center items-center gap-1 text-blue-300">
                <FaReact className="text-blue-300" />
                <p>React</p>
              </span>
            )}
            {tech === "node.js" && (
              <span className="flex justify-center items-center gap-1 text-green-500">
                <FaNodeJs className="text-green-500" />
                <p>Node.js</p>
              </span>
            )}
            {tech === "sass" && (
              <span className="flex justify-center items-center gap-1 text-pink-500">
                <FaSass className="text-pink-500" />
                <p>Sass</p>
              </span>
            )}
            {tech === "bootstrap" && (
              <span className="flex justify-center items-center gap-1 text-purple-500">
                <FaBootstrap className="text-purple-500" />
                <p>Bootstrap</p>
              </span>
            )}
            {tech === "tailwindcss" && (
              <span className="flex justify-center items-center gap-1 text-cyan-500">
                <SiTailwindcss className="text-cyan-500" />
                <p>Tailwindcss</p>
              </span>
            )}
            {tech === "next.js" && (
              <span className="flex justify-center items-center gap-1">
                <TbBrandNextjs />
                <p>Next.js</p>
              </span>
            )}
            {tech === "typescript" && (
              <span className="flex justify-center items-center gap-1 text-blue-600">
                <SiTypescript className="text-blue-600" />
                <p>TypeScript</p>
              </span>
            )}
            {tech === "mongodb" && (
              <span className="flex justify-center items-center gap-1 text-green-400">
                <SiMongodb className="text-green-400" />
                <p>MongoDB</p>
              </span>
            )}
            {tech === "express.js" && (
              <span className="flex justify-center items-center gap-1 ">
                <SiExpress />
                <p>Express.js</p>
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Technologies;
