import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex px-8 py-4 w-full max-w-[1280px] h-[30rem] mx-auto justify-between items-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-accent dark:text-main text-6xl font-bold">
          Detect Animal <br />
          Diseases in Seconds
        </h1>
        <p className="w-full max-w-[35rem] dark:text-gray-300">
          Harness the power of AI to quickly identify potential diseases in pets
          or livestock. Simply upload a photo, get instant diagnosis.
        </p>
        <Button className="w-fit bg-accent py-6 px-8 hover:bg-green-700 cursor-pointer">
          Get Started
        </Button>
      </div>
      <div>
        <span className="w-[90%] min-w-[20rem] h-[300px] relative">
          <Image
            src="/images/dog_consulted.webp"
            fill={true}
            alt="Description"
            className="object-contain"
          />
        </span>
      </div>
    </section>
  );
}
