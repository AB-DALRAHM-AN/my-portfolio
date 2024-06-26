import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-start md:justify-center items-center w-full border-t md:px-0 py-4">
      <span>
        Designed and Developed by{" "}
        <span className="font-semibold text-primary">A.A.A</span>
      </span>
      <span>
        Built with <span className="font-semibold text-primary">Next.js</span> &{" "}
        <span className="font-semibold text-primary">Shadcn UI</span>. Hosted on{" "}
        <span className="font-semibold text-primary">Vercel</span>.
      </span>
    </div>
  );
};

export default Footer;
