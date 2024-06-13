import Image from "next/image";
import React from "react";
import { Zap } from "lucide-react";
import Me from "../public/Me.jpg";

const About = () => {
  return (
    <section className="flex flex-col justify-start items-start mx-10 my-32 md:mx-40 md:my-24">
      <div className="flex justify-start items-center mb-8 md:mb-0 gap-2">
        <Zap className="text-primary" />
        <h1 className="text-2xl font-bold">About Me</h1>
      </div>
      <div className="flex flex-col-reverse justify-start items-center md:flex-row gap-10 md:gap-20">
        <div className="flex flex-col gap-5 justify-start items-start md:w-1/2">
          <span>
            Hey! {`I'm`} Abdul Rahman, {`I've`} been close to a computer since
            an early age, and been passionate about it ever since.
          </span>
          <span>
            I really liked to build stuff using{" "}
            <span className="text-primary">no-code tools</span> back in 2010,
            and from that, I explored how to code myself, fast-forward to today,
            I do programming in various languages and technologies, and had the
            privilege to worked in a{" "}
            <span className="text-primary">Recruitment Company</span>and a{" "}
            <span className="text-primary">SaaS Company</span>
            {`I'm`}
            interested in building something awesome with code and automate
            tasks with code, currently focused on{" "}
            <span className="text-primary">
              Web & Mobile Development, Open Source and Competitive Programming
            </span>
            .
          </span>
          <span>
            When {`I'm`} not coding I play games with my friends, watch some
            show on Netflix, or if the {`weather's`} good, play basketball! 🏀
          </span>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <Image
            src={Me}
            alt="My Photo"
            className="rounded-full min-w-[200px] md:max-w-[380px]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
