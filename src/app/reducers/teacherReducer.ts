import * as TYPE from '../types';

const INITIAL_STATE = {
  reLoadImgs: false
};
const TEACHERReducer = (state = INITIAL_STATE, action: { type: string, payload: any }) => {
  // const TEACHERReducer = (state = INITIAL_STATE, action: {type: string, payload: ITEACHER}) => {
  switch (action.type) {
    case TYPE.TEACHER_SET_DATA:
      return {
        ...state,
        ...action.payload
      };
    case TYPE.TEACHER_AUTH:
      return {
        ...state,
        token: action.payload,
      };
    case TYPE.TEACHER_RELOAD_IMAGES:
      return {
        ...state,
        reLoadImgs: !state.reLoadImgs,
      };
    default:
      return state;
  }
};

export default TEACHERReducer;
