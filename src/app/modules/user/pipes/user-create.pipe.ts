import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

import { ObjectSchema, AnyObjectSchema } from 'yup'

@Injectable()
export class UserCreateValidationPipe implements PipeTransform {

    constructor(
        private schema: AnyObjectSchema
    ) { }

    transform(value: any, metadata: ArgumentMetadata) {
        


        return value;
    }
}