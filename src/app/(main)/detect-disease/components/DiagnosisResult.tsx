import { Card } from "@/components/ui/card";
import { TDiseaseClassification } from "@/types/TDiagnosisDetails";
export default function DiagnosisResult({
  diagnosisList,
}: {
  diagnosisList: TDiseaseClassification[] | undefined;
}) {
  return (
    <Card className="border-accent min-h-[40rem] w-8/10 bg-transparent">
      {diagnosisList?.map((diagnosis, index) => (
        <DiagnosisCard diagnosis={diagnosis} key={index} />
      ))}
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
