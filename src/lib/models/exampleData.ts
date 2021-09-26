import { Mappool, Tournament, User } from "$lib/models";

export async function populateExampleData() {
  // create all users
  await Promise.all([
    User.create({ osu_id: 3214844, username: "Feiri" }),
    User.create({ osu_id: 3388082, username: "ThunderBird2678" }),
    User.create({ osu_id: 2688103, username: "IOException" }),
  ]);

  // create tournament
  await Promise.all([
    Tournament.create({
      name: "Feiri's Test Tournament",
      admin_id: 3214844,
      published: true,
    }),
  ]);

  // create mappools
  await Promise.all([Mappool.create({})]);
}
