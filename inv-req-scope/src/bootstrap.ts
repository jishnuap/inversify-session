import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import * as bodyParser from "body-parser";
import "./home_controller";
import {
    IRequestHandler,
    SampleRequestHandler
} from "./sample_request_handler";
import { myMiddleWare } from "./my_middleware";
import * as express from "express";

export const TYPE = {
    CurrentRequest: Symbol("CurrentRequest"),
    UserContext: Symbol("UserContext"),
    SampleRequestHandler: Symbol("SampleRequestHandler")
};

export function setup(container: Container): InversifyExpressServer {
    container
        .bind<IRequestHandler<string, string>>(TYPE.SampleRequestHandler)
        .to(SampleRequestHandler)
        .inTransientScope();
    const server = new InversifyExpressServer(container);

    server.setConfig(app => {
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(myMiddleWare);
    });

    return server;
}
