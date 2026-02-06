export type AppleId = {
  iss: string,
  aud: string,
  exp: number,
  iat: number,
  sub: string,
  at_hash: string,
  email: string,
  email_verified: boolean,
  auth_time: number,
  nonce_supported: boolean,
};
