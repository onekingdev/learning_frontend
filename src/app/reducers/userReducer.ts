import { LANGUAGES } from 'constants/common';
import * as TYPE from '../types';

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
  language: LANGUAGES[0].value,
  profile: {
    role: null,
    id: null,
  },
  token: null,
  rewardfulId: null,
  sound: true,
  couponCode: {}
};

const userReducer = (
  state = INITIAL_STATE,
  action: {type: string; payload: any}
) => {
  switch (action.type) {
    case TYPE.USER_SET_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case TYPE.USER_SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case TYPE.USER_SET_REWARDFUL_ID:
      return {
        ...state,
        rewardfulId: action.payload,
      };
    case TYPE.USER_SET_TOGGLE_SOUND:
      return {
        ...state,
        sound: !state.sound,
      };
    case TYPE.USER_SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case TYPE.GUARDIAN_UPDATE_EMAIL_PWD:
      return {
        ...state,
        email: action.payload.email,
      };
    case TYPE.USER_RESET:
      return {
        ...INITIAL_STATE,
        language: state.language,
        rewardfulId: state.rewardfulId,
      };
    default:
      return state;
  }
};

export default userReducer;
