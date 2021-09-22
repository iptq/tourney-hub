import { chain } from "$lib/middleware";
import loginRequired from "$lib/middleware/loginRequired";
import { Tournament } from "$lib/models/Tournament";
import type { Request } from "@sveltejs/kit";

// Get a listing of all tournaments
export async function get(request: Request) {
  let tournaments = await Tournament.findAll({
    attributes: ["name"],
    limit: 20,
  });

  return { body: tournaments };
}

// Create a new tournament
export const post = chain(loginRequired, async (request: Request) => {
  console.log("FORM BODY", request.body);

  let dbTournament = new Tournament({});

  return {
    type: "response",
    response: {
      status: 200,
      headers: {},
    },
  };
});
