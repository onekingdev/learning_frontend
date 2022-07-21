import * as TYPE from '../types';

const INITIAL_STATE = {
  id: null,
  firstName: null,
  lastName: null,
  zip: null,
  country: null,
  orderSet: <any>[],
  classrooms: <any>[],
};
const TEACHERReducer = (
  state = INITIAL_STATE,
  action: {type: string; payload: any}
) => {
  // const TEACHERReducer = (state = INITIAL_STATE, action: {type: string, payload: ITEACHER}) => {
  switch (action.type) {
    case TYPE.TEACHER_SET_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case TYPE.TEACHER_AUTH:
      return {
        ...state,
        token: action.payload,
      };
    case TYPE.TEACHER_ADD_ORDER:
      return {
        ...state,
        orderSet: state.orderSet.push(action.payload),
      };
    case TYPE.TEACHER_ADD_CLASSROOM:
      return {
        ...state,
        classrooms: state.classrooms.push(action.payload),
      };
    default:
      return state;
  }
};

export default TEACHERReducer;
