import { UseInterceptors, UsePipes, applyDecorators } from "@nestjs/common";
import { RequestType } from "../types";
import { InjectRequesTypesInterceptor } from "../interceptors";
import { StripRequestTypePipe } from "../pipes";

export function InjectRequest(fromType: RequestType, toType: RequestType, shouldStrip: boolean = true) {
    return applyDecorators(
        UseInterceptors(new InjectRequesTypesInterceptor(fromType, toType)),
        shouldStrip
            ? UsePipes(new StripRequestTypePipe(fromType))
            : UsePipes()
    )
}