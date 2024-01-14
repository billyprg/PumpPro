import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AdminAppReducer from './Admin/AdminAppReducer';
import ManagerAppReducer from './Manager/ManagerAppReducer';

const RootReducer = combineReducers({
    AuthReducer,
    AdminAppReducer,
    ManagerAppReducer
});

export default RootReducer;