export default class ManagerAppAction {

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