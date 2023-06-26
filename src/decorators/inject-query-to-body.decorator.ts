import { applyDecorators } from "@nestjs/common";
import { InjectRequest } from "./inject-request.decorator";

export function InjectQueryToBody(shouldStrip: boolean = true) {
    return applyDecorators(InjectRequest('query', 'body', shouldStrip))
}