import {

  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOADER_TRUE,
  LOADER_FALSE,
  CURRENT_DATE,
  SHIFT_ONE_STATUS,
  SHIFT_TWO_STATUS,
  GET_REVENUE,
  GET_REVENUE_SUCCESS,
  GET_REVENUE_FAILURE,
  FUTURE_SALE,
  FUTURE_SALE_SUCCESS,
  FUTURE_SALE_FAILURE,
} from '../../constants';

const initialState = {
  user: {},
  loader: false,
  posts: [],
  shiftOne: false,
  shiftTwo: false,
  currDate: [],
  revenue : [],
  futureSale : []
};

export default function AdminAppReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT:
      state = {
        ...state,
        loader: true,
      };
      break;
    case LOGOUT_SUCCESS:
      state = {
        user: {},
        posts: [],
        loader: false,
      };
      break;
    case LOGOUT_FAILURE:
      state = {
        ...state,
        loader: false,
      };
      break;

    case GET_REVENUE:
      state = {
        ...state,
        loader: true,
      };
      break;
    case GET_REVENUE_SUCCESS:
      state = {
        revenue: action.payload,
        loader: false,
      };
      break;
    case GET_REVENUE_FAILURE:
      state = {
        ...state,
        loader: false,
      };
      break;

      case FUTURE_SALE:
        state = {
          ...state,
          loader: true,
        };
        break;
      case FUTURE_SALE_SUCCESS:
        state = {
          futureSale: action.payload,
          loader: false,
        };
        break;
      case FUTURE_SALE_FAILURE:
        state = {
          ...state,
          loader: false,
        };
        break;

    case SHIFT_ONE_STATUS:
      state = {
        ...state,
        shiftOne: action.payload,
      };
      break;

    case SHIFT_TWO_STATUS:
      state = {
        ...state,
        shiftTwo: action.payload,
      };
      break;

    case CURRENT_DATE:
      state = {
        ...state,
        currDate: action.payload,
      };
      break;

    case LOADER_TRUE:
      state = {
        ...state,
        loader: true,
      };
      break;

    case LOADER_FALSE:
      state = {
        ...state,
        loader: false,
      };
      break;

    default:
      break;
  }

  return state;
}
