import {applyMiddleware, compose, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import {IStudent} from './entities/student';
import {IUser} from './entities/user';
import {IGroup} from './entities/group';
import {IBlock, IBlockPresentation} from './entities/block';
import {Gender} from './entities/gender';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ICollectibleCategory } from './entities/collectibles';
import { IAreasOfKnowledge } from './entities/areasOfKnowledge';
import { AnyTxtRecord } from 'dns';

export type Store = {
    user: IUser;
    student: any;
    earning: any;
    avatar: any;
  };

export const MockStore: Store = {
    user: {
      lastLogin: new Date(),
      isSuperuser: true,
      username: "string",
      firstName: "string",
      lastName: "string",
      email: 'string',
      isStaff: false,
      isActive: true,
      dateJoined: new Date(),
      language: "string",
      profile: {
        role: "STUDENT",
      },
      token: "string",
    },
    student: {
      createTimestamp: new Date(),
      updateTimestamp: new Date(),
      firstName: "string",
      lastName: "last name",
      fullName: "full name",
      dob: new Date(),
      gender: Gender.male,
      activeGroupId: "activeGroupId",
      levelId: "levelId",
      guardianId: "guardianId",
      schoolId: "schoolId",
      balance: 4444422
    },
    earning: {
    },
    avatar: {
    }
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
export default function configureStore(onCompletion: any) {
  const store: any = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);
  return {store, persistor};
}
