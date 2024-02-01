import {
  ADD_VENDOR,
  ADD_VENDOR_FAILURE,
  ADD_VENDOR_SUCCESS,
  GET_CURRENT_RATES,
  GET_CURRENT_RATES_FAILURE,
  GET_CURRENT_RATES_SUCCESS,
  GET_VENDOR,
  GET_VENDOR_FAILURE,
  GET_VENDOR_SUCCESS,
  POST_SHIFT_END,
  POST_SHIFT_END_FAILURE,
  POST_SHIFT_END_SUCCESS,
  POST_SHIFT_START,
  POST_SHIFT_START_FAILURE,
  POST_SHIFT_START_SUCCESS,
  SET_CURRENT_RATES,
  SET_CURRENT_RATES_FAILURE,
  SET_CURRENT_RATES_SUCCESS,
  SET_USER,
} from '../../constants';

export default class CommonAction {
  static SetUser(payload) {
    return {
      type: SET_USER,
      payload,
    };
  }

  static SetCurrentRates(payload) {
    return {
      type: SET_CURRENT_RATES,
      payload,
    };
  }

  static SetCurrentRatesSuccess(payload) {
    return {
      type: SET_CURRENT_RATES_SUCCESS,
      payload,
    };
  }

  static SetCurrentRatesFailure() {
    return {
      type: SET_CURRENT_RATES_FAILURE,
    };
  }

  static GetCurrentRates(payload) {
    return {
      type: GET_CURRENT_RATES,
      payload,
    };
  }

  static GetCurrentRatesSuccess(payload) {
    return {
      type: GET_CURRENT_RATES_SUCCESS,
      payload,
    };
  }

  static GetCurrentRatesFailure() {
    return {
      type: GET_CURRENT_RATES_FAILURE,
    };
  }
}
