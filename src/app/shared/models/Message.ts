import {User} from './User';

export interface Message {
  id: string;
  text: string;
  date: Date;
  user: User;
}
