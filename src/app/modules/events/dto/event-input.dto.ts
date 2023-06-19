import { object, string, date, boolean, array } from 'yup';

export class EventInputDTO {
  title: string;
  description: string;
  date: {
    startDate: string;
    endDate?: string;
    startTime: string;
    endTime?: string;
  };
  place: string;
  isArchive: boolean;
  tags: string[];
}

export const eventInputSchema = object({
  title: string().required(),
  description: string().required(),
  date: object({
    startDate: date().required(),
    startTime: string().required(),
    endDate: date(),
    endTime: string(),
  }),
  place: string().required(),
  isArchive: boolean(),
  tags: array().required(),
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
