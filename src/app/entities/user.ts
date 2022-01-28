import {Gender} from './gender';

export interface IUser {
    username: string;
    gender: Gender;
    avatar: string;
    avatarFavorites: string[];
    firstName: string;
    lastName: string;
    email: string;
    activeGroupId: string;
    DoB: Date;
    guardianId: string;
    lastLogin: Date;
    isSuperuser: boolean;
    isStaff: boolean;
    isActive: boolean;
    dateJoined: Date;
    token: string;
    refreshToken: string;
    wallet: {
        balance: number;
        experience: number;
        level: number;
      }
}