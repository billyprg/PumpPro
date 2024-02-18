import { takeLatest, all } from 'redux-saga/effects'
import { ADD_VENDOR, COMPLETE_PROFILE, EXPENSES, GET_CURRENT_RATES, GET_EXPENSES, GET_REVENUE, GET_SALES, GET_VENDOR, LOGOUT, POST_SHIFT_END, POST_SHIFT_START, SET_CURRENT_RATES, SET_USER, SIGNIN, SIGNUP } from "../constants"
import AuthMiddleware from "../middlewares/AuthMiddleware"
import ManagerAppMiddleware from '../middlewares/Manager/ManagerAppMiddleware'
import CommonMiddleware from '../middlewares/Common/CommonMiddleware'
import AdminAppMiddleware from '../middlewares/Admin/AdminAppMiddleware'

export function* Sagas() {
    yield all([
        yield takeLatest(SIGNIN, AuthMiddleware.SignIn),
        yield takeLatest(SET_USER, AuthMiddleware.SetUser),
        yield takeLatest(SIGNUP, AuthMiddleware.SignUp),
        yield takeLatest(LOGOUT, AuthMiddleware.Logout),
        yield takeLatest(COMPLETE_PROFILE, AuthMiddleware.CompleteProfile),

        //Common
        yield takeLatest(GET_CURRENT_RATES, CommonMiddleware.GetCurrentRates),
        yield takeLatest(SET_CURRENT_RATES, CommonMiddleware.SetCurrentRates),
        yield takeLatest(GET_SALES, CommonMiddleware.GetSales),
        yield takeLatest(EXPENSES, CommonMiddleware.Expenses),
        yield takeLatest(GET_EXPENSES, CommonMiddleware.GetExpenses),

        //Manager
        yield takeLatest(ADD_VENDOR, ManagerAppMiddleware.AddVendor),
        yield takeLatest(GET_VENDOR, ManagerAppMiddleware.GetVendor),
        yield takeLatest(POST_SHIFT_START, ManagerAppMiddleware.PostShiftStart),
        yield takeLatest(POST_SHIFT_END, ManagerAppMiddleware.PostShiftEnd),

         //Admin
         yield takeLatest(GET_REVENUE, AdminAppMiddleware.GetRevenue),
        
    ])
}