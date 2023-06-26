import { applyDecorators } from "@nestjs/common";
import { InjectRequest } from "./inject-request.decorator";

export function InjectParamToQuery(shouldStrip: boolean = true) {
    return applyDecorators(InjectRequest('params', 'query', shouldStrip))
}