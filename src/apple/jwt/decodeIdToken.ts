import jwt from "jsonwebtoken";
import type { AppleAccessToken } from "../types/access-token";
import type { AppleId } from "../types/id";

export function decodeIdToken(token: AppleAccessToken["id_token"]): AppleId {
  return jwt.decode(token) as AppleId;
}
