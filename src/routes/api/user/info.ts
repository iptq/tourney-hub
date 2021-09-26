import { OSU_API_BASE } from "$lib/consts";
import { User } from "$lib/models/User";
import type { Request } from "@sveltejs/kit";
import axios from "axios";

export async function get(request: Request) {
  let id = <number>new Number(request.query.get("id"));
  let user = await User.findOne({
    where: { osu_id: id },
  });

  if (user === null) {
    // TODO: fetch the user from osu! API
    let token = request.locals.osuapi.token;
    let res = await axios.get(`${OSU_API_BASE}/users/${id}`, {
      headers: {
        authorization: `Bearer ${token.access_token}`,
      },
    });
    let profile = res.data;

    let existingUser = await User.findOne({
      where: {
        osu_id: profile["id"],
      },
    });

    if (!existingUser) {
      let dbUser = new User({
        osu_id: profile["id"],
        username: profile["username"],
        country_code: profile["country_code"],
        rank: profile["statistics"]["global_rank"],
        pp: profile["statistics"]["pp"],

        access_token: token.access_token,
        refresh_token: token.refresh_token,
      });
      user = await dbUser.save();
    } else {
      user = existingUser;
    }
  }

  return {
    status: 200,
    body: user,
  };
}
