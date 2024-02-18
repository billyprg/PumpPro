import { CURRENT_DATE, GET_REVENUE, GET_REVENUE_FAILURE, GET_REVENUE_SUCCESS, SHIFT_ONE_STATUS, SHIFT_TWO_STATUS } from "../../constants"


export default class AdminAppAction {
    

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

    static ShiftOneStatus(payload) {

        return {
            type: SHIFT_ONE_STATUS,
            payload
            
        }
    }

    static ShiftTwoStatus(payload) {
        return {
            type: SHIFT_TWO_STATUS,
            payload
        }
    }

    static CurrentDate(payload) {
        return {
            type: CURRENT_DATE,
            payload
        }
    }

    static GetRevenue(payload) {
        return {
            type: GET_REVENUE,
            payload,
            
        }
    }
    static GetRevenueSuccess(payload) {
        return {
            type: GET_REVENUE_SUCCESS,
            payload
        }
    }
    static GetRevenueFailure() {
        return {
            type: GET_REVENUE_FAILURE
        }
    }

}