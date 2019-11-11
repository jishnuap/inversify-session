"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
const get_request_id_1 = require("./get_request_id");
let RequestContext = class RequestContext {
    constructor(_httpContext) {
        this._httpContext = _httpContext;
        console.log(this._httpContext);
    }
    get traceId() {
        return get_request_id_1.getRequestId(this._httpContext.request.headers);
    }
};
RequestContext = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_express_utils_1.injectHttpContext)
], RequestContext);
exports.RequestContext = RequestContext;
