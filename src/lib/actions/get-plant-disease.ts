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
