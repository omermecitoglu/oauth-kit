export function encodeState(data: Record<string, string>): string {
  return Object.entries(data).map(([key, value]) => `${key}:${value}`).join(";");
}
