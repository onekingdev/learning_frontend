import { combineReducers } from 'redux';
import user from './reducers/userReducer';
import student from './reducers/studentReducer';
import earning from './reducers/earningReducer';
import avatar from './reducers/avatarReducer';
import interests from './reducers/interestReducer'
import guardian from './reducers/guardianReducer'
import grade from './reducers/gradeReducer'
import teacher from './reducers/teacherReducer'
import certificate from './reducers/certificateReducer'
import subscriber from './reducers/subscriber';
import school from './reducers/school';
import admin from './reducers/adminReducer'


export default combineReducers({
    user,
    student,
    earning,
    avatar,
    interests,
    guardian,
    grade,
    teacher,
    certificate,
    subscriber,
    school,
    admin
});
