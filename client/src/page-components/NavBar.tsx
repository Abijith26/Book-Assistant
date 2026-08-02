"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn as combineClasses } from "@/lib/utils";

const navItems = [
  { name: "Library", href: "/" },
  { name: "Add New Book", href: "/books/new" },
];

function NavBar() {
  const pathname = usePathname();
  return (
    <header className="w-full fixed z-50 bg-('--bg-primary')">
      <div className="wrapper navbar-height py-4 flex justify-between items-center">
        <Link href="/" className="flex gap-0.5 items-center">
          <Image
            src="/logo.png"
            alt="Know-The-Book Logo"
            width={42}
            height={26}
          />
          <span className="logo-text">Know-The-Book</span>
        </Link>
        <nav className="w-fit flex gap-7.5 items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={combineClasses(
                  "nav-link-base",
                  isActive ? "nav-link-active" : "text-black hover:opacity-70",
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
