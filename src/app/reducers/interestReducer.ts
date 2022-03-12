import * as TYPE from '../types';
import {IStudent} from '../entities/student';
import {IGroup} from '../entities/group';
import {IBlock} from '../entities/block';

const INITIAL_STATE: any = {
  interests:[]
}
const interestReducer = (state = INITIAL_STATE, action: {type: string, payload: any}) => {
// const studentReducer = (state = INITIAL_STATE, action: {type: string, payload: IStudent}) => {
  switch (action.type) {
    case TYPE.INTEREST_SET_DATA:
      return {
        ...state,
        interests: action.payload
      };
    case TYPE.INTEREST_RESET:
      return INITIAL_STATE
    default:
      return state;
  }
};

export default interestReducer;
