"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
exports.timeout = timeout;
