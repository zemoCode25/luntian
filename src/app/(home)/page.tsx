import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/dashboard"}>Dashboard!</Link>
      <p className="bg-amber-100">MAKULAY KONG MUNDO</p>
    </div>
  );
}
