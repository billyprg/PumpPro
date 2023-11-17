import { AuthAction } from '../actions';
import Store from '..';
import { NavigationService, ApiCaller, Constants, showToast } from '../../config';
import { put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import configVariables from "../../config/variables"
import { AuthRoutes } from '../../config/Constants';
import { AppStack } from '../../config/navigationConfig/AppStack';
import { AuthStack } from '../../config/navigationConfig/AuthStack';
export default class AuthMiddleware {

    static *SignIn({ payload }) {
        const { replace, navigate } = NavigationService
        try {
            let response = yield ApiCaller.Post(AuthRoutes.LOGIN, payload)
            if (response?.status === 200) {
                yield put(AuthAction.SignInSuccess(response?.data))
                yield put(AuthAction.SetUser(response?.data?.data))
                NavigationService.replace(AppStack.HomeStack.name)
            } else {
                yield put(AuthAction.SignUpFailure())
                if (response?.data?.data?.status === 0) {
                    navigate(AuthStack.SelectEmailPhoneNumber.name, { data: response?.data?.data })
                } else {
                    yield put(AuthAction.SignInFailure())
                    showToast("error", `${response?.data?.error?.message}`)
                }

            }
        }
        catch (err) {
            yield put(AuthAction.SignInFailure())
            console.log(`%c${err.name}`, "color: red", ' => ', err)
            showToast("error", `${err?.data?.error?.message}`)
        }
    }

    static *SignUp({ payload }) {
        const { replace, navigate } = NavigationService
        try {
            let response = yield ApiCaller.Post(AuthRoutes.SIGN_UP, payload)
            console.log("Sign up response -->> ", response);
            if (response?.status === 200) {
                yield put(AuthAction.SignUpSuccess(response?.data?.data))
                navigate(AuthStack.SelectEmailPhoneNumber.name, { data: response?.data?.data?.user })
            } else {
                console.log("Response error  -->>", response);
                yield put(AuthAction.SignUpFailure())
                if (response?.data?.data?.status === 0) {
                    navigate(AuthStack.SelectEmailPhoneNumber.name, { data: response?.data?.data?.user })
                } else {
                    showToast("error", response?.data?.error?.message)
                }
            }
        }
        catch (err) {
            yield put(AuthAction.SignInFailure())
            console.log(`%c${err.name}`, "color: red", ' => ', err)
            showToast("error", `"Error here`)
        }
    }

    static *SendOtp({ payload, cb }) {
        const { replace } = NavigationService
        try {
            let response = yield ApiCaller.Post(AuthRoutes.SEND_OTP, payload)
            console.log("Send otp response ->> ", response);
            if (response?.status === 200) {

                yield put(AuthAction.SendOtpSuccess(response?.data))
                cb ? cb() : NavigationService.navigate(AuthStack.EnterOTP.name, { data: payload })
            } else {
                console.log("Response error  -->>", response);
                yield put(AuthAction.SendOtpFailure())
            }
        }
        catch (err) {
            yield put(AuthAction.SendOtpFailure())
            console.log(`%c${err.name}`, "color: red", ' => ', err)
            showToast("error", `${err?.data?.error?.message}`)
        }
    }

    static *VerifyOtp({ payload, cb }) {
        const { replace } = NavigationService
        try {
            let response = yield ApiCaller.Post(AuthRoutes.VERIFY_OTP, payload)
            if (response?.status === 200) {
                yield put(AuthAction.VerifyOtpSuccess(response?.data))
                if (cb) {
                    NavigationService.navigate(AuthStack.ResetPassword.name, { data: response?.data?.data })
                } else {
                    yield put(AuthAction.SetUser(response?.data?.data))
                    NavigationService.reset_0(AppStack.HomeStack.name)
                }

            } else {
                console.log("Response error  -->>", response);
                yield put(AuthAction.VerifyOtpFailure())
                showToast("error", response?.data?.error?.message)
            }
        }
        catch (err) {
            yield put(AuthAction.VerifyOtpFailure())
            console.log(`%c${err.name}`, "color: red", ' => ', err)
            showToast("error", `${err?.data?.error?.message}`)
        }
    }

    static *SetUser({ payload }) {
        try {
            AsyncStorage.setItem("user", JSON.stringify(payload))
        }
        catch (err) {
        }
    }

    static *Logout({ payload, cb }) {
        try {
            let response = yield ApiCaller.Post(AuthRoutes.LOG_OUT, {}, {
                'x-auth-token': payload
            })
            if (response?.status === 200) {
                yield put(AuthAction.LogoutSuccess())
                AsyncStorage.removeItem("user");
                NavigationService.reset_0(AuthStack.SignIn.name)
            } else {
                yield put(AuthAction.LogoutFailure())
                showToast("error", response?.data?.error?.message)
            }
        }
        catch (err) {
            console.log(`%c${err.name}`, "color: red", ' => ', err)
        }
    }

    static *ResetPassword({ payload, token }) {
        try {
            let response = yield ApiCaller.Post(AuthRoutes.RESET_PASSWORD, payload, {
                'x-auth-token': token
            })
            if (response?.status === 200) {
                yield put(AuthAction.ResetPasswordSuccess())
                showToast("success", response?.data?.message)
                setTimeout(() => {
                    NavigationService.reset_0(AuthStack.SignIn.name)
                }, 2000);

            } else {
                yield put(AuthAction.ResetpasswordFailure())
                showToast("error", response?.data?.error?.message)
            }
        }
        catch (err) {
            console.log(`%c${err.name}`, "color: red", ' => ', err)
            showToast("error", "Something went wrong and we couldn't proceed user request at this moment")
        }
    }

    static *ChangePassword({ payload, token }) {
        try {
            let response = yield ApiCaller.Post(AuthRoutes.CHANGE_PASSWORD, payload, {
                'x-auth-token': token
            })
            console.log("Change password response -->> ", response);
            if (response?.status === 200) {
                yield put(AuthAction.ChangePasswordSuccess())
                showToast("success", response?.data?.message)
                setTimeout(() => {
                    NavigationService.pop()
                }, 2000);

            } else {
                yield put(AuthAction.ChangePasswordFailure())
                showToast("error", response?.data?.error?.message)
            }
        }
        catch (err) {
            console.log(`%c${err.name}`, "color: red", ' => ', err)
            yield put(AuthAction.ChangePasswordFailure())
            showToast("error", "Something went wrong and we couldn't proceed user request at this moment")
        }
    }


}