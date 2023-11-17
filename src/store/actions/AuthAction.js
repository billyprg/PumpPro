import {
    SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE,
    ADD_POST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE,
    LOADER_FALSE, LOADER_TRUE, SIGN_UP, SIGN_UP_SUCCESS, SIGNIN_UP_FAILURE, SEND_OTP, SEND_OTP_SUCCESS, SEND_OTP_FAILURE, VERIFY_OTP, VERIFY_OTP_SUCCESS, VERIFY_OTP_FAILURE, SET_USER, RESET_PASSWORD, RESET_PASSWORD_SUCCESS,
     CHANGE_PASSWORD, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE
} from '../constants'


export default class AuthAction {

    static SignIn(payload) {
        return {
            type: SIGNIN,
            payload
        }
    }
    static SignInSuccess(payload) {
        return {
            type: SIGNIN_SUCCESS,
            payload
        }
    }
    static SignInFailure(payload) {
        return {
            type: SIGNIN_FAILURE
        }
    }

    static SignUp(payload) {
        return {
            type: SIGN_UP,
            payload
        }
    }
    static SignUpSuccess(payload) {
        return {
            type: SIGN_UP_SUCCESS,
            payload
        }
    }
    static SignUpFailure(payload) {
        return {
            type: SIGNIN_UP_FAILURE
        }
    }

    static VerifyOtp(payload,cb) {
        return {
            type: VERIFY_OTP,
            payload,
            cb
        }
    }
    static VerifyOtpSuccess(payload) {
        return {
            type: VERIFY_OTP_SUCCESS,
            payload
        }
    }
    static VerifyOtpFailure(payload) {
        return {
            type: VERIFY_OTP_FAILURE
        }
    }

    static SendOtp(payload, cb) {
        return {
            type: SEND_OTP,
            payload,
            cb,
        }
    }
    static SendOtpSuccess(payload) {
        return {
            type: SEND_OTP_SUCCESS,
            payload
        }
    }
    static SendOtpFailure(payload) {
        return {
            type: SEND_OTP_FAILURE
        }
    }
    static SendOtpFailure(payload) {
        return {
            type: SEND_OTP_FAILURE
        }
    }

    static SetUser(payload) {
        return {
            type: SET_USER,
            payload
        }
    }
    static Logout(payload,cb) {
        return {
            type: LOGOUT,
            payload,
            cb
        }
    }
    static LogoutSuccess() {
        return {
            type: LOGOUT_SUCCESS
        }
    }
    static LogoutFailure() {
        return {
            type: LOGOUT_FAILURE
        }
    }
    
    static ResetPassword(payload,token) {
        return {
            type: RESET_PASSWORD,
            payload,
            token
        }
    }
    static ResetPasswordSuccess(payload) {
        return {
            type: RESET_PASSWORD_SUCCESS,
            payload
        }
    }
    static ResetpasswordFailure(payload) {
        return {
            type: ADD_POST_SUCCESS,
            payload
        }
    }

    static ChangePassword(payload,token) {
        return {
            type: CHANGE_PASSWORD,
            payload,
            token
        }
    }
    static ChangePasswordSuccess(payload) {
        return {
            type: CHANGE_PASSWORD_SUCCESS,
            payload
        }
    }
    static ChangePasswordFailure(payload) {
        return {
            type: CHANGE_PASSWORD_FAILURE,
            payload
        }
    }

    static AddPostFailure() {
        return {
            type: ADD_POST_FAILURE
        }
    }

    static GetPosts() {
        return {
            type: GET_POSTS
        }
    }
    static GetPostsSuccess(payload) {
        return {
            type: GET_POSTS_SUCCESS,
            payload
        }
    }
    static GetPostsFailure() {
        return {
            type: GET_POSTS_FAILURE
        }
    }

    static LoaderTrue() {
        return {
            type: LOADER_TRUE
        }
    }
    static LoaderFalse() {
        return {
            type: LOADER_FALSE
        }
    }

}