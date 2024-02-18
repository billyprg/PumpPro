import {
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
  SET_CURRENT_RATES,
  SET_CURRENT_RATES_FAILURE,
  SET_CURRENT_RATES_SUCCESS,
} from '../../constants';

const initialState = {
  current_rates: {},
  sales: [],
  expenses: [],
  loader: false
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
      console.log('action.payload===>', action.payload);
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

    case EXPENSES:
      state = {
        ...state,
        loader: true,
      };
      break;
    case EXPENSES_SUCCESS:
      console.log('action.payload==>', action.payload)
      state = {
        loader: false,
      };
      break;
    case EXPENSES_FAILURE:
      state = {
        ...state,
        loader: false,
      };
      break;

      case GET_EXPENSES:
        state = {
          ...state,
          loader: true,
        };
        break;
      case GET_EXPENSES_SUCCESS:
        console.log('action.payload==>', action.payload)
        state = {
          expenses: action.payload,
          loader: false,
        };
        break;
      case GET_EXPENSES_FAILURE:
        state = {
          ...state,
          loader: false,
        };
        break;
  


      case DELETE_EXPENSES:
        state = {
          ...state,
          loader: true,
        };
        break;
      case DELETE_EXPENSES_SUCCESS:
        state = {
          loader: false,
        };
        break;
      case DELETE_EXPENSES_FAILURE:
        state = {
          ...state,
          loader: false,
        };
        break;
  }

  return state;
}
