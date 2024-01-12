import { takeLatest, all } from 'redux-saga/effects'
import { SET_USER, SIGNIN } from "../constants"
import AuthMiddleware from "../middlewares/AuthMiddleware"

export function* Sagas() {
    yield all([
        yield takeLatest(SIGNIN, AuthMiddleware.SignIn),
        yield takeLatest(SET_USER, AuthMiddleware.SetUser)
       
    ])
}