import * as TYPE from '../types';
import {IEarning} from '../entities/earning';
const INITIAL_STATE:any = [];
// const studentReducer = (state = INITIAL_STATE, action: {type: string, payload: any}) => {
const gradeReducer = (state:any = INITIAL_STATE, action: {type: string, payload: any}) => {
  switch (action.type) {
    case TYPE.GRADE_SET_DATA:
      return action.payload;
    case TYPE.GRADE_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default gradeReducer;
