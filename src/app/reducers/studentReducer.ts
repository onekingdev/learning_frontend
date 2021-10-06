const studentReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'STUDENT_GET_COLLECTIBLE':
      return {
        ...state,
        student: {
          collectibles: [...state.student.collectibles, action.payload],
        },
      };
    case 'STUDENT_ANSWERS_BLOCK':
      return {
        ...state,
      };
    case 'STUDENT_ANSWERS_QUESTION':
      return {
        ...state,
      };
    case 'STUDENT_ADD_AVATAR':
      return {
        ...state,
        student: {
          avatars: [...state.student.avatars, action.payload],
        },
      };
    case 'STUDENT_REMOVE_AVATAR':
      return {
        ...state,
        student: {
          avatars: state.student.avatars.filter(
            (avatar: {id: string}) => avatar.id !== action.payload
          ),
        },
      };
    case 'STUDENT_AUTH':
      return {
        ...state,
        student: action.payload,
      };
    case 'STUDENT_SELECT_CARD':
      return {
        ...state,
        cardView: action.payload,
      };
    case 'STUDENT_CLOSE_CARD':
      return {
        ...state,
        cardView: null,
      };
    case 'STUDENT_SELECT_TYPE_GAME':
      return {
        ...state,
        gameType: action.payload,
      };
    case 'STUDENT_SELECT_GAME':
      return {
        ...state,
        game: action.payload,
      };
    case 'STUDENT_CLOSE_GAME':
      return {
        ...state,
        game: null,
      };
    case 'STUDENT_SELECT_TOPIC':
      return {
        ...state,
        student: {
          topic: action.payload,
        },
      };
    case 'STUDENT_CONFIG':
      return {
        ...state,
        student: {
          config: action.payload,
        },
      };
  }
};

export default studentReducer;
