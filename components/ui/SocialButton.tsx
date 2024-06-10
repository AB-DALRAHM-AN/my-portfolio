import Link from "next/link";
import { Button } from "./button";

interface SocialButtonProps {
  icon: any;
  text: string;
  href: string;
}

const SocialButton = ({
  icon,
  text,
  href,
}: SocialButtonProps) => {
  return (
    <>
      <Link href={href} target="_blank">
        <Button
          variant={'outline'}
          className="flex flex-row bg-card justify-center items-center shadow-md hover:shadow-none hover:bg-card-foreground/5 transition-all gap-2"
        >
          {icon}
          {text}
        </Button>
      </Link>
    </>
  );
};

export default SocialButton;
