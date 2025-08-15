import { Card } from "@/components/ui/card";
import Image from "next/image";
export default function DiagnosisResult({
  diseaseInfo,
  imagePreview,
}: {
  diseaseInfo: any | undefined;
  imagePreview: string | undefined;
}) {
  console.log(diseaseInfo, "disease info");
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
