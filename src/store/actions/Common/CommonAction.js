import {
  ADD_VENDOR,
  ADD_VENDOR_FAILURE,
  ADD_VENDOR_SUCCESS,
  DELETE_EXPENSES,
  DELETE_EXPENSES_FAILURE,
  DELETE_EXPENSES_SUCCESS,
  EXPENSES,
  EXPENSES_FAILURE,
  EXPENSES_SUCCESS,
  GET_CURRENT_RATES,
  GET_CURRENT_RATES_FAILURE,
  GET_CURRENT_RATES_SUCCESS,
  GET_EXPENSES,
  GET_EXPENSES_FAILURE,
  GET_EXPENSES_SUCCESS,
  GET_SALES,
  GET_SALES_FAILURE,
  GET_SALES_SUCCESS,
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

  static GetSales(payload) {
    return {
      type: GET_SALES,
      payload,
    };
  }

  static GetSalesSuccess(payload) {
    return {
      type: GET_SALES_SUCCESS,
      payload,
    };
  }

  static GetSalesFailure() {
    return {
      type: GET_SALES_FAILURE,
    };
  }

  static Expenses(payload,cb) {
    return {
      type: EXPENSES,
      payload,
      cb
    };
  }

  static ExpensesSuccess(payload) {
    return {
      type: EXPENSES_SUCCESS,
      payload,
    };
  }

  static ExpensesFailure() {
    return {
      type: EXPENSES_FAILURE,
    };
  }

  static GetExpenses(payload) {
    return {
      type: GET_EXPENSES,
      payload,
    };
  }

  static GetExpensesSuccess(payload) {
    return {
      type: GET_EXPENSES_SUCCESS,
      payload,
    };
  }

  static GetExpensesFailure() {
    return {
      type: GET_EXPENSES_FAILURE,
    };
  }


  static DeleteExpenses(payload) {
    return {
      type: DELETE_EXPENSES,
      payload,
    };
  }

  static DeleteExpensesSuccess(payload) {
    return {
      type: DELETE_EXPENSES_SUCCESS,
      payload,
    };
  }

  static DeleteExpensesFailure() {
    return {
      type: DELETE_EXPENSES_FAILURE,
    };
  }
}
