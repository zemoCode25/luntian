import React from "react";
import { PawPrint } from "lucide-react";
import { ModeToggle as ThemeModeToggle } from "@/components/utils/ThemeModeToggle";
export default function Header() {
  return (
    <header>
      <span>
        <PawPrint />
        PetVision
      </span>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Queries</li>
      </ul>
      <ThemeModeToggle />
    </header>
  );
}
