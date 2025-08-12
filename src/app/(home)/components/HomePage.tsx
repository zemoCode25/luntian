"use client";
import React from "react";
import Header from "./Header";
import { useDeviceType } from "@/hooks/useDeviceType";
import MobileHeader from "./MobileHeader";
import Hero from "./Hero";

export default function HomePage() {
  const screenSize = useDeviceType();
  return (
    <div className="bg-main dark:bg-green-950">
      {screenSize === "mobile" ? <MobileHeader /> : <Header />}
      <Hero />
    </div>
  );
}
