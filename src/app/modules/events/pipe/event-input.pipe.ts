import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { AnyObjectSchema } from 'yup';

@Injectable()
export class EventInputPipe implements PipeTransform {
  constructor(private eventSchema: AnyObjectSchema) {}
  async transform(value: any, metadata: ArgumentMetadata) {
    try {
      const isValid = await this.eventSchema.validate(value);

      return value;
    } catch (e) {
      throw new BadRequestException('not valid input data', {
        cause: new Error(e),
        description: e.message,
      });
    }
  }
}
