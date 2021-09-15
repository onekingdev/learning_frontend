import {Gender} from './gender';

export interface IStudent {
  userName: string;
  avatar: string;
  avatarFavorites: string[];
  gender: Gender;
  firstName: string;
  lastName: string;
  activeGroupId: string;
  DoB: Date;
  guardianId: string;
  email: string;
  token: string;
}
