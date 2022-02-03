import * as TYPE from '../types';
import {IUser} from '../entities/user';
const INITIAL_STATE = {
    username: null,
    avatar: null,
    avatarFavorites: null,
    gender: null,
    firstName: null,
    lastName: null,
    email: null,
    activeGroupId: null,
    DoB: null,
    guardianId: null,
    lastLogin: null,
    isSuperuser: null,
    isStaff: null,
    isActive: null,
    dateJoined: null,
    token: null,
    refreshToken: null,
};
// const studentReducer = (state = INITIAL_STATE, action: {type: string, payload: any}) => {
const userReducer = (state = INITIAL_STATE, action: {type: string, payload: IUser}) => {
  switch (action.type) {
    case TYPE.USER_SET_DATA:
      return {
        ...state,
        ...action.payload
      };
    case TYPE.USER_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default userReducer;
