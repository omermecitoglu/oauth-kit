export function generateOAuthURL(clientId: string, origin: string, callbackEndpoint: string, locale: string): string {
  const scopes = [
    "email",
    "name",
  ];
  const csrfState = Math.random().toString(36).substring(2);
  const url = new URL("/auth/authorize", "https://appleid.apple.com");
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("redirect_uri", new URL(callbackEndpoint, origin).toString());
  url.searchParams.set("response_type", "code");
  url.searchParams.set("response_mode", "form_post");
  url.searchParams.set("scope", scopes.join(" "));
  url.searchParams.set("state", [`code:${csrfState}`, `locale:${locale}`].join(";"));
  return url.toString();
}
