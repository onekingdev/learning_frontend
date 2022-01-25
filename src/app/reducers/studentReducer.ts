import * as TYPE from '../types';
import {IStudent} from '../entities/student';
import {IGroup} from '../entities/group';
import {IWallet} from '../entities/wallet';
import {IBlock} from '../entities/block';
const INITIAL_STATE = {
  userName: null,
  avatar: null,
  avatarFavorites: [],
  gender: null,
  firstName: null,
  lastName: null,
  activeGroupId: null,
  DoB: null,
  guardianId: null,
  email: null,
  token: null,
};
// const studentReducer = (state = INITIAL_STATE, action: {type: string, payload: any}) => {
const studentReducer = (state = INITIAL_STATE, action: {type: string, payload: IStudent}) => {
  switch (action.type) {
    case TYPE.STUDENT_SET_DATA:
      console.log('will set user', action.payload);
      return {
        ...state,
        ...action.payload
      };
    // case TYPE.STUDENT_GET_COLLECTIBLE:
    //   return {
    //     ...state,
    //       collectibles: [...state.collectibles, action.payload],
    //   };
    case TYPE.STUDENT_ANSWERS_BLOCK:
      return {
        ...state,
      };
    case TYPE.STUDENT_ANSWERS_QUESTION:
      return {
        ...state,
      };
    // case TYPE.STUDENT_ADD_AVATAR:
    //   return {
    //     ...state,
    //     student: {
    //       avatars: [...state.avatars, action.payload],
    //     },
    //   };
    // case TYPE.STUDENT_REMOVE_AVATAR:
    //   return {
    //     ...state,
    //     student: {
    //       avatars: state.avatars.filter(
    //         (avatar: {id: string}) => avatar.id !== action.payload
    //       ),
    //     },
    //   };
    case TYPE.STUDENT_AUTH:
      return {
        ...state,
        student: action.payload,
      };
    case TYPE.STUDENT_SELECT_CARD:
      return {
        ...state,
        cardView: action.payload,
      };
    case TYPE.STUDENT_CLOSE_CARD:
      return {
        ...state,
        cardView: null,
      };
    case TYPE.STUDENT_SELECT_TYPE_GAME:
      return {
        ...state,
        gameType: action.payload,
      };
    case TYPE.STUDENT_SELECT_GAME:
      return {
        ...state,
        game: action.payload,
      };
    case TYPE.STUDENT_CLOSE_GAME:
      return {
        ...state,
        game: null,
      };
    case TYPE.STUDENT_SELECT_TOPIC:
      return {
        ...state,
        student: {
          topic: action.payload,
        },
      };
    case TYPE.STUDENT_CONFIG:
      return {
        ...state,
        student: {
          config: action.payload,
        },
      };
    case TYPE.STUDENT_RESET:
      return INITIAL_STATE;
    case TYPE.SET_COLLECTIBLE:
      return {
        ...state,
        collectibles: action.payload
      };
    case TYPE.SET_AOK:
      return {
        ...state,
        areasOfKnowledge: action.payload
      };
    case TYPE.SET_BLOCK_PRESENTATION:
      return {
        ...state,
        blockPresentation: action.payload
      };
    default:
      return state;
  }
};

export default studentReducer;
