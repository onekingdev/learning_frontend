import * as TYPE from '../types';
import {IEarning} from '../entities/earning';
const INITIAL_STATE = {
    rank: null,
    level: null,
    exp: null,
    expMax: null,
    progress: null,
    energyCharge: null,
    balance: null,
};
// const studentReducer = (state = INITIAL_STATE, action: {type: string, payload: any}) => {
const earningReducer = (state = INITIAL_STATE, action: {type: string, payload: IEarning}) => {
  switch (action.type) {
    case TYPE.EARNING_SET_DATA:
      return {
        ...state,
        ...action.payload
      };
    case TYPE.EARNING_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default earningReducer;
