import axios from "axios";

import { OSU_API_BASE, OSU_TOKEN_ENDPOINT } from "$lib/consts";
import { osuClientId, osuClientSecret, publicUrl } from "$lib/config";

interface IToken {
  token_type: "Bearer";
  expires_in: number;
  access_token: string;
  refresh_token: string;
}

export async function get(req) {
  // make a request to the osu server for the user's access tokens
  let code = req.query.get("code");
  let token = await getAccessToken(code);
  console.log("res", token);

  let user = await getInitialUserInfo(token);

  return {
    body: "Hellosus",
  };
}

async function getAccessToken(code: string): Promise<IToken> {
  let callbackUrl = `${publicUrl}/auth/callback`;
  let res = await axios.post(OSU_TOKEN_ENDPOINT, {
    client_id: osuClientId,
    client_secret: osuClientSecret,
    code,
    grant_type: "authorization_code",
    redirect_uri: callbackUrl,
  });
  return res.data;
}

async function getInitialUserInfo(token: IToken): Promise<string> {
  let res = await axios.get(OSU_API_BASE + "/me", {
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    }
  });
  console.log("RES", res);
  return "";
}
