import { applyDecorators } from "@nestjs/common";
import { InjectRequest } from "./inject-request.decorator";

export function InjectParamToBody(shouldStrip: boolean = true) {
    return applyDecorators(InjectRequest('params', 'body', shouldStrip))
}