import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

interface BlogPostsCardProps {
  date: any;
  readTime: string;
  title: string;
  description: string;
  postLink: string;
}

const blogPostsCard = ({
  date,
  readTime,
  title,
  description,
  postLink,
}: BlogPostsCardProps) => {
  return (
    <div className="md:flex-row flex-col flex justify-between items-start gap-8">
      <div className="flex flex-col gap-1 justify-between text-muted-foreground">
        <p className="text-muted-foreground">{date}</p>
        <p className="text-muted-foreground">{readTime}</p>
      </div>
      <div className="flex flex-col gap-1 justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
        <Link href={postLink}>
          <div className="flex justify-start items-start text-primary gap-2">
            <span className="text-primary font-semibold">Read more</span>
            <ExternalLink size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default blogPostsCard;
