import * as TYPE from '../types';

const INITIAL_STATE = {
  id: null,
  isActive: false,
  name: null,
  typeOf: null,
  zip: null,
  country: null,
};
const schoolReducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case TYPE.SCHOOL_SET_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case TYPE.SCHOOL_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default schoolReducer;
