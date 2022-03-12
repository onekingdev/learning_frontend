import * as TYPE from '../types';
import {IEarning} from '../entities/earning';
const INITIAL_STATE = {
    id: null,
    identifier: null,
    isActive: null,
    deletedTimestamp: null,
    randomSlug: null,
    createTimestamp: null,
    updateTimestamp: null,
    name: null,
    lastName: null,
    gender: null,
};
// const studentReducer = (state = INITIAL_STATE, action: {type: string, payload: any}) => {
const guardianReducer = (state = INITIAL_STATE, action: {type: string, payload: IEarning}) => {
  switch (action.type) {
    case TYPE.GUARDIAN_SET_DATA:
      return {
        ...state,
        ...action.payload
      };
    case TYPE.GUARDIAN_SET_ACCESORY:
      return {
        ...state,
        accessories: action.payload
      };
    case TYPE.GUARDIAN_SET_AVAILABLE_PLANS:
      return{
        ...state,
        availablePlans: action.payload
      }
    case TYPE.GUARDIAN_SET_GUEARDIAN_STUDENT_PLAN:
      return{
        ...state,
        guardianstudentplanSet: action.payload
      }
    case TYPE.GUARDIAN_SET_STUDENT:
      return{
        ...state,
        student: action.payload
      }
    case TYPE.GUARDIAN_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default guardianReducer;