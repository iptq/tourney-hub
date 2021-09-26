import { Mappool, Tournament, TournamentStage, User } from "$lib/models";
import type { Request } from "@sveltejs/kit";

export async function get(request: Request) {
  let id = <number>new Number(request.query.get("id"));
  let tournament = await Tournament.findOne({
    where: { id },
    include: [
      User,
      {
        model: TournamentStage,
        include: [Mappool],
      },
    ],
  });

  return {
    status: 200,
    body: tournament,
  };
}
