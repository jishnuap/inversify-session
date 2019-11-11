import * as express from "express";
import { createNamespace } from "continuation-local-storage";
import { IRequestContext } from "./abstract_request_context";
import { getRequestId } from "./get_request_id";

const session = createNamespace("my session");

export function myMiddleWare(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
) {
    session.set<IRequestContext>("req-context", {
        traceId: getRequestId(request.headers)
    });
    next();
}

export { session };
