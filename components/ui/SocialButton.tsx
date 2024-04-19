import Image from "next/image";
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
          variant={"secondary"}
          className="flex flex-row justify-center items-center shadow-md hover:shadow-none transition-all gap-2"
        >
          {icon}
          {text}
        </Button>
      </Link>
    </>
  );
};

export default SocialButton;
