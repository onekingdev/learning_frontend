import * as TYPE from '../types';
import {IEarning} from '../entities/earning';
const INITIAL_STATE = {
    accessories: null,
    head: null,
    clothes: null,
    pants: null
};
// const studentReducer = (state = INITIAL_STATE, action: {type: string, payload: any}) => {
const avatarReducer = (state = INITIAL_STATE, action: {type: string, payload: IEarning}) => {
  switch (action.type) {
    case TYPE.AVATAR_SET_DATA:
      return {
        ...state,
        ...action.payload
      };
    case TYPE.AVATAR_SET_ACCESORY:
      return {
        ...state,
        accessories: action.payload
      };
    case TYPE.AVATAR_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default avatarReducer;
