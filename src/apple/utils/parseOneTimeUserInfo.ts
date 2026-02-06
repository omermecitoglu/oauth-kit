import type { AppleUser } from "../types/user";

export function parseOneTimeUserInfo(input: unknown): AppleUser | null {
  if (typeof input !== "string") return null;
  return JSON.parse(input);
}
