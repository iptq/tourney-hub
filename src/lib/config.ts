// Load everything from a .env file into the environment
import * as dotenv from "dotenv";

dotenv.config();

export let secretKey = process.env["THUB_SECRET_KEY"];
export let publicUrl = process.env["THUB_PUBLIC_URL"];
export let osuClientId = process.env["THUB_OSU_CLIENT_ID"];
export let osuClientSecret = process.env["THUB_OSU_CLIENT_SECRET"];
