import { describe, expect, it } from "vitest";
import { generateOAuthURL } from "./generateOAuthURL";

describe("generateOAuthURL", () => {
  it("should generate a valid OAuth URL with given parameters", () => {
    const output = generateOAuthURL("CLIENT_ID", "https://example.com", "/auth/apple", "en");
    const url = new URL(output);
    expect(url.origin).toBe("https://appleid.apple.com");
    expect(url.pathname).toBe("/auth/authorize");
    expect(url.searchParams.get("client_id")).toBe("CLIENT_ID");
    expect(url.searchParams.get("redirect_uri")).toBe("https://example.com/auth/apple");
    expect(url.searchParams.get("scope")).toBe("email name");
    expect(url.searchParams.get("state")).toMatch(/^code:[^;]+;locale:en$/);
  });
});
