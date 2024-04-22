"use client";

import * as React from "react";
import Link from "next/link";
import { ProjectsData } from "@/data/projects";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { redirect, usePathname } from "next/navigation";

export function NavLinks() {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                "text-base bg-transparent",
                navigationMenuTriggerStyle(),
                pathname === "/" && "bg-accent"
              )}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "text-base bg-transparent",
              pathname === "/projects" && "bg-accent"
            )}
          >
            Projects
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[250px] lg:grid-row-[.75fr_1fr] border-b">
              <ListItem href="https://github.com/AB-DALRAHM-AN/react-dashboard" title={ProjectsData[0].title}>
                {ProjectsData[0].description}
              </ListItem>
              <ListItem href="https://github.com/AB-DALRAHM-AN/Quote-App" title={ProjectsData[1].title}>
                {ProjectsData[1].description}
              </ListItem>
              <ListItem href="https://github.com/AB-DALRAHM-AN/Portfolio" title={ProjectsData[2].title}>
                {ProjectsData[2].description}
              </ListItem>
            </ul>
            <ul className="px-6 py-2">
              <ListItem href="/projects" title="See all Projects"></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "text-base bg-transparent",
              pathname === "/blog" && "bg-accent"
            )}
          >
            Blog
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[250px] lg:grid-row-[.75fr_1fr] border-b">
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
            <ul className="px-6 py-2">
              <ListItem href="/blog" title="See all Articles"></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <span className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </span>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
