import { Sequelize } from "sequelize-typescript";

import { User } from "./User";
import { Tournament } from "./Tournament";

async function init(): Promise<Sequelize> {
  // TODO: configure the db url
  let sequelize = new Sequelize("sqlite:./test.db", {
    models: [ User, Tournament ],
  });

  // TODO: remove this when in production
  await sequelize.sync({ force: true });
  console.log("Connected to database.");
  return sequelize;
}

export let dbPromise = init();

