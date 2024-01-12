import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import AuthReducer from './AuthReducer';

const RootReducer = combineReducers({
    AuthReducer,
    AppReducer
});

export default RootReducer;