import DragFile from "./DragFile";
import { Card } from "@/components/ui/card";

export default function DiagnosisPanel() {
  return (
    <section className="flex flex-col w-full mx-auto max-w-[1280px]">
      <div className="flex flex-col items-center mt-5">
        <h1 className="text-4xl font-bold">Detect Possible Animal Disease</h1>
        <p className="dark:text-gray-400 mb-4 text-sm">
          Upload a photo and let AI instantly identify signs of potential
          illness in your animal.
        </p>
      </div>
      {/* user disclaimer */}
      <Card className="dark:bg-green-900 rounded-md flex flex-col w-fit max-w-[25rem] p-4 !gap-0 mb-4 bg-accent/10">
        <span className="uppercase block font-bold">important note:</span>
        <p className="w-full max-w-[40rem]">
          Results are for guidance only and not a definitive diagnosis. <br />
          <strong className="text-green-800 dark:text-green-400">
            Always seek professional veterinary advice.
          </strong>
        </p>
      </Card>
      <DragFile />
    </section>
  );
}
