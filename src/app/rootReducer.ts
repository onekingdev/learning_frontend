import {combineReducers} from 'redux';
import user from './reducers/userReducer';
import student from './reducers/studentReducer';
import earning from './reducers/earningReducer';
import avatar from './reducers/avatarReducer';


export default combineReducers({
    user,
    student,
    earning,
    avatar
});
