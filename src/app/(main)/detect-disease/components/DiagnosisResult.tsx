import { Card } from "@/components/ui/card";
import { TDiseaseClassification } from "@/types/TDiagnosisDetails";
import Image from "next/image";
export default function DiagnosisResult({
  diagnosis,
  imagePreview,
}: {
  diagnosis: TDiseaseClassification | undefined;
  imagePreview: string | undefined;
}) {
  return (
    <Card className="border-accent min-h-[40rem] w-8/10 bg-transparent">
      <Image
        alt="Image"
        width={50}
        height={50}
        src={imagePreview || "/images/rabbit_consulted.jpg"}
      ></Image>
    </Card>
  );
}

export function DiagnosisCard({
  diagnosis,
}: {
  diagnosis: TDiseaseClassification;
}) {
  return (
    <Card>
      <h1>{diagnosis.label}</h1>
      <p>{diagnosis.score}</p>
    </Card>
  );
}
