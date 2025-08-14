import React from "react";
import { PawPrint } from "lucide-react";
import { ModeToggle as ThemeModeToggle } from "@/components/utils/ThemeModeToggle";
import Link from "next/link";
import Image from "next/image";
import { Leaf } from "lucide-react";

export default function Header() {
  return (
    <header className="border-gray-b-300 dark:border-bgray-600 flex items-center justify-center border-b">
      <section className="flex w-full max-w-[1280px] items-center justify-between px-8 py-4">
        <Link href={"/"}>
          <span className="flex items-center justify-center gap-1">
            <div className="relative h-5 w-5 rounded-full">
              <Image
                src="/images/luntian_logo.png"
                fill
                alt="Description"
                className="rounded-full object-cover"
              />
            </div>
            <p className="dark:text-main h-fit text-lg leading-none font-bold">
              Luntian
            </p>
          </span>
        </Link>
        <ul className="flex justify-between gap-4">
          <Link href={"/"}>
            <li className="hover:bg-accent cursor-pointer rounded-md px-4 py-2 hover:text-gray-100">
              Home
            </li>
          </Link>
          <Link href={"/about-us"}>
            <li className="hover:bg-accent cursor-pointer rounded-md px-4 py-2 hover:text-gray-100">
              About Us
            </li>
          </Link>
          <Link href={"/queries"}>
            <li className="hover:bg-accent cursor-pointer rounded-md px-4 py-2 hover:text-gray-100">
              Queries
            </li>
          </Link>
        </ul>
        <ThemeModeToggle />
      </section>
    </header>
  );
}
