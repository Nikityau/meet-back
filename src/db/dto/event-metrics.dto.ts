import { UserEventDTO } from './user-event.dto';

export class EventMetricsDTO extends UserEventDTO {
  id: string;
  isViewed: boolean;
  isLiked: boolean;
}
