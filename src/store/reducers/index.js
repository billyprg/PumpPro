import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AdminAppReducer from './Admin/AdminAppReducer';
import ManagerAppReducer from './Manager/ManagerAppReducer';
import CommonReducer from './Common/CommonReducer';

const RootReducer = combineReducers({
    AuthReducer,
    AdminAppReducer,
    ManagerAppReducer,
    CommonReducer
});

export default RootReducer;