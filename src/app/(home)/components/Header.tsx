import React from "react";
import { PawPrint } from "lucide-react";
import { ModeToggle as ThemeModeToggle } from "@/components/utils/ThemeModeToggle";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex p-8 w-full justify-between dark:bg-green-900">
      <Link href={"/"}>
        <span className="flex justify-between gap-2">
          <PawPrint color="#568d6f" />
          <span className="text-lg font-bold">PetVision</span>
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
    </header>
  );
}
