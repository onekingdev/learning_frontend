import React, {
  useContext,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';

import {IStudent} from './entities/student';
import {IGroup} from './entities/group';
import {IWallet} from './entities/wallet';
import {IBlock} from './entities/block';

import {Gender} from './entities/gender';
const MockStore: Store = {
  user: {
    userName: 'Juanpa',
    avatar: 'string',
    avatarFavorites: [],
    gender: Gender.male,
    firstName: 'string',
    lastName: 'string',
    activeGroupId: 'string',
    DoB: new Date(),
    guardianId: 'string',
    email: 'string',
    token: 'string',
  },
  group: {
    groupMembers: [
      {
        avatarURL: 'string',
        name: 'string',
      },
    ],
    grade: 'string',
    areasOfKnowledge: ['', '', ''],
  },
  wallet: {
    balance: 1,
    experience: 2,
    level: 3,
  },
  block: {
    questions: ['hello'],
    config: {name: 'sdscd'},
    chosenAnswer: '2',
    isCorrect: true,
  },
};

const StudentContext = createContext<Store | undefined>(MockStore);
const StudentContextUpdate = createContext<
  Dispatch<SetStateAction<Store | undefined>>
>(()=>{});

export const useStore = () => useContext(StudentContext);
export const useStoreUpdate = () => useContext(StudentContextUpdate);

type Store = {
  user: IStudent;
  group: IGroup;
  wallet: IWallet;
  block: IBlock;
};

export const StoreProvider = ({children}: any) => {
  const [store, reducer] = useState<Store | undefined>(MockStore);
  return (
    <StudentContext.Provider value={store}>
      <StudentContextUpdate.Provider value={reducer}>
        {children}
      </StudentContextUpdate.Provider>
    </StudentContext.Provider>
  );
};
