import { takeLatest, all } from 'redux-saga/effects'
import { COMPLETE_PROFILE, LOGOUT, SET_USER, SIGNIN, SIGNUP } from "../constants"
import AuthMiddleware from "../middlewares/AuthMiddleware"

export function* Sagas() {
    yield all([
        yield takeLatest(SIGNIN, AuthMiddleware.SignIn),
        yield takeLatest(SET_USER, AuthMiddleware.SetUser),
        yield takeLatest(SIGNUP, AuthMiddleware.SignUp),
        yield takeLatest(LOGOUT, AuthMiddleware.Logout),
        yield takeLatest(COMPLETE_PROFILE, AuthMiddleware.CompleteProfile)
    ])
}