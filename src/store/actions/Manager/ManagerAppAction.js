import { ADD_VENDOR, ADD_VENDOR_FAILURE, ADD_VENDOR_SUCCESS, COLLECT_RENT, COLLECT_RENT_FAILURE, COLLECT_RENT_SUCCESS, GET_VENDOR, GET_VENDOR_FAILURE, GET_VENDOR_SUCCESS, POST_SHIFT_END, POST_SHIFT_END_FAILURE, POST_SHIFT_END_SUCCESS, POST_SHIFT_START, POST_SHIFT_START_FAILURE, POST_SHIFT_START_SUCCESS, RENT, RENT_FAILURE, RENT_SUCCESS } from "../../constants";

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

    static PostShiftStart(payload) {
        return {
            type: POST_SHIFT_START,
            payload,
            
            
        }
    }
    static PostShiftStartSuccess(payload) {
        return {
            type: POST_SHIFT_START_SUCCESS,
            payload
        }
    }
    static PostShiftStartFailure() {
        return {
            type: POST_SHIFT_START_FAILURE
        }
    }

    static PostShiftEnd(payload) {
        return {
            type: POST_SHIFT_END,
            payload,
            
        }
    }
    static PostShiftEndSuccess(payload) {
        return {
            type: POST_SHIFT_END_SUCCESS,
            payload
        }
    }
    static PostShiftEndFailure() {
        return {
            type: POST_SHIFT_END_FAILURE
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


    static Rent(payload) {
        return {
            type: RENT,
            payload,
            
        }
    }
    static RentSuccess(payload) {
        return {
            type: RENT_SUCCESS,
            payload
        }
    }
    static RentFailure() {
        return {
            type: RENT_FAILURE
        }
    }

    static CollectRent(payload) {
        return {
            type: COLLECT_RENT,
            payload,
            
        }
    }
    static CollectRentSuccess(payload) {
        return {
            type: COLLECT_RENT_SUCCESS,
            payload
        }
    }
    static CollectRentFailure() {
        return {
            type: COLLECT_RENT_FAILURE
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