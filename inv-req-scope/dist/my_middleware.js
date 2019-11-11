"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function myMiddleWare(request, response, next) {
    next();
}
exports.myMiddleWare = myMiddleWare;
