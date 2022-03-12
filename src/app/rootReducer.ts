import { combineReducers } from 'redux';
import user from './reducers/userReducer';
import student from './reducers/studentReducer';
import earning from './reducers/earningReducer';
import avatar from './reducers/avatarReducer';
import interests from './reducers/interestReducer'
import guardian from './reducers/guardianReducer'
import grade from './reducers/gradeReducer'

export default combineReducers({
    user,
    student,
    earning,
    avatar,
    interests,
    guardian,
    grade
});
