import * as TYPE from '../types';

const INITIAL_STATE = {
  id: null,
  firstName: null,
  lastName: null,
  hasOrder: false,
  zip: null,
  country: null,
  schoolsubscriberSet: new Array<any>(0)
};
const subscriberReducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case TYPE.SUBSCRIBER_SET_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case TYPE.SUBSCRIBER_ADD_SCHOOL:
      return {
        ...state,
        schoolsubscriberSet: [...state.schoolsubscriberSet, {school: action.payload}]
      };
    case TYPE.SUBSCRIBER_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default subscriberReducer;
