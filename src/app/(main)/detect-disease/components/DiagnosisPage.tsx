"use client";
import React from "react";
import Header from "@/app/(home)/components/Header";
import { useDeviceType } from "@/hooks/useDeviceType";
import MobileHeader from "@/app/(home)/components/MobileHeader";
import DiagnosisPanel from "./DiagnosisPanel";

export default function DiagnosisPage() {
  const screenSize = useDeviceType();
  return (
    <div className="bg-main dark:bg-green-950">
      {screenSize === "mobile" ? <MobileHeader /> : <Header />}
      <DiagnosisPanel />
    </div>
  );
}
