import { BelongsTo, Column, DataType, Table } from 'sequelize-typescript';
import { BaseModel } from './base.model';
import { ArchiveEventMetricsDTO } from '../dto/archive-event-metrics.dto';
import { EventsModel } from './event.model';

@Table({
  tableName: 'ArchiveEventsMetrics',
})
export class ArchiveEventMetricsModel extends BaseModel<ArchiveEventMetricsDTO> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  viewCount;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  likeCount;

  @BelongsTo(() => EventsModel, 'eventId')
  event;
}
