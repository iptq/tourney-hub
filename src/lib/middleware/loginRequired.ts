import type { Request } from "@sveltejs/kit";
import type { MiddlewareResponse } from ".";

export default async function loginRequired(
  request: Request
): Promise<MiddlewareResponse> {
  if (!checkLogin(request.locals.session)) {
    return {
      type: "response",
      response: {
        status: 403,
        headers: {},
        body: "You must be logged in to see this.",
      },
    };
  }

  return {
    type: "next",
    request,
  };
}

export async function checkLogin(session: any): Promise<boolean> {
  if (!session.isLoggedIn || session.isLoggedIn === false) {
    return false;
  }

  if (!session.user) {
    return false;
  }

  return true;
}
