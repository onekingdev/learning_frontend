import * as TYPE from '../types';

const INITIAL_STATE = {
    accessory: null,
    head: null,
    clothes: null,
    pants: null,
    skin: null
};
// const studentReducer = (state = INITIAL_STATE, action: {type: string, payload: any}) => {
const avatarReducer = (state = INITIAL_STATE, action: {type: string, payload: string}) => {
  switch (action.type) {
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
