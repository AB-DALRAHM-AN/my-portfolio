"use client";

import { ModeToggle } from "./ModeToogle";
import { NavLinks } from "./NavLinks";
import { Logo } from "./Logo";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import { NavItems } from "@/data/NavLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();

  return (
    <section className="mx-10 md:mx-20 sticky top-5 rounded-3xl z-50 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-between items-center w-full gap-5 py-4 md:px-20 px-10 rounded-3xl border-2 mt-5">
        <Link href="/">
          <Logo />
        </Link>
        <div className=" flex-row justify-between items-center gap-2 hidden md:flex">
          <NavLinks />
          <ModeToggle />
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <MenuIcon className="w-8 h-8" />
          </SheetTrigger>
          <SheetContent side={"top"}>
            <SheetHeader className="mb-10">
              <SheetTitle className="text-3xl mt-10">
                <Link href="/">
                  Abdelrahman Ahmed<span className="text-primary">Ali</span>
                </Link>
              </SheetTitle>
              <SheetDescription>
                Start a conversation{" "}
                <Link
                  href="mailto:abdelrahman.webdev@gmail.com"
                  className="border-b border-primary"
                >
                  abdelrahman.webdev@gmail.com
                </Link>
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col justify-center items-center">
              {NavItems.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className={cn(
                      "flex items-center gap-3 text-xl px-3 py-2 rounded-md w-full hover:bg-secondary",
                      pathname === link.href ? "bg-secondary" : ""
                    )}
                  >
                    {Icon && <Icon className="w-6 h-6 mr-2" />}
                    <p>{link.name}</p>
                  </Link>
                );
              })}
            </div>
            <div className="flex justify-center items-center mt-10"></div>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
};

export default Header;
