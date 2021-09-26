import { Mappool, Tournament, User } from "$lib/models";

export async function populateExampleData() {
  // create all users
  await Promise.all([
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
  await Promise.all([
    Tournament.create({
      name: "Feiri's Test Tournament",
      admin_id: 3214844,
      published: true,
      banner_image: "https://i.redd.it/n7fud5vc85n71.jpg",
    }),
  ]);

  // create mappools
  await Promise.all([Mappool.create({})]);
}
