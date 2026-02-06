export async function fetchUserPicture(url?: string): Promise<File | null> {
  if (!url) return null;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
  const buffer = await response.arrayBuffer();
  const file = new File([buffer], "image", { type: "image/png" });
  return file;
}
