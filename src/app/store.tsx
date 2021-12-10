import React, {useContext, useState, createContext} from 'react';

import {IStudent} from './entities/student';
import {IGroup} from './entities/group';
import {IWallet} from './entities/wallet';
import {IBlock} from './entities/block';

const StudentContext = createContext({});
const StudentContextUpdate = createContext({});

export const useStore = () => useContext(StudentContext);
export const useStoreUpdate = () => useContext(StudentContextUpdate);

type Store = {
  user: IStudent;
  group: IGroup;
  wallet: IWallet;
  block: IBlock;
};

export const StudentProvider = ({children}) => {
  const [store, reducer] = useState<Store | undefined>(undefined);

  return (
    <StudentContext.Provider value={store}>
      <StudentContextUpdate.Provider value={reducer}>
        <div> {children} </div>
      </StudentContextUpdate.Provider>
    </StudentContext.Provider>
  );
};
