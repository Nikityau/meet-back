import { BelongsTo, Table } from 'sequelize-typescript';

import { BaseModel } from './base.model';

import { OrganizerDTO } from '../dto/organizer.dto';
import { UsersModel } from './user.model';
import { EventsModel } from './event.model';

@Table({
  tableName: 'Organizers',
})
export class OrganizerModel extends BaseModel<OrganizerDTO> {
  @BelongsTo(() => UsersModel, 'userId')
  user;

  @BelongsTo(() => EventsModel, 'eventId')
  event;
}
