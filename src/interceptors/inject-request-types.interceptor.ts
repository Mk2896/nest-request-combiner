import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from 'rxjs';
import { RequestType } from "../types";

@Injectable()
export class InjectRequesTypesInterceptor implements NestInterceptor {
    constructor(
        private readonly fromType: RequestType,
        private readonly toType: RequestType
    ) { }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        if (request[this.fromType] && request[this.toType]) {
            request[this.toType][this.fromType] = request[this.fromType];
        }
        return next.handle();
    }
}