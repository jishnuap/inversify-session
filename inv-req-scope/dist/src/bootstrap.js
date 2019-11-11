"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
const bodyParser = __importStar(require("body-parser"));
require("./home_controller");
exports.TYPE = {
    CurrentRequest: Symbol("CurrentRequest"),
    UserContext: Symbol("UserContext")
};
function setup(container) {
    container
        .bind(exports.TYPE.CurrentRequest)
        .to(RequestContext)
        .inRequestScope();
    const server = new inversify_express_utils_1.InversifyExpressServer(container);
    server.setConfig(app => {
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
    });
    return server;
}
exports.setup = setup;
let RequestContext = class RequestContext {
    constructor() {
        this._traceId = getRequestId(this._httpContext.request.headers);
    }
    get traceId() {
        return this._traceId;
    }
};
__decorate([
    inversify_express_utils_1.injectHttpContext
], RequestContext.prototype, "_httpContext", void 0);
RequestContext = __decorate([
    inversify_1.injectable()
], RequestContext);
exports.RequestContext = RequestContext;
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
