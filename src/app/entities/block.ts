import {IBlockConfig} from './blockConfig';

export interface IBlock {
  questions: string[];
  config: IBlockConfig;
  chosenAnswer: string;
  isCorrect: boolean;
}
