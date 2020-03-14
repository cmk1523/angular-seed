import {User} from './User';

export interface AppInfo {
  title: string;
  version: string;
  buildNumber: string;
  buildDateTime: string;
  user: User;
}
