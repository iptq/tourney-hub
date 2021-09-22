import { Sequelize } from "sequelize-typescript";
import { Beatmap } from "./Beatmap";
import { Mappool, MappoolContents } from "./Mappool";
import { Tournament } from "./Tournament";
import { User } from "./User";

async function init(): Promise<Sequelize> {
  // TODO: configure the db url
  let sequelize = new Sequelize("sqlite:./test.db", {
    models: [User, Tournament, Beatmap, Mappool, MappoolContents],
  });

  // TODO: remove this when in production
  await sequelize.sync({ force: true });
  console.log("Connected to database.");
  return sequelize;
}

export let dbPromise = init();
