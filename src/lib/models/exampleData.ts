import { Mappool, Tournament, TournamentStage, User } from "$lib/models";

export async function populateExampleData() {
  // create all users
  let users = await Promise.all([
    User.create({ osu_id: 3214844, username: "Feiri", country_code: "CA" }),
    User.create({
      osu_id: 3388082,
      username: "ThunderBird2678",
      country_code: "CA",
    }),
    User.create({
      osu_id: 2688103,
      username: "IOException",
      country_code: "US",
    }),
  ]);

  // create tournament
  let tournaments = await Promise.all([
    Tournament.create({
      name: "Feiri's Test Tournament",
      admin_id: users[0].osu_id,
      published: true,
      banner_image: "https://i.redd.it/n7fud5vc85n71.jpg",
    }),
  ]);

  // create mappools
  let mappools = await Promise.all([
    Mappool.create({
      image_url: "https://i.redd.it/y8deg1o011n71.jpg",
    }),
  ]);

  // create stages
  await Promise.all([
    TournamentStage.create({
      name: "Semifinals",
      tournament_id: tournaments[0].id,
      mappool_id: mappools[0].id,
    }),
  ]);
}
