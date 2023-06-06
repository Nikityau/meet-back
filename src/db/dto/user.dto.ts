export class UserDTO {
  id: string;
  name: string;
  surname: string;
  gender: 'male' | 'female';
  birthDay: Date;
  isReal: boolean;
  image: string;
  role: 'admin' | 'moderator' | 'user';
  email: string;
  password: string;
  isNotify: boolean;
  canMessage: boolean;
}
