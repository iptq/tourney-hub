import { osuClientId, osuClientSecret } from "$lib/config";
import { OSU_TOKEN_ENDPOINT } from "$lib/consts";
import axios from "axios";

class ClientCredentialsToken {
  token_type: string;
  expires_in: number;
  access_token: string;
}

export class Osuapi {
  public token: ClientCredentialsToken;

  private constructor(token: ClientCredentialsToken) {
    this.token = token;
    console.log("ClientCredentialsToken initialized.");
  }

  static async init(): Promise<Osuapi> {
    let res = await axios.post(OSU_TOKEN_ENDPOINT, {
      client_id: osuClientId,
      client_secret: osuClientSecret,
      grant_type: "client_credentials",
      scope: "public",
    });

    let token = <ClientCredentialsToken>res.data;
    return new Osuapi(token);
  }
}

export let osuapi = Osuapi.init();
