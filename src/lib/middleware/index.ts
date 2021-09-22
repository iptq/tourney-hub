import type { Request, Response } from "@sveltejs/kit";

export type MaybePromise<T> = Promise<T> | T;
export type MiddlewareResponse =
  | { type: "response"; response: Response }
  | { type: "next"; request: Request; response?: Response };

export interface Middleware {
  (req: Request, res?: Response): MaybePromise<MiddlewareResponse>;
}

export function chain(first: Middleware, ...middleware: Middleware[]) {
  return async (req: Request): Promise<Response> => {
    let second = await first(req);
    if (second.type == "response") return second.response;

    let data: MiddlewareResponse = second;
    while (middleware.length > 0) {
      if (data.type == "next") {
        let front = middleware.shift();
        let c = front(data.request, data.response);
        if (c instanceof Promise) {
          data = await c;
        } else {
          data = c;
        }
      } else if (data.type == "response") {
        return data.response;
      }
    }
  };
}
