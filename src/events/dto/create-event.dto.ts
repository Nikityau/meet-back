export class CreateEventDto {
  userId: string;
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
}