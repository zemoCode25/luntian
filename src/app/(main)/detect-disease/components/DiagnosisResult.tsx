import { Card } from "@/components/ui/card";
import Image from "next/image";
import sampleData from "@/lib/sampleData";
export default function DiagnosisResult({
  diseaseInfo,
  imagePreview,
}: {
  diseaseInfo: any | undefined;
  imagePreview: string | undefined;
}) {
  console.log(diseaseInfo, "disease info");

  const {
    diseaseName,
    description,
    possibleCauses,
    remedyTreatment,
    preventionTips,
  } = sampleData;
  sampleData;
  return (
    <Card className="border-accent mb-4 flex max-h-[50rem] min-h-[40rem] w-8/10 flex-col items-center overflow-y-scroll bg-transparent p-10">
      <picture className="border-accent relative mb-4 min-h-50 w-100 border-2">
        <Image
          alt="Image"
          fill
          src={imagePreview || "/images/rabbit_consulted.jpg"}
        ></Image>
      </picture>
      <div className="flex w-full flex-col items-start">
        <header className="mb-4 w-full">
          <h1 className="mb-2 text-lg">
            <span className="text font-semibold">Disease Name: </span>
            {diseaseName.common}
            <span className="italic">({diseaseName.scientific})</span>
          </h1>
        </header>
        <section className="mb-4 w-full">
          <h2 className="mb-2 text-lg font-semibold">Overview</h2>
          <p className="mb-4 w-full">{description.overview}</p>
        </section>
        <section className="mb-4 w-full">
          <h2 className="mb-2 text-lg font-semibold">Symptoms</h2>
          <ul className="list-disc pl-5">
            {description.symptoms.map((symptom, index) => (
              <li key={index}>{symptom}</li>
            ))}
          </ul>
        </section>
        {/* Possible Causes */}
        <section className="mb-4 w-full">
          <h2 className="mb-2 text-lg font-semibold">Possible Causes</h2>
          <article className="mb-2">
            <h3 className="font-semibold">Environmental Causes:</h3>
            <ul className="list-disc pl-5">
              {possibleCauses.environmentalConditions.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
          </article>
          <article className="mb-2">
            <p>
              <strong>Pathogen Type:</strong> {possibleCauses.pathogenType}
            </p>
          </article>
          <article className="mb-2">
            <h3 className="font-semibold">Cultivation Practices:</h3>
            <ul className="list-disc pl-5">
              {possibleCauses.cultivationPractices.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
          </article>
        </section>
        {/* Remedy Treatment */}
        <section className="mb-4 w-full">
          <h2 className="mb-2 text-lg font-semibold">Remedy Treatment</h2>
          <article className="mb-2 flex flex-col">
            <h3 className="font-semibold">Immediate Action:</h3>
            <p>{remedyTreatment.immediateAction}</p>
          </article>
          <article className="mb-2 flex flex-col">
            <h3 className="font-semibold">Organic Options:</h3>
            <ul className="list-disc pl-5">
              {remedyTreatment.organicOptions.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
          </article>
          <article className="mb-2 flex flex-col">
            <h3 className="font-semibold">Chemical Options:</h3>
            <ul className="list-disc pl-5">
              {remedyTreatment.chemicalOptions.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
          </article>
        </section>
        <section className="mb-4 w-full">
          <h2 className="mb-2 text-lg font-semibold">Prevention Tips</h2>
          <article className="mb-2">
            <ul className="list-disc pl-5">
              {preventionTips.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    </Card>
  );
}
