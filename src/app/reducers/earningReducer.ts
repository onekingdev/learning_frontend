import * as TYPE from '../types';
import {IEarning} from '../entities/earning';
const INITIAL_STATE = {
    rank: 0,
    level: 0,
    exp: 0,
    expMax: 0,
    progress: 0,
    energyCharge: 0,
    balance: 0,
};
// const studentReducer = (state = INITIAL_STATE, action: {type: string, payload: any}) => {
const earningReducer = (state = INITIAL_STATE, action: {type: string, payload: IEarning}) => {
  switch (action.type) {
    case TYPE.EARNING_SET_DATA:
      return {
        ...state,
        ...action.payload
      };
    case TYPE.EARNING_ENERGY_UP:
      return {
        ...state,
        energyCharge: state.energyCharge + 1
      }
    case TYPE.EARNING_ENERGY_SET:
      return {
        ...state,
        energyCharge: action.payload
      }
    case TYPE.EARNING_ENERGY_RESET:
      return {
        ...state,
        energyCharge: 0
      }
    case TYPE.EARNING_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default earningReducer;
