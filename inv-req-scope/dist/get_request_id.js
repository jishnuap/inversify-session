"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRequestId(headers) {
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
exports.getRequestId = getRequestId;
