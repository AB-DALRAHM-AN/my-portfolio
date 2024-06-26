'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavItems } from "@/data/NavLinks";

export const NavLinks = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-5 mr-3">
      {NavItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(
            "text-lg font-semibold hover:text-primary transition-colors duration-300 px-4 py-2 rounded-md bg-card hover:bg-background/70",
            pathname === item.href && "text-primary"
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};
