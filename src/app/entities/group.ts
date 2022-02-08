import {IClassmate} from './classmate';

export interface IGroup {
  groupMembers: Array<IClassmate>;
  grade: string;
  areasOfKnowledge: string[];
}
