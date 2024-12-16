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
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-sm md:text-xl ",
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
              <HoveredLink href="/courses">Strings of Harmony </HoveredLink>
              <HoveredLink href="/courses">Piano Pathways</HoveredLink>
              <HoveredLink href="/courses">Guitar Groove Academy</HoveredLink>
              <HoveredLink href="/courses">The Bow and Strings</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Instruments">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Harmony"
                href="https://algochurn.com"
                src="https://images.pexels.com/photos/9005462/pexels-photo-9005462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                description="Learn Guitar/Violin/Piano Mastery"
              />
              <ProductItem
                title="Piano"
                href="https://tailwindmasterkit.com"
                src="https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=800"
                description="From Beginner to Virtuoso"
              />
              <ProductItem
                title="Guitar"
                href="https://gomoonbeam.com"
                src="https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800"
                description="Acoustic and Electric Guitar Lessons"
              />
              <ProductItem
                title="Violin"
                href="https://userogue.com"
                src="https://images.pexels.com/photos/34221/violin-musical-instrument-music-sound.jpg?auto=compress&cs=tinysrgb&w=800"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <Link href={"/contact"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact"
            ></MenuItem>
          </Link>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
