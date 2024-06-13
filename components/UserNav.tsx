"use client";

import { AppWindowMac, Home, MenuIcon, NotebookPen } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: AppWindowMac },
  { name: "Blog", href: "/blog", icon: NotebookPen },
];

export function UserNav() {
  const pathname = usePathname();
  
  return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={'outline'} className="fixed top-5 right-5">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side={'top'}>
          <SheetHeader className="mb-10">
            <SheetTitle className="text-3xl">
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
            {navItems.map((link, index) => {
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
  );
}
