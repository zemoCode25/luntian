"use client";
import DragFile from "./DragFile";
import DiagnosisResult from "./DiagnosisResult";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function DiagnosisPanel() {
  const [file, setFile] = useState<File | null>(null);

  console.log(process.env.HF_TOKEN);

  async function animalDisease(file: File | null) {
    if (!file) {
      return "No file selected";
    }

    const response = await fetch("/api/disease", {
      method: "POST",
      body: file, // send raw file buffer
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  }

  async function fetchPlantDisease() {
    const result = await animalDisease(file);
    console.log(result);
  }

  useEffect(() => {
    if (!file) return;
    console.log(file.type);
    fetchPlantDisease();
  }, [file]);
  return (
    <section className="flex flex-col w-full mx-auto max-w-[1280px]">
      <div className="flex flex-col items-center mt-7 mb-3">
        <h1 className="text-4xl font-bold">Detect Possible Plant Disease</h1>
        <p className="dark:text-gray-400 mb-4 text-sm">
          Upload a photo and let AI identify signs of potential illness in your
          plants.
        </p>
      </div>
      <div className="flex justify-between gap-10">
        {/* user disclaimer */}
        <div className="flex flex-col">
          <Card className="dark:bg-green-900 rounded-md flex flex-col w-fit max-w-[25rem] p-4 !gap-0 mb-4 bg-accent/10">
            <span className="uppercase block font-bold">important note:</span>
            <p className="w-full max-w-[40rem]">
              Results are for guidance only and{" "}
              <span className="uppercase font-bold">not</span> a definitive
              diagnosis.
              <br />
              <strong className="text-green-800 dark:text-green-400">
                Always seek professional veterinary advice.
              </strong>
            </p>
          </Card>
          <DragFile setFile={setFile} />
        </div>
        <DiagnosisResult />
      </div>
    </section>
  );
}
