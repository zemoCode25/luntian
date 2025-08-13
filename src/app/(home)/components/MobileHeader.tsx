import React from "react";
import { useState } from "react";
import { PawPrint } from "lucide-react";
import { ModeToggle as ThemeModeToggle } from "@/components/utils/ThemeModeToggle";
import HeaderDialog from "./HeaderDialog";
import Link from "next/link";

export default function MobileHeader() {
  const [isHeaderDialogOpen, setHeaderDialogOpen] = useState(false);

  function handleToggle() {
    setHeaderDialogOpen((prevHeaderDialog) => !prevHeaderDialog);
  }
  return (
    <header className="flex items-center justify-center border-b border-gray-b-300 dark:border-bgray-600">
      <section className="flex px-8 py-4 w-full max-w-[1280px] justify-between items-center">
        <Link href={"/"}>
          <span className="flex justify-between gap-2">
            <PawPrint color="#568d6f" />
            <span className="text-lg font-bold">PetVision</span>
          </span>
        </Link>
        <button
          onClick={handleToggle}
          className="flex flex-col items-center gap-1 cursor-pointer"
        >
          <span className="block h-1 w-6 bg-accent"></span>
          <span className="block h-1 w-6 bg-accent"></span>
          <span className="block h-1 w-6 bg-accent"></span>
        </button>
      </section>
      <HeaderDialog isHeaderDialogOpen={isHeaderDialogOpen} />
    </header>
  );
}
