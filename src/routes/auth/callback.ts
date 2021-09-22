import { osuClientId, osuClientSecret, publicUrl } from "$lib/config";
import { OSU_API_BASE, OSU_TOKEN_ENDPOINT } from "$lib/consts";
import { User } from "$lib/models/User";
import type { Request } from "@sveltejs/kit";
import axios from "axios";

interface IToken {
  token_type: "Bearer";
  expires_in: number;
  access_token: string;
  refresh_token: string;
}

export async function get({ locals, query }: Request) {
  // make a request to the osu server for the user's access tokens
  let code = query.get("code");
  let token = await getAccessToken(code);
  console.log("res", token);

  let user = await getInitialUserInfo(token);

  locals.session.data = { user };
  console.log("session from callback.ts", locals.session);

  return {
    // redirect
    status: 302,

    headers: {
      location: "/",
    },
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

interface InitialUserInfo {
  id: number;
  osu_id: number;
  username: string;
}

async function getInitialUserInfo(token: IToken): Promise<InitialUserInfo> {
  let res = await axios.get(OSU_API_BASE + "/me", {
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  });
  console.log("RES", res);

  let apiUser = res.data;

  let existingUser = await User.findOne({
    where: {
      osu_id: apiUser["id"],
    },
  });

  if (!existingUser) {
    let dbUser = new User({
      osu_id: apiUser["id"],
      username: apiUser["username"],
      rank: apiUser["statistics"]["global_rank"],
      pp: apiUser["statistics"]["pp"],

      access_token: token.access_token,
      refresh_token: token.refresh_token,
    });
    await dbUser.save();

    return {
      id: dbUser.id,
      osu_id: dbUser.osu_id,
      username: dbUser.username,
    };
  } else {
    return {
      id: existingUser.id,
      osu_id: existingUser.osu_id,
      username: existingUser.username,
    };
  }
}
