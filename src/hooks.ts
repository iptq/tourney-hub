import { secretKey } from "$lib/config";
import { dbPromise } from "$lib/models";
import { osuapi } from "$lib/osuapi";
import type { Handle, Request } from "@sveltejs/kit";
import { handleSession } from "svelte-kit-cookie-session";

// This function gets run on every single request.
// We'll use it to make sure the database gets set up.
let handle2: Handle = async ({ request, resolve }) => {
  // This will block until the db is ready. Note that this should only block on
  // the first request, and the database initialization step isn't triggered by
  // the request, it's triggered by the module being imported at all.
  request.locals.db = await dbPromise;
  request.locals.osuapi = await osuapi;

  // other stuff that happens before request is handled

  let res = resolve(request);

  // other stuff that happens after request is handled

  return res;
};

export async function getSession({ locals }: Request) {
  let clientSession = {
    isLoggedIn: false,
    user: null,
  };

  let data = locals.session.data;

  if (data.user) {
    clientSession.isLoggedIn = true;
    clientSession.user = data.user;
  }

  return clientSession;
}

export const handle = handleSession({ secret: secretKey }, handle2);
