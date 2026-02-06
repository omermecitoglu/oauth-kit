import { describe, expect, it } from "vitest";
import { generateOAuthURL } from "./generateOAuthURL";

describe("generateOAuthURL", () => {
  it("should generate a valid OAuth URL with given parameters", () => {
    const output = generateOAuthURL("CLIENT_ID", "https://example.com", "/auth/google", "en");
    const url = new URL(output);
    expect(url.origin).toBe("https://accounts.google.com");
    expect(url.pathname).toBe("/o/oauth2/v2/auth");
    expect(url.searchParams.get("client_id")).toBe("CLIENT_ID");
    expect(url.searchParams.get("redirect_uri")).toBe("https://example.com/auth/google");
    expect(url.searchParams.get("response_type")).toBe("code");
    expect(url.searchParams.get("access_type")).toBe("offline");
    expect(url.searchParams.get("scope")).toBe([
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
      "openid",
    ].join(" "));
    expect(url.searchParams.get("state")).toMatch(/^code:[^;]+;locale:en$/);
  });
});
