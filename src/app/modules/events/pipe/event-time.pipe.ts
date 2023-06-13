import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

import { EventInputDTO } from '../dto/event-input.dto';

@Injectable()
export class EventTimePipe implements PipeTransform {
  async transform(value: EventInputDTO, metadata: ArgumentMetadata) {
    const [startDate, startTime] = value.startDate.split(' ');
    const [endDate, endTime] = value.endDate.split(' ');

    const ds = new Date(startDate);
    const de = new Date(endDate);

    if (de < ds) {
      throw new BadRequestException('endDate must be >= startDate', {
        cause: new Error('date error'),
        description: 'date error',
      });
    }

    if (!startTime || !endTime) {
      return value;
    }
    if (endTime < startTime) {
      throw new BadRequestException('endTime must be >= startTime', {
        cause: new Error('time error'),
        description: 'time error',
      });
    }

    return value;
  }
}
