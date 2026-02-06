export function decodeState(state: string): Record<string, string> {
  const entries = state.split(";").map(entry => {
    const [key, value] = entry.split(":");
    return [key, value] as const;
  });
  return Object.fromEntries(entries);
}
