import * as TYPE from '../types';

const INITIAL_STATE = {
  id: null,
};
const adminReducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case TYPE.ADMIN_SET_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case TYPE.ADMIN_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default adminReducer;
