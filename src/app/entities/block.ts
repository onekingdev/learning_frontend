export interface IAnswer {
  id: string;
  identifier: string;
  isCorrect: boolean;
  randomSlug: string;
  answerText: string;
  explanation: string;
  image: string;
  audioFile: string;
  video: string;
}

export interface IQuestion {
  id: string;
  identifier: string;
  isActive: boolean;
  randomSlug: string;
  questionText: string;
  answeroptionSet: IAnswer[];
}

export interface ITopic {
  id: string;
  identifier: string;
  isActive: boolean;
  randomSlug: string;
  slug: string;
  lft: number;
  rght: number;
  treeId: number;
  level: number;
  name: string;
  questionSet: IQuestion[];
  subTopics: ITopic[];
}

export interface IBlockConfigurationKeyword {
  id: string;
  isActive: boolean;
  name: string;
}

export interface IBlockConfiguration {
  id: string;
  isActive: boolean;
  value: string;
  key: IBlockConfigurationKeyword;
}

export interface IBlockType {
  id: string;
  identifier: string;
  isActive: boolean;
  randomSlug: string;
  name: string;
  blocktypeconfigurationSet:IBlockConfiguration;
}

export interface IBlock {
  id: string;
  identifier: string;
  isActive: boolean;
  randomSlug: string;
  engangementPointsAvailable: number;
  coinsAvailable: number;
  batteryPointsAvailable: number;
  typeOf: IBlockType;
  questions: IQuestion[];
}

export interface IBlockPresentation {
  id: string;
  identifier: string;
  randomSlug: string;
  block: IBlock;
}
