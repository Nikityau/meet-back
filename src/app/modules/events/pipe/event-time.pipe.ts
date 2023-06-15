import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

import { EventInputDTO } from '../dto/event-input.dto';

@Injectable()
export class EventTimePipe implements PipeTransform {
  checkTime(startTime: string, endTime: string | undefined | null) {
    if (!endTime) {
      return;
    }

    if (startTime > endTime) {
      throw new BadRequestException('startTime cannot be > endTime', {
        cause: new Error('time error'),
        description: 'time error',
      });
    }
  }

  async transform(value: EventInputDTO, metadata: ArgumentMetadata) {
    const date = value.date;

    if (!date.endDate) {
      this.checkTime(date.startTime, date.endTime);
      return value;
    }

    if (date.startDate > date.endDate) {
      throw new BadRequestException('endDate cannot be > startDate', {
        cause: new Error('time error'),
        description: 'date error',
      });
    }

    this.checkTime(date.startTime, date.endTime);

    return value;
  }
}
