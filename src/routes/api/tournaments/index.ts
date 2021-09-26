import { Tournament } from "$lib/models/Tournament";
import { User } from "$lib/models/User";
import type { Request } from "@sveltejs/kit";
import { transformAndValidate } from "class-transformer-validator";
import { Length } from "class-validator";
import { Op } from "sequelize";

// Get a listing of all tournaments
export async function get(request: Request) {
  let session = request.locals.session.data;

  // if the user is logged in, _also_ select tournaments that the user owns
  // TODO: as well as if they're an admin
  let predicate: any = { published: true };
  if (session.user) {
    predicate = { [Op.or]: [predicate, { admin_id: session.user.osu_id }] };
  }
  console.log("PREDICATE", predicate);

  let tournaments = await Tournament.findAll({
    where: predicate,
    attributes: ["id", "name", "admin_id"],
    limit: 20,
    include: [User],
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
