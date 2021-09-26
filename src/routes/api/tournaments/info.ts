import { Tournament } from "$lib/models/Tournament";
import { User } from "$lib/models/User";
import type { Request } from "@sveltejs/kit";

export async function get(request: Request) {
  let id = <number>new Number(request.query.get("id"));
  let tournament = await Tournament.findOne({
    where: { id },
    include: [User],
  });

  return {
    status: 200,
    body: tournament,
  };
}
