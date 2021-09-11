// Load everything from a .env file into the environment
import * as dotenv from "dotenv";

let _getConfig = async function() {
  dotenv.config();

  return {
    publicUrl: process.env["THUB_PUBLIC_URL"],
    osuClientId: process.env["THUB_OSU_CLIENT_ID"],
    osuClientSecret: process.env["THUB_OSU_CLIENT_SECRET"],
  };
};

export let getConfig = _getConfig();
