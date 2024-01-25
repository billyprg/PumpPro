import { ADD_VENDOR, ADD_VENDOR_FAILURE, ADD_VENDOR_SUCCESS, GET_VENDOR, GET_VENDOR_FAILURE, GET_VENDOR_SUCCESS } from "../../constants";

export default class ManagerAppAction {

    static SetUser(payload) {
        return {
          type: SET_USER,
          payload,
        };
      }

      static AddVendor(payload,cb) {
        return {
            type: ADD_VENDOR,
            payload,
            cb
        }
    }
    static AddVendorSuccess() {
        return {
            type: ADD_VENDOR_SUCCESS
        }
    }
    static AddVendorFailure() {
        return {
            type: ADD_VENDOR_FAILURE
        }
    }


    static GetVendor(payload) {
        return {
            type: GET_VENDOR,
            payload
        }
    }
    static GetVendorSuccess(payload) {
        return {
            type: GET_VENDOR_SUCCESS,
            payload
        }
    }
    static GetVendorFailure() {
        return {
            type: GET_VENDOR_FAILURE
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