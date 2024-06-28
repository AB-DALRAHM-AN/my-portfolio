// 'use client'

import Image from "next/image";
import React from "react";
import dots from "@/public/dots.svg";
import SocialButton from "./ui/SocialButton";
import { Ubuntu } from "next/font/google";
import { cn } from "@/lib/utils";
import { File, GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: "normal",
});

const Hero = () => {
  return (
    <section className="flex flex-col justify-start md:gap-8 gap-5 items-start mx-10 mt-20 mb-32 md:mx-40 md:my-32">
      <div className="flex flex-col relative">
        <span className="md:text-3xl text-2xl font-semibold text-primary z-10">
          Hey there!, {"I'm-"}
        </span>
        <h1
          className={cn(
            "md:text-9xl text-7xl font-[700] z-10",
            ubuntu.className
          )}
        >
          Abdal Rahman.
        </h1>
      </div>
      <div className="md:text-3xl text-2xl font-bold text-muted-foreground">
        <span>
          <span className="text-secondary-foreground">Software Engineer.</span>{" "}
          A self-taught developer with an
        </span>
        <p>interest in Computer Science.</p>
      </div>
      <div className="text-lg text-muted-foreground">
        <span>🚀 Currently specializing in Frontend (<span className="text-primary">React</span> / <span className="text-primary">Next.js</span>).</span>
        <p>
          💻 Software Engineer at 
          <Link href={'/'} className="font-bold "> HireQ</Link>
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-4">
        <SocialButton
          icon={<GithubIcon className="text-primary" />}
          text="Github"
          href="https://github.com/AB-DALRAHM-AN"
        />
        <SocialButton
          icon={<LinkedinIcon className="text-primary" />}
          text="LinkedIn"
          href="https://www.linkedin.com/in/abdalrahman-tech/"
        />
        <SocialButton
          icon={<File className="text-primary" />}
          text="Resume"
          href="https://drive.google.com/file/d/1DydCBUFLPRu63OiOr-IBduIzNzLkLlOA/view?usp=drive_link"
        />
      </div>
    </section>
  );
};

export default Hero;
