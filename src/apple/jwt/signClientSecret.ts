import jwt from "jsonwebtoken";

export function signClientSecret(
  teamId: string,
  clientId: string,
  keyId: string,
  privateKey: string,
): string {
  return jwt.sign({
    iss: teamId,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 15777000, // ~6 months
    aud: "https://appleid.apple.com",
    sub: clientId,
  }, privateKey, {
    algorithm: "ES256",
    keyid: keyId,
  });
}
