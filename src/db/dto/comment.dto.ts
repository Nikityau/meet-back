import { UserEventDTO } from './user-event.dto';

export class CommentDTO extends UserEventDTO {
  id: string;
  comment: string;
}
