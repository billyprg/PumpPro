import { takeLatest, all } from 'redux-saga/effects'
import { ADD_VENDOR, COMPLETE_PROFILE, GET_VENDOR, LOGOUT, SET_USER, SIGNIN, SIGNUP } from "../constants"
import AuthMiddleware from "../middlewares/AuthMiddleware"
import ManagerAppMiddleware from '../middlewares/Manager/ManagerAppMiddleware'

export function* Sagas() {
    yield all([
        yield takeLatest(SIGNIN, AuthMiddleware.SignIn),
        yield takeLatest(SET_USER, AuthMiddleware.SetUser),
        yield takeLatest(SIGNUP, AuthMiddleware.SignUp),
        yield takeLatest(LOGOUT, AuthMiddleware.Logout),
        yield takeLatest(COMPLETE_PROFILE, AuthMiddleware.CompleteProfile),


        //Manager
        yield takeLatest(ADD_VENDOR, ManagerAppMiddleware.AddVendor),
        yield takeLatest(GET_VENDOR, ManagerAppMiddleware.GetVendor),
    ])
}