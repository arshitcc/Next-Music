"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div>
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-xl",
          className
        )}
      >
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>
          <MenuItem setActive={setActive} active={active} item="Courses">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#">Strings of Harmony </HoveredLink>
              <HoveredLink href="#">Piano Pathways</HoveredLink>
              <HoveredLink href="#">Guitar Groove Academy</HoveredLink>
              <HoveredLink href="#">The Bow and Strings</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Instruments">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Harmony"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Learn Guitar/Violin/Piano Mastery"
              />
              <ProductItem
                title="Piano"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="From Beginner to Virtuoso"
              />
              <ProductItem
                title="Guitar"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Acoustic and Electric Guitar Lessons"
              />
              <ProductItem
                title="Violin"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact Us"
            ></MenuItem>
          </Link>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
