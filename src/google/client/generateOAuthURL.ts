import { encodeState } from "../../utils/encodeState";

export function generateOAuthURL(clientId: string, origin: string, callbackEndpoint: string, locale: string): string {
  const scopes = [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
    "openid",
  ];
  const csrfState = Math.random().toString(36).substring(2);
  const url = new URL("/o/oauth2/v2/auth", "https://accounts.google.com");
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("redirect_uri", new URL(callbackEndpoint, origin).toString());
  url.searchParams.set("response_type", "code");
  url.searchParams.set("scope", scopes.join(" "));
  url.searchParams.set("access_type", "offline");
  url.searchParams.set("state", encodeState({
    code: csrfState,
    locale,
  }));
  return url.toString();
}
