import { IncomingHttpHeaders } from "http";

export function getRequestId(headers: IncomingHttpHeaders): string {
    const traceId = headers["x-trace-id"];
    if (typeof traceId === "undefined") {
        return "";
    }
    else if (typeof traceId === "string") {
        return traceId;
    }
    else if (typeof traceId === "object") {
        return traceId[0];
    }
    return "";
}
