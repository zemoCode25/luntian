"use client";
import DragFile from "./DragFile";
import DiagnosisResult from "./DiagnosisResult";
import { Card } from "@/components/ui/card";
import {
  getPlantDisease,
  getPlantDiseaseInfo,
} from "@/lib/actions/get-plant-disease";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { TDiseaseData } from "@/types/TDiseaseData";

export default function DiagnosisPanel() {
  const [diseaseInfo, setDiseaseInfo] = useState<TDiseaseData | undefined>(
    undefined,
  );
  const [imagePreview, setImagePreview] = useState<string | undefined>(
    undefined,
  );

  const diseaseReport = useMutation({
    mutationFn: getPlantDiseaseInfo,
  });

  // Mutation to handle plant disease detection
  // successful mutation will trigger disease report
  const plantDisease = useMutation({
    mutationFn: getPlantDisease,
    onSuccess: async (result) => {
      if (result) {
        console.log(result, "result");
        const diseaseName = result[0].label;
        const diseaseInfo = await diseaseReport.mutateAsync(diseaseName);
        console.log(diseaseReport.isError, "disease info");
        setDiseaseInfo(diseaseInfo);
      }
    },
  });

  const handleChange = async (file: File | File[]) => {
    const singleFile = Array.isArray(file) ? file[0] : file;
    plantDisease.mutate(singleFile ?? null);
    const url = URL.createObjectURL(singleFile);
    setImagePreview(url);
  };

  return (
    <section className="mx-auto flex w-[95%] max-w-[1280px] flex-col">
      <div className="mt-7 mb-3 flex flex-col items-center">
        <h1 className="text-4xl font-bold">Detect Possible Plant Disease</h1>
        <p className="mb-4 text-sm dark:text-gray-400">
          Upload a photo and let AI identify signs of potential illness in your
          plants.
        </p>
      </div>
      <div className="flex justify-between gap-10">
        {/* user disclaimer */}
        <div className="flex flex-col">
          <Card className="bg-accent/10 mb-4 flex w-fit max-w-[25rem] flex-col !gap-0 rounded-md p-4 dark:bg-green-900">
            <span className="block font-bold uppercase">important note:</span>
            <p className="w-full max-w-[40rem]">
              Results are for guidance only and{" "}
              <span className="font-bold uppercase">not</span> a definitive
              diagnosis.
              <br />
              <strong className="text-green-800 dark:text-green-400">
                Always seek professional veterinary advice.
              </strong>
            </p>
          </Card>
          <DragFile handleChange={handleChange} />
        </div>
        <Card className="border-accent mb-4 flex max-h-[50rem] min-h-[40rem] w-8/10 flex-col items-center overflow-y-scroll bg-transparent p-10">
          {plantDisease.isPending && !diseaseReport.isPending && (
            <h1>Identifying disease...</h1>
          )}

          {diseaseReport.isPending && <h1>Generating report...</h1>}

          {!plantDisease.isPending && !diseaseReport.isPending && (
            <DiagnosisResult
              diseaseInfo={diseaseInfo}
              imagePreview={imagePreview}
            />
          )}
        </Card>
      </div>
    </section>
  );
}
