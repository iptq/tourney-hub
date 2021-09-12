import { OSU_AUTHORIZE_ENDPOINT } from "$lib/consts";
import { osuClientId, publicUrl } from "$lib/config";

export async function get(_) {
  let callbackUrl = `${publicUrl}/auth/callback`;

  let redirectUrl = new URL(OSU_AUTHORIZE_ENDPOINT);
  redirectUrl.searchParams.append("client_id", osuClientId);
  redirectUrl.searchParams.append("redirect_uri", callbackUrl);
  redirectUrl.searchParams.append("response_type", "code");

  return {
    // redirect
    status: 302,

    headers: {
      location: redirectUrl,
    },
  };
}
