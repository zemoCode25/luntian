import {
  ModeToggle,
  ModeToggle as ThemeModeToggle,
} from "@/components/utils/ThemeModeToggle";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeaderDialog({
  closeHeaderDialog,
}: {
  closeHeaderDialog: () => void;
}) {
  return (
    <header className="fixed top-0 bottom-0 left-0 right-0 flex justify-between z-50 bg-main py-4 px-7 dark:bg-green-950">
      <div>
        <ThemeModeToggle />
      </div>

      <ul className="flex flex-col justify-between gap-4 h-[30%] items-center">
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
      <Button
        onClick={closeHeaderDialog}
        className="bg-transparent text-accent cursor-pointer hover:bg-transparent size-8 shadow-none"
        size="icon"
        asChild
      >
        <X className="text-accent" />
      </Button>
    </header>
  );
}
