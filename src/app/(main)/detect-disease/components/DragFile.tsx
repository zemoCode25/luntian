"use client";
import React, { SetStateAction, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Card } from "@/components/ui/card";
import { Camera } from "lucide-react";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function DragFile({
  setFile,
}: {
  setFile: React.Dispatch<SetStateAction<File | null>>;
}) {
  const handleChange = (file: File | File[]) => {
    if (Array.isArray(file)) {
      // If multiple files are passed, pick the first
      setFile(file[0]);
    } else {
      setFile(file);
    }
  };
  return (
    <div className="max-w-[25rem]">
      <FileUploader
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        maxSize={10}
      >
        <Card className="flex flex-col text-gray-600 items-center justify-center p-4 bg-transparent border border-dashed border-accent gap-0 py-20">
          <Camera size={30} />
          <h2 className="font-semibold text-2xl dark:text-white">
            Drop your image here
          </h2>
          <p className="text-base text-gray-400">or click to browse</p>
          <small className="text-gray-400">PNG, JPEG with maximum 10mb</small>
        </Card>
      </FileUploader>
    </div>
  );
}
