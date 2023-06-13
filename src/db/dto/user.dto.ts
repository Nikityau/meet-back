export class UserDTO {
  id: string;
  name: string;
  surname: string;
  patronymic: string | null;
  gender: 'male' | 'female';
  birthDay: Date;
  role: 'admin' | 'moderator' | 'user';
  email: string;
  password: string;
  isNotify: boolean;
}
