import React from "react";

const Footer = () => { 
  return (
    <div className="flex flex-col justify-center items-center w-full border-t py-4">
      <p>Designed and Developed by <span className="font-semibold text-primary">A.A.A</span></p>
      <p>Built with <span className="font-semibold text-primary">Next.js</span> & <span className="font-semibold text-primary">Shadcn UI</span>. Hosted on <span className="font-semibold text-primary">Vercel</span>.</p>
    </div>
  );
};

export default Footer;
