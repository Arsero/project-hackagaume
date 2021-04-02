import { User } from './user.model';

export class Service {
  id: number;
  name: string;
  description: string;
  image: string;
  owner: User;
}
