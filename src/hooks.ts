import { secretKey } from "$lib/config";
import { dbPromise } from "$lib/models";
import { Request } from "@sveltejs/kit";
import { handleSession } from "svelte-kit-cookie-session";

export const handle = handleSession({ secret: secretKey }, handle2);

// This function gets run on every single request.
// We'll use it to make sure the database gets set up.
async function handle2({ request: req, resolve }) {
  // This will block until the db is ready. Note that this should only block on
  // the first request, and the database initialization step isn't triggered by
  // the request, it's triggered by the module being imported at all.
  req.locals.db = await dbPromise;

  // other stuff that happens before request is handled

  let res = resolve(req);

  // other stuff that happens after request is handled

  return res;
}

export async function getSession(request: Request) {
  let isLoggedIn = false;
  let session = request.locals.session;

  console.log("session:", session);

  return { isLoggedIn };
}
