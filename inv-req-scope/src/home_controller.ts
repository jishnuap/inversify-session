import {
    controller,
    httpGet,
    injectHttpContext,
    interfaces,
    BaseHttpController
} from "inversify-express-utils";
import * as express from "express";
import { container } from "./container";
import { TYPE } from "./bootstrap";
import { getRequestId } from "./get_request_id";
import { timeout } from "./timeout";
import {
    IRequestHandler,
    SampleRequestHandler
} from "./sample_request_handler";

@controller("/api/values")
export class HomeController extends BaseHttpController {
    @injectHttpContext private readonly _httpContext!: interfaces.HttpContext;
    @httpGet("/test")
    public async test(
        req: express.Request,
        res: express.Response
    ): Promise<void> {
        try {
            await timeout(9000);
            let requestHandler = container.get<IRequestHandler<string, string>>(
                TYPE.SampleRequestHandler
            );
            const tId = await requestHandler.handle();
            res.send({
                traceIdFromReqContext: tId,
                traceIdFromHttpContext: getRequestId(
                    this._httpContext.request.headers
                )
            });
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
}
