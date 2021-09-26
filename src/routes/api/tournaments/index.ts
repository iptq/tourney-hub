import { Tournament } from "$lib/models/Tournament";
import type { Request } from "@sveltejs/kit";
import { transformAndValidate } from "class-transformer-validator";
import { Length } from "class-validator";

// Get a listing of all tournaments
export async function get(_: Request) {
  let tournaments = await Tournament.findAll({
    attributes: ["id", "name"],
    limit: 20,
  });

  return { body: tournaments };
}

export class TournamentCreateForm {
  @Length(3, 28)
  public name: string;
}

// Create a new tournament
export async function post(request: Request) {
  let body = <TournamentCreateForm>(
    await transformAndValidate(TournamentCreateForm, <string>request.body)
  );
  let session = request.locals.session.data;
  console.log("FORM BODY", body);
  console.log("SESSION", session);

  let dbTournament = await Tournament.create({
    name: body.name,
    admin_id: session.user.osu_id,
  });

  return {
    status: 200,
    body: {
      id: dbTournament.id,
    },
  };
}
