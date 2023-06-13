import {
  ArgumentMetadata,
  BadRequestException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

import { ObjectSchema, AnyObjectSchema } from 'yup';

@Injectable()
export class UserCreateValidationPipe implements PipeTransform {
  constructor(private schema: AnyObjectSchema) {}

  async transform(value: any, metadata: ArgumentMetadata) {
    try {
      const isValid = await this.schema.validate(value);

      return value;
    } catch (e) {
      throw new BadRequestException('not valid input data', {
        cause: new Error(e),
        description: e.message,
      });
    }
  }
}
