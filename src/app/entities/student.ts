import {Gender} from './gender';

export interface IStudent {
  createTimestamp: Date;
  updateTimestamp: Date;
  firstName: string;
  lastName: string;
  fullName: string;
  dob: Date;
  gender: Gender;
  activeGroupId: string;
  levelId: string;
  guardianId: string;
  schoolId: string;
  walletId: string
}
