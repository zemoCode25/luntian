import { TDiseaseData } from "@/types/TDiseaseData";

export async function getPlantDisease(
  file: File | null,
): Promise<{ name: string; label: string }[]> {
  if (!file) {
    return [{ name: "No file selected", label: "No file selected" }];
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

export async function getPlantDiseaseInfo(
  diseaseName: string,
): Promise<TDiseaseData> {
  try {
    const response = await fetch(`/api/generate-report`, {
      method: "POST",
      body: JSON.stringify({ prompt: diseaseName }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.statusText}`);
    }

    console.log("Fetching plant disease info for:", diseaseName);

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching plant disease info:", error);
    throw error;
  }
}
