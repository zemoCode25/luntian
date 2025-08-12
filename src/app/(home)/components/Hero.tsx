import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col gap-4 lg:flex-row px-8 py-6 w-full h-[calc(100dvh-4.6rem)] max-w-[1280px] mx-auto justify-between items-center">
      <div className="flex flex-col gap-2 items-center lg:items-baseline">
        <h1 className="text-accent dark:text-main text-4xl font-bold text-center md:text-6xl lg:text-left">
          Detect Animal <br />
          Diseases in Seconds
        </h1>
        <p className="w-full text-gray-600 max-w-[30rem] dark:text-gray-300 text-center lg:text-left text-sm lg:text-base">
          Harness the power of AI to identify potential diseases in pets or
          livestock. Simply upload a photo, get instant diagnosis.
        </p>
        <Button className="w-fit bg-accent py-6 px-8 hover:bg-green-700 cursor-pointer">
          Get Started
        </Button>
      </div>
      <div>
        <div className="vw- lg:min-w-[30rem] lg:h-[300px] min-w-[25rem] h-[13rem] relative">
          <Image
            src="/images/rabbit_consulted.jpg"
            fill
            alt="Description"
            className="object-cover rounded-3xl shadow-xl dark:shadow-lg shadow-green-800/10 dark:shadow-green-700"
          />
        </div>
      </div>
    </section>
  );
}
