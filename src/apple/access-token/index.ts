import type { AppleAccessToken } from "../types/access-token";

type AppleCreateAccessTokenError = {
  error: "invalid_client",
};

export async function createAccessToken(
  clientId: string,
  clientSecret: string,
  code: string,
  redirectURI: string,
): Promise<AppleAccessToken> {
  const url = new URL("/auth/token", "https://appleid.apple.com");
  const searchParams = new URLSearchParams();
  searchParams.set("client_id", clientId);
  searchParams.set("client_secret", clientSecret);
  searchParams.set("code", code);
  searchParams.set("grant_type", "authorization_code");
  searchParams.set("redirect_uri", redirectURI);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: searchParams.toString(),
  });
  const data = await response.json() as AppleAccessToken | AppleCreateAccessTokenError;
  if ("error" in data) throw new Error(data.error);
  return data;
}
