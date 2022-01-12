import {applyMiddleware, compose, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import {IStudent} from './entities/student';
import {IGroup} from './entities/group';
import {IWallet} from './entities/wallet';
import {IBlock} from './entities/block';
import {Gender} from './entities/gender';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ICollectibleCategory } from './entities/collectibles';
import { IAreasOfKnowledge } from './entities/areasOfKnowledge';

export type Store = {
    user: IStudent;
    group: IGroup;
    wallet: IWallet;
    block?: IBlock;
    collectibles?: ICollectibleCategory;
    areasOfKnowLedge?: IAreasOfKnowledge;
  };

export const MockStore: Store = {
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
    // block: {
    //   questions: ['hello'],
    //   config: {name: 'sdscd'},
    //   chosenAnswer: '2',
    //   isCorrect: true,
    // },
};

const persistConfig = {
    key: 'root',
    storage: storage
};

const logger = createLogger();

const promise = () => (next: any) => (action: any) => (
    typeof action.then === 'function'
        ? Promise.resolve(action).then(next, (error: any) => {
            throw error; // To let the caller handle the rejection
        })
        : next(action)
)

const enhancer = composeWithDevTools(
    applyMiddleware(thunk, promise, logger),
    // applyMiddleware(thunk, promise),
);

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store: any = createStore(persistedReducer, enhancer);
export default function configureStore(onCompletion: any) {
    // let store: any = createStore(persistedReducer, enhancer);
    const persistor = persistStore(store);
    return {store, persistor};
}
