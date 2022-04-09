import * as TYPE from '../types';
import { IUser } from '../entities/user';
const INITIAL_STATE = {
  lastLogin: null,
  isSuperuser: null,
  username: null,
  firstName: null,
  lastName: null,
  email: null,
  isStaff: null,
  isActive: null,
  dateJoined: null,
  // language: null,
  language: "TH",     // test for language
  profile: {
    role: null,
  },
  token: null,
  sound: true
};
// const studentReducer = (state = INITIAL_STATE, action: {type: string, payload: any}) => {
const userReducer = (state = INITIAL_STATE, action: {type: string, payload: IUser}) => {
  switch (action.type) {
    case TYPE.USER_SET_DATA:
      return {
        ...state,
        ...action.payload,
        language: "TH",     // test for language

      };
    case TYPE.USER_SET_TOGGLE_SOUND:
      return {
        ...state,
        sound: !state.sound
      };
    case TYPE.USER_SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
    case TYPE.GUARDIAN_UPDATE_EMAIL_PWD:
      return {
        ...state,
        email: action.payload.email
      };
    case TYPE.USER_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default userReducer;
