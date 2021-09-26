import { User } from "$lib/models/User";
import type { Request } from "@sveltejs/kit";

export async function get(request: Request) {
  let id = <number>new Number(request.query.get("id"));
  let user = await User.findOne({
    where: { osu_id: id },
  });

  return {
    status: 200,
    body: user,
  };
}
