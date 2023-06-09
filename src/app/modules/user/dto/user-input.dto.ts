import { object, string, date, boolean } from "yup";

type Gender = 'male' | 'female';
type UserRole = 'user' | 'admin' | 'moderator';

export class UserInputDTO {
    name: string;
    surname: string;
    patronymic?: string;
    gender: Gender;
    birthDay: Date;
    email: string;
    role: UserRole;
    password: string;
    isNotify?: boolean;
}

export const userInputSchema = object({
    name: string().required(),
    surname: string().required(),
    patronymic: string().nullable(),
    gender: string<Gender>().nullable().required(),
    birthDay: date().nullable(),
    email: string().email().required(),
    role: string<UserRole>().required(),
    password: string().required(),
    isNotify: boolean()
})