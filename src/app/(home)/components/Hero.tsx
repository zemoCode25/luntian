import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col gap-4 lg:flex-row px-4 py-6 w-full h-[calc(100dvh-4.6rem)] max-w-[1280px] mx-auto justify-between items-center">
      <div className="flex flex-col gap-4 items-center lg:items-baseline p-4">
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
      {/* animal images */}
      <div className="flex flex-col items-center justify-center gap-4 w-full lg:w-auto">
        <div className="flex gap-4 w-full items-center justify-center">
          {/* cat image */}

          <div className="lg:max-w-[15rem] lg:h-[150px] md:max-w-[17.5rem] sm:max-w-[12rem] md:h-[10rem] w-full max-w-[12rem] h-[8rem] relative">
            <Image
              src="/images/cat_consulted.jpg"
              fill
              alt="Description"
              className="object-cover rounded-xl border-2 border-accent dark:shadow-md shadow-green-800/10 dark:shadow-accent"
            />
          </div>
          {/* dog image */}
          <div className="lg:max-w-[15rem] lg:h-[150px] md:max-w-[17.5rem] sm:max-w-[12rem] md:h-[10rem] w-[100%] max-w-[12rem] h-[8rem] relative">
            <Image
              src="/images/dog_consulted.webp"
              fill
              alt="Description"
              className="object-cover rounded-xl border-2 border-accent dark:shadow-md shadow-green-800/10 dark:shadow-accent"
            />
          </div>
        </div>
        {/* rabbit image */}
        <div className="lg:min-w-[30rem] lg:h-[17rem] md:max-w-[35rem] md:min-h-[15rem] max-w-[25rem] w-full h-[10rem] relative">
          <Image
            src="/images/rabbit_consulted.jpg"
            fill
            alt="Description"
            className="object-cover rounded-3xl border-2 border-accent dark:shadow-lg  dark:shadow-accent"
          />
        </div>
      </div>
    </section>
  );
}
