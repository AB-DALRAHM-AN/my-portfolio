import Link from "next/link";
import React from "react";

interface ArticleCardProps {
  title: string;
  date: string;
  readingTime: string;
  slug: string;
  description: string;
}

const ArticleCard = ({
  title,
  date,
  readingTime,
  slug,
  description,
}: ArticleCardProps) => {
  return (
    <Link
      href={"/blog/posts/" + slug}
      className="flex shadow-md flex-col justify-between gap-4 items-start px-10 py-5 bg-secondary/50 rounded-md w-full hover:bg-secondary"
    >
      <div className="flex flex-col justify-start items-start gap-1">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-muted-foreground">
          {date} - {readingTime}
        </p>
      </div>

      <p className="text-base text-muted-foreground">{description}</p>
    </Link>
  );
};

export default ArticleCard;
