import { injectable } from "inversify";
import { session } from "./my_middleware";

@injectable()
export class SampleRequestHandler implements IRequestHandler<string, string> {
    async handle(req: string): Promise<string> {
        const reqContext = session.get("req-context");
        return Promise.resolve(reqContext.traceId);
    }
}

export interface IRequestHandler<TRequest, TResponse> {
    handle(req?: TRequest): Promise<TResponse>;
}
