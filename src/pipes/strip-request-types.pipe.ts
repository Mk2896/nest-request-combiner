import { Injectable, PipeTransform } from "@nestjs/common";
import { RequestType } from "../types";

@Injectable()
export class StripRequestTypePipe implements PipeTransform {
    constructor(private readonly removeParameter: RequestType) { }

    transform(value: any) {
        delete value[this.removeParameter];
        return value;
    }
}