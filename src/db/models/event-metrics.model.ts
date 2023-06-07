import { BelongsTo, Column, DataType, Table } from 'sequelize-typescript';

import { BaseModel } from './base.model';

import { EventMetricsDTO } from '../dto/event-metrics.dto';
import { EventsModel } from './event.model';
import { UsersModel } from './user.model';

@Table({
  tableName: 'EventsMetrics',
})
export class EventMetricsModel extends BaseModel<EventMetricsDTO> {
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  })
  isViewed;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  })
  isLiked;

  @BelongsTo(() => EventsModel, 'eventId')
  event;

  @BelongsTo(() => UsersModel, 'userId')
  user;
}
