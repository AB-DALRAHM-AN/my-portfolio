import Link from "next/link";
import React from "react";

const ArticleCard = () => {
  return (
    <Link
      href="/blog/1"
      className="flex shadow-md flex-col justify-between gap-5 items-start px-10 py-5 bg-secondary/50 rounded-md w-full hover:bg-secondary"
    >
      <h1 className="text-2xl font-bold">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
        numquam?
      </h1>
      <p className="text-sm text-muted-foreground">
        september 11 2023 . 2 min read
      </p>
    </Link>
  );
};

export default ArticleCard;
