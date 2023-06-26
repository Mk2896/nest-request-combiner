import { applyDecorators } from "@nestjs/common";
import { InjectRequest } from "./inject-request.decorator";

export function InjectQueryToParam(shouldStrip: boolean = true) {
    return applyDecorators(InjectRequest('query', 'params', shouldStrip))
}