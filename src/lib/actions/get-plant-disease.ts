export async function getPlantDisease(file: File | null): Promise<any> {
  if (!file) {
    return "No file selected";
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

export async function getPlantDiseaseInfo(diseaseName: string): Promise<any> {
  try {
    const response = await fetch(`/api/disease/${diseaseName}`, {
      method: "POST",
      body: JSON.stringify({ prompt: diseaseName }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching plant disease info:", error);
    throw error;
  }
}
