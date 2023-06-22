export class CreateEventDto {
  userId: string;
  orgId: string;
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
}