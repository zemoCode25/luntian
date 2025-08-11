import React from "react";
import { PawPrint } from "lucide-react";
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
    </header>
  );
}
