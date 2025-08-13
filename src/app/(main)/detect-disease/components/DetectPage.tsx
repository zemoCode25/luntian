import DiagnosisPanel from "./DiagnosisPanel";

export default function DetectPage() {
  return (
    <section className="flex flex-col items-center justify-center mx-auto max-w-[1280px]">
      <div className="flex flex-col items-center mt-5">
        <h1 className="text-4xl font-bold">Detect Possible Animal Disease</h1>
        <p className="dark:text-gray-400 mb-4 text-sm">
          Upload a photo and let AI instantly identify signs of potential
          illness in your animal.
        </p>
        {/* user disclaimer */}
        <div className="dark:bg-green-900 bg-accent text-white rounded-md flex flex-col items-center w-fit max-w-[35rem] p-4">
          <span className="uppercase block font-bold">important note:</span>
          <p className="w-full max-w-[40rem] text-center">
            Results are for guidance only and not a definitive diagnosis. <br />
            <strong className="text-green-200">
              Always seek professional veterinary advice.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
