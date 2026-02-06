# oauth-kit

[![npm version](https://img.shields.io/npm/v/@omer-x/oauth-kit?logo=npm&logoColor=CB3837&color=CB3837)](https://www.npmjs.com/package/@omer-x/oauth-kit)
[![npm downloads](https://img.shields.io/npm/dm/@omer-x/oauth-kit?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjQgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTI4OCAzMmMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMmwwIDI0Mi43LTczLjQtNzMuNGMtMTIuNS0xMi41LTMyLjgtMTIuNS00NS4zIDBzLTEyLjUgMzIuOCAwIDQ1LjNsMTI4IDEyOGMxMi41IDEyLjUgMzIuOCAxMi41IDQ1LjMgMGwxMjgtMTI4YzEyLjUtMTIuNSAxMi41LTMyLjggMC00NS4zcy0zMi44LTEyLjUtNDUuMyAwTDI4OCAyNzQuNyAyODggMzJ6TTY0IDM1MmMtMzUuMyAwLTY0IDI4LjctNjQgNjRsMCAzMmMwIDM1LjMgMjguNyA2NCA2NCA2NGwzODQgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTMyYzAtMzUuMy0yOC43LTY0LTY0LTY0bC0xMDEuNSAwLTQ1LjMgNDUuM2MtMjUgMjUtNjUuNSAyNS05MC41IDBMMTY1LjUgMzUyIDY0IDM1MnptMzY4IDU2YTI0IDI0IDAgMSAxIDAgNDggMjQgMjQgMCAxIDEgMC00OHoiIGZpbGw9IiMwMDc4MjAiIC8+PC9zdmc+&color=007820)](https://www.npmjs.com/package/@omer-x/oauth-kit)
[![codecov](https://codecov.io/gh/omermecitoglu/oauth-kit/branch/main/graph/badge.svg)](https://codecov.io/gh/omermecitoglu/oauth-kit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjQgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTM4NCAzMmwxMjggMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMkwzOTguNCA5NmMtNS4yIDI1LjgtMjIuOSA0Ny4xLTQ2LjQgNTcuM0wzNTIgNDQ4bDE2MCAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMybC0xOTIgMC0xOTIgMGMtMTcuNyAwLTMyLTE0LjMtMzItMzJzMTQuMy0zMiAzMi0zMmwxNjAgMCAwLTI5NC43Yy0yMy41LTEwLjMtNDEuMi0zMS42LTQ2LjQtNTcuM0wxMjggOTZjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJsMTI4IDBjMTQuNi0xOS40IDM3LjgtMzIgNjQtMzJzNDkuNCAxMi42IDY0IDMyem01NS42IDI4OGwxNDQuOSAwTDUxMiAxOTUuOCA0MzkuNiAzMjB6TTUxMiA0MTZjLTYyLjkgMC0xMTUuMi0zNC0xMjYtNzguOWMtMi42LTExIDEtMjIuMyA2LjctMzIuMWw5NS4yLTE2My4yYzUtOC42IDE0LjItMTMuOCAyNC4xLTEzLjhzMTkuMSA1LjMgMjQuMSAxMy44bDk1LjIgMTYzLjJjNS43IDkuOCA5LjMgMjEuMSA2LjcgMzIuMUM2MjcuMiAzODIgNTc0LjkgNDE2IDUxMiA0MTZ6TTEyNi44IDE5NS44TDU0LjQgMzIwbDE0NC45IDBMMTI2LjggMTk1Ljh6TS45IDMzNy4xYy0yLjYtMTEgMS0yMi4zIDYuNy0zMi4xbDk1LjItMTYzLjJjNS04LjYgMTQuMi0xMy44IDI0LjEtMTMuOHMxOS4xIDUuMyAyNC4xIDEzLjhsOTUuMiAxNjMuMmM1LjcgOS44IDkuMyAyMS4xIDYuNyAzMi4xQzI0MiAzODIgMTg5LjcgNDE2IDEyNi44IDQxNlMxMS43IDM4MiAuOSAzMzcuMXoiIGZpbGw9IiNEMEE4MUMiIC8+PC9zdmc+)](https://opensource.org/licenses/MIT)
[![GitHub last commit](https://img.shields.io/github/last-commit/omermecitoglu/oauth-kit?color=c977be&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjQgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTMyMCAzMzZhODAgODAgMCAxIDAgMC0xNjAgODAgODAgMCAxIDAgMCAxNjB6bTE1Ni44LTQ4QzQ2MiAzNjEgMzk3LjQgNDE2IDMyMCA0MTZzLTE0Mi01NS0xNTYuOC0xMjhMMzIgMjg4Yy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMybDEzMS4yIDBDMTc4IDE1MSAyNDIuNiA5NiAzMjAgOTZzMTQyIDU1IDE1Ni44IDEyOEw2MDggMjI0YzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMybC0xMzEuMiAweiIgZmlsbD0iI0M5NzdCRSIgLz48L3N2Zz4=)](https://github.com/omermecitoglu/oauth-kit/commits/main/)
[![GitHub issues](https://img.shields.io/github/issues/omermecitoglu/oauth-kit?color=a38eed&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij4KICA8cGF0aCBkPSJNOCA5LjVhMS41IDEuNSAwIDEgMCAwLTMgMS41IDEuNSAwIDAgMCAwIDNaIiBmaWxsPSIjQTM4RUVEIj48L3BhdGg+CiAgPHBhdGggZD0iTTggMGE4IDggMCAxIDEgMCAxNkE4IDggMCAwIDEgOCAwWk0xLjUgOGE2LjUgNi41IDAgMSAwIDEzIDAgNi41IDYuNSAwIDAgMC0xMyAwWiIgZmlsbD0iI0EzOEVFRCI+PC9wYXRoPgo8L3N2Zz4=)](https://github.com/omermecitoglu/oauth-kit/issues)
[![GitHub stars](https://img.shields.io/github/stars/omermecitoglu/oauth-kit?style=social)](https://github.com/omermecitoglu/oauth-kit)

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [How to use](#how-to-use)
  - [Provide a url to redirect users to the OAuth provider's authentication page](#provide-a-url-to-redirect-users-to-the-oauth-providers-authentication-page)
  - [How to use get user information (Apple) with a Next.js API route](#how-to-use-get-user-information-apple-with-a-nextjs-api-route)
  - [How to use get user information (Google) with a Next.js API route](#how-to-use-get-user-information-google-with-a-nextjs-api-route)
- [License](#license)

## Overview

Server-side OAuth utilities for implementing multiple OAuth providers.

## Installation

To install this package

```sh
npm install @omer-x/oauth-kit
```

## How to use

### Provide a url to redirect users to the OAuth provider's authentication page

```typescript
import { generateOAuthURL as loginWithAppleURL } from "@omer-x/oauth-kit/apple/client";
import { generateOAuthURL as loginWithGoogleURL } from "@omer-x/oauth-kit/google/client";

// process.env.GOOGLE_OAUTH_CLIENT_ID = your Google OAuth Client ID from Google Cloud Console
// publicOrigin = public origin of your app e.g. "https://myapp.com"
// callbackEndpoint = endpoint to handle the OAuth callback e.g. "/auth/google"
// locale = locale code e.g. "en", "fr", "de"

loginWithGoogleURL(process.env.GOOGLE_OAUTH_CLIENT_ID, publicOrigin, "/auth/google", locale);
loginWithAppleURL(process.env.APPLE_OAUTH_CLIENT_ID, publicOrigin, "/auth/apple", locale);
```

### How to use get user information (Apple) with a Next.js API route

```typescript
import { createAccessToken } from "@omer-x/oauth-kit/apple/access-token";
import { decodeIdToken, signClientSecret } from "@omer-x/oauth-kit/apple/jwt";
import { parseOneTimeUserInfo } from "@omer-x/oauth-kit/apple/utils";
import { decodeState } from "@omer-x/oauth-kit/utils";
import { hasLocale } from "next-intl";
import { routing } from "~/i18n/routing";

export async function POST(request: Request) {
  const [
    formData,
    publicOrigin, // public origin of your app e.g. "https://myapp.com"
  ] = await Promise.all([
    request.formData(),
    getPublicOrigin(request.headers), // implement this function to get the public origin from request headers
  ]);
  const { pathname } = new URL(request.url);
  const originURL = new URL(pathname, publicOrigin).toString();

  const state = formData.get("state");
  const code = formData.get("code");
  const rawUserData = formData.get("user");

  if (typeof code !== "string") throw new Error("Invalid code");
  if (typeof state !== "string") throw new Error("Invalid state");

  if (!process.env.APPLE_OAUTH_TEAM_ID) throw new Error("APPLE_OAUTH_TEAM_ID env is missing!");
  if (!process.env.APPLE_OAUTH_CLIENT_ID) throw new Error("APPLE_OAUTH_CLIENT_ID env is missing!");
  if (!process.env.APPLE_OAUTH_KEY_ID) throw new Error("APPLE_OAUTH_KEY_ID env is missing!");
  if (!process.env.APPLE_OAUTH_PRIVATE_KEY) throw new Error("APPLE_OAUTH_PRIVATE_KEY env is missing!");

  const { locale } = decodeState(state);
  if (!hasLocale(routing.locales, locale)) throw new Error(`Unknown Locale (${locale})`);

  const clientSecret = signClientSecret(
    process.env.APPLE_OAUTH_TEAM_ID,
    process.env.APPLE_OAUTH_CLIENT_ID,
    process.env.APPLE_OAUTH_KEY_ID,
    process.env.APPLE_OAUTH_PRIVATE_KEY,
  );
  const oauth = await createAccessToken(process.env.APPLE_OAUTH_CLIENT_ID, clientSecret, code, originURL);
  const appleUser = decodeIdToken(oauth.id_token);
  const appleUserInfo = parseOneTimeUserInfo(rawUserData); // Beware! they send this information only once, so use it wisely!

  // apply your authentincation logic here, e.g. create or update user in your database
  // then redirect the user to the app
}
```

### How to use get user information (Google) with a Next.js API route

```typescript
import { createAccessToken } from "@omer-x/oauth-kit/google/access-token";
import { getGoogleUser } from "@omer-x/oauth-kit/google/api";
import { fetchUserPicture } from "@omer-x/oauth-kit/google/utils";
import { decodeState } from "@omer-x/oauth-kit/utils";
import { hasLocale } from "next-intl";
import { routing } from "~/i18n/routing";

export async function GET(request: Request) {
  const [
    publicOrigin, // public origin of your app e.g. "https://myapp.com"
  ] = await Promise.all([
    getPublicOrigin(request.headers), // implement this function to get the public origin from request headers
  ]);
  const { searchParams, pathname } = new URL(request.url);
  const originURL = new URL(pathname, publicOrigin).toString();

  const code = searchParams.get("code");
  const state = searchParams.get("state");

  if (typeof code !== "string") throw new Error("Invalid code");
  if (typeof state !== "string") throw new Error("Invalid state");

  if (!process.env.GOOGLE_OAUTH_CLIENT_ID) throw new Error("GOOGLE_OAUTH_CLIENT_ID env is missing!");
  if (!process.env.GOOGLE_OAUTH_CLIENT_SECRET) throw new Error("GOOGLE_OAUTH_CLIENT_SECRET env is missing!");

  const { locale } = decodeState(state);
  if (!hasLocale(routing.locales, locale)) throw new Error(`Unknown Locale (${locale})`);

  const oauth = await createAccessToken(
    process.env.GOOGLE_OAUTH_CLIENT_ID,
    process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    code,
    originURL,
  );
  const googleUser = await getGoogleUser(oauth.access_token);

  // apply your authentincation logic here, e.g. create or update user in your database

  // optional step: fetch user picture
  const picture = await fetchUserPicture(googleUser.picture); // this is a File object, you can upload it to your storage service if you wish
  
  // then redirect the user to the app
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
