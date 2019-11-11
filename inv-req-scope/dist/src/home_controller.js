"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_express_utils_1 = require("inversify-express-utils");
const container_1 = require("./container");
const bootstrap_1 = require("./bootstrap");
const timeout_1 = require("./timeout");
let HomeController = class HomeController {
    async test(req, res) {
        await timeout_1.timeout(9000);
        let currentReq = container_1.container.get(bootstrap_1.TYPE.CurrentRequest);
        res.send({
            ...currentReq,
            traceIdFromHttpContext: bootstrap_1.getRequestId(this._httpContext.request.headers)
        });
    }
};
__decorate([
    inversify_express_utils_1.injectHttpContext
], HomeController.prototype, "_httpContext", void 0);
__decorate([
    inversify_express_utils_1.httpGet("/test")
], HomeController.prototype, "test", null);
HomeController = __decorate([
    inversify_express_utils_1.controller("/api/values")
], HomeController);
exports.HomeController = HomeController;
