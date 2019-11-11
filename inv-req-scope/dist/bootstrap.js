"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_express_utils_1 = require("inversify-express-utils");
const bodyParser = __importStar(require("body-parser"));
require("./home_controller");
const sample_request_handler_1 = require("./sample_request_handler");
const my_middleware_1 = require("./my_middleware");
const request_context_1 = require("./request_context");
exports.TYPE = {
    CurrentRequest: Symbol("CurrentRequest"),
    UserContext: Symbol("UserContext"),
    SampleRequestHandler: Symbol("SampleRequestHandler")
};
function setup(container) {
    container
        .bind(exports.TYPE.CurrentRequest)
        .to(request_context_1.RequestContext)
        .inTransientScope();
    container
        .bind(exports.TYPE.SampleRequestHandler)
        .to(sample_request_handler_1.SampleRequestHandler)
        .inTransientScope();
    const server = new inversify_express_utils_1.InversifyExpressServer(container);
    server.setConfig(app => {
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(my_middleware_1.myMiddleWare);
    });
    return server;
}
exports.setup = setup;
