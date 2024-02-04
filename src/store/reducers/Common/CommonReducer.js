import {
    GET_CURRENT_RATES,
    GET_CURRENT_RATES_FAILURE,
    GET_CURRENT_RATES_SUCCESS,
  GET_SALES,
  GET_SALES_FAILURE,
  GET_SALES_SUCCESS,
  SET_CURRENT_RATES,
  SET_CURRENT_RATES_FAILURE,
  SET_CURRENT_RATES_SUCCESS,
} from '../../constants';

const initialState = {
  current_rates: {},
  sales: []
};

export default function CommonReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_RATES:
      state = {
        ...state,
        loader: true,
      };
      break;
    case SET_CURRENT_RATES_SUCCESS:
      state = {
        current_rates: {},
        loader: false,
      };
      break;
    case SET_CURRENT_RATES_FAILURE:
      state = {
        ...state,
        loader: false,
      };
      break;

    case GET_CURRENT_RATES:
      state = {
        ...state,
        loader: true,
      };
      break;
    case GET_CURRENT_RATES_SUCCESS:
      state = {
        current_rates: action.payload,
        loader: false,
      };
      break;
    case GET_CURRENT_RATES_FAILURE:
      state = {
        ...state,
        loader: false,
      };
      break;

      case GET_SALES:
      state = {
        ...state,
        loader: true,
      };
      break;
    case GET_SALES_SUCCESS:
      console.log('action.payload===>', action.payload)
      state = {
        sales: action.payload,
        loader: false,
      };
      break;
    case GET_SALES_FAILURE:
      state = {
        ...state,
        loader: false,
      };
      break;
  }

  return state;
}
