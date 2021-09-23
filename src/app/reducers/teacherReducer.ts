const teacherReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'TEACHER_CREATES_STUDENT':
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case 'TEACHER_AUTH_STUDENT':
      return {
        ...state,
        auth: action.payload,
      };
    case 'TEACHER_CREATE_GROUP':
      return {
        ...state,
        groups: [...state.groups, action.payload],
      };
    case 'TEACHER_REMOVE_GROUP':
      return {
        ...state,
        groups: state.groups.filter(
          (group: {id: string}) => group.id !== action.payload
        ),
      };
    case 'TEACHER_ADD_STUDENT':
      return {
        ...state,
        groupMembers: [...state.groupMembers, action.payload],
      };
    case 'TEACHER_REMOVE_STUDENT':
      return {
        ...state,
        groupMembers: state.groupMembers.filter(
          (member: {id: string}) => member.id !== action.payload
        ),
      };
  }
};

export default teacherReducer;
