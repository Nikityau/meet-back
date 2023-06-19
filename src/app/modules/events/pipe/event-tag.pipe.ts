import {
  ArgumentMetadata,
  BadRequestException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { EventInputDTO } from '../dto/event-input.dto';
import { EventModel } from '../../../../db/models/event.model';
import { TagModel } from '../../../../db/models/tag.model';

@Injectable()
export class EventTagPipe implements PipeTransform {
  constructor(
    @InjectModel(EventModel)
    private eventModel: typeof EventModel,
    @InjectModel(TagModel)
    private tagModel: typeof TagModel,
  ) {}

  async transform(value: EventInputDTO, metadata: ArgumentMetadata) {
    for (let i = 0; i < value.tags.length; ++i) {
      const tag = await this.tagModel.findOne({
        where: {
          tag: value.tags[i],
        },
      });

      if (!tag) {
        await this.tagModel.create({
          tag: value.tags[i],
        });

        /*throw new BadRequestException(HttpStatus.BAD_REQUEST, {
          cause: new Error('tag does not exist'),
          description: `tag:${value.tags[i]} do not exist`,
        });*/
      }
    }

    return value;
  }
}
