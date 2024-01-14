import {
    SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE,
    LOADER_FALSE, LOADER_TRUE,  SET_USER, SIGNUP, SIGNUP_FAILURE, SIGNUP_SUCCESS, COMPLETE_PROFILE_SUCCESS, COMPLETE_PROFILE_FAILURE, COMPLETE_PROFILE, 
} from '../constants'


export default class AuthAction {

    static SetUser(payload) {
        return {
          type: SET_USER,
          payload,
        };
      }

    static SignIn(payload) {
        console.log('araha')
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
            type: SIGNUP,
            payload
        }
    }
    static SignUpSuccess(payload) {
        return {
            type: SIGNUP_SUCCESS,
            payload
        }
    }
    static SignUpFailure() {
        return {
            type: SIGNUP_FAILURE
        }
    }

  

    static SetUser(payload) {
        return {
            type: SET_USER,
            payload
        }
    }
    static Logout(payload) {
        return {
            type: LOGOUT,
            payload,
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
    
    static CompleteProfile(payload) {
        return {
            type: COMPLETE_PROFILE,
            payload
        }
    }
    static CompleteProfileSuccess(payload) {
        return {
            type: COMPLETE_PROFILE_SUCCESS,
            payload
        }
    }

    static CompleteProfileFailure(payload) {
        return {
            type: COMPLETE_PROFILE_FAILURE,
            payload
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