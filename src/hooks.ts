import { dbPromise } from "$lib/models";

// This function gets run on every single request.
// We'll use it to make sure the database gets set up.
export async function handle({ request: req, resolve }) {
  // This will block until the db is ready. Note that this should only block on
  // the first request, and the database initialization step isn't triggered by
  // the request, it's triggered by the module being imported at all.
  req.locals.db = await dbPromise;

  // other stuff that happens before request is handled

  let res = resolve(req);

  // other stuff that happens after request is handled

  return res;
}
