import { object, string, date, boolean } from 'yup';

export class EventInputDTO {
  title: string;
  description: string;
  startDate: any;
  endDate: any;
  place: string;
  isArchive: boolean;
}

//timestamp mm:dd:yy hh:mm:ss example 2023:10:23 10:23:10
export const eventInputSchema = object({
  title: string().required(),
  description: string().required(),
  startDate: string().required(),
  endDate: string().required(),
  place: string().required(),
  isArchive: boolean(),
});

export const eventSettings = {
  attributes: {
    include: [
      'id',
      'title',
      'description',
      'startDate',
      'endDate',
      'isArchive',
    ],
    exclude: ['createdAt', 'updatedAt'],
  },
};
