"use client";
import React, { SetStateAction, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Card } from "@/components/ui/card";
import { Camera } from "lucide-react";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function DragFile({
  handleChange,
}: {
  handleChange: (file: File | File[]) => void;
}) {
  return (
    <div className="w-full lg:max-w-[35rem]">
      <FileUploader
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        maxSize={10}
      >
        <Card className="border-accent flex flex-col items-center justify-center gap-0 border border-dashed bg-transparent p-4 py-20 text-gray-600">
          <Camera size={30} />
          <h2 className="text-2xl font-semibold dark:text-white">
            Drop your image here
          </h2>
          <p className="text-base text-gray-400">or click to browse</p>
          <small className="text-gray-400">PNG, JPEG with maximum 10mb</small>
        </Card>
      </FileUploader>
    </div>
  );
}
