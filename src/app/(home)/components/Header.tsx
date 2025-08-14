import React from "react";
import { PawPrint } from "lucide-react";
import { ModeToggle as ThemeModeToggle } from "@/components/utils/ThemeModeToggle";
import Link from "next/link";
import Image from "next/image";
import { Leaf } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-center border-b border-gray-b-300 dark:border-bgray-600">
      <section className="flex px-8 py-4 w-full max-w-[1280px] justify-between items-center">
        <Link href={"/"}>
          <span className="flex items-center justify-center gap-1">
            <div className="w-5 h-5 relative rounded-full">
              <Image
                src="/images/luntian_logo.png"
                fill
                alt="Description"
                className="object-cover rounded-full"
              />
            </div>
            <p className="text-lg font-bold dark:text-main leading-none h-fit">
              Luntian
            </p>
          </span>
        </Link>
        <ul className="flex justify-between gap-4">
          <Link href={"/"}>
            <li className="px-4 py-2 hover:bg-accent hover:text-gray-100 rounded-md cursor-pointer">
              Home
            </li>
          </Link>
          <Link href={"/about-us"}>
            <li className="px-4 py-2 hover:bg-accent hover:text-gray-100 rounded-md cursor-pointer">
              About Us
            </li>
          </Link>
          <Link href={"/queries"}>
            <li className="px-4 py-2 hover:bg-accent hover:text-gray-100 rounded-md cursor-pointer">
              Queries
            </li>
          </Link>
        </ul>
        <ThemeModeToggle />
      </section>
    </header>
  );
}
