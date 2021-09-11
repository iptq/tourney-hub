export async function get(req) {
  let config = req.locals.config;
  let osuAuthorizeEndpoint = "https://osu.ppy.sh/oauth/authorize";
  let callbackUrl = `${config.publicUrl}/auth/callback`;
  console.log("Config", config);

  return {
    // redirect
    status: 302,

    headers: {
      location: `${osuAuthorizeEndpoint}?client_id=${config.osuClientId}&redirect_uri=${callbackUrl}`,
    },
  };
}
