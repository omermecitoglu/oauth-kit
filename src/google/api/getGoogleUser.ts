import type { GoogleAccessToken } from "../types/access-token";
import type { GoogleUser } from "../types/user";

type GetGoogleUserError = {
  error: string,
  error_description: string,
};

export async function getGoogleUser(accessToken: GoogleAccessToken["access_token"]): Promise<GoogleUser> {
  const response = await fetch(new URL("/oauth2/v3/userinfo", "https://www.googleapis.com"), {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await response.json() as GoogleUser | GetGoogleUserError;
  if ("error" in data) throw new Error(`${data.error_description} (${data.error})`);
  return data;
}
