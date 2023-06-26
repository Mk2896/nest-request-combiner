import { applyDecorators } from "@nestjs/common";
import { InjectRequest } from "./inject-request.decorator";

export function InjectBodyToParam(shouldStrip: boolean = true) {
    return applyDecorators(InjectRequest('body', 'params', shouldStrip))
}