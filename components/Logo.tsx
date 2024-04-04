'use client';
import Typewriter from "typewriter-effect";

export const Logo = () => {
  let gray = "text-neutral-400";
  return (
    <div className="md:text-3xl sm:text-2xl text-xl font-bold flex">
      <p className={gray}>{"{"}</p>
      <p>
        <Typewriter
          options={{
            strings: ["A.A.A"],
            cursor: "",
            autoStart: true,
            loop: true,
            deleteSpeed: 150,
          }}
        />
      </p>
      <p className={gray}>{"}"}</p>
    </div>
  );
};