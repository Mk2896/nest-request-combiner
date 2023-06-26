import { applyDecorators } from "@nestjs/common";
import { InjectRequest } from "./inject-request.decorator";

export function InjectBodyToQuery(shouldStrip: boolean = true) {
    return applyDecorators(InjectRequest('body', 'query', shouldStrip))
}