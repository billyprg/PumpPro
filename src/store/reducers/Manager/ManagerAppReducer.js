import {
  SIGNIN,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOADER_TRUE,
  LOADER_FALSE,
  ADD_VENDOR,
  ADD_VENDOR_SUCCESS,
  ADD_VENDOR_FAILURE,
  GET_VENDOR,
  GET_VENDOR_SUCCESS,
  GET_VENDOR_FAILURE,
  POST_SHIFT_START,
  POST_SHIFT_START_SUCCESS,
  POST_SHIFT_START_FAILURE,
  POST_SHIFT_END,
  POST_SHIFT_END_SUCCESS,
  POST_SHIFT_END_FAILURE,
  RENT_SUCCESS,
  RENT_FAILURE,
  RENT,
  COLLECT_RENT_SUCCESS,
  COLLECT_RENT,
  COLLECT_RENT_FAILURE,
} from '../../constants';

const initialState = {
  user: {},
  loader: false,
  vendors: [],
  rents: [],
};

export default function ManagerAppReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      state = {
        ...state,
        loader: true,
      };
      break;
    case SIGNIN_SUCCESS:
      state = {
        ...state,
        user: action.payload,
        loader: false,
      };
      break;
    case SIGNIN_FAILURE:
      state = {
        ...state,
        loader: false,
      };
      break;

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

    case ADD_VENDOR:
      state = {
        ...state,
        loader: true,
      };
      break;
    case ADD_VENDOR_SUCCESS:
      state = {
        ...state,
        loader: false,
      };
      break;
    case ADD_VENDOR_FAILURE:
      state = {
        ...state,
        loader: false,
      };
      break;

    case GET_VENDOR:
      state = {
        ...state,
        loader: true,
      };
      break;
    case GET_VENDOR_SUCCESS:
      console.log('action.payload', action.payload);
      state = {
        ...state,
        vendors: action.payload,
        loader: false,
      };
      break;
    case GET_VENDOR_FAILURE:
      state = {
        ...state,
        loader: false,
      };
      break;

    case POST_SHIFT_START:
      state = {
        ...state,
        loader: true,
      };
      break;
    case POST_SHIFT_START_SUCCESS:
      state = {
        ...state,
        loader: false,
      };
      break;
    case POST_SHIFT_START_FAILURE:
      state = {
        ...state,
        loader: false,
      };
      break;

    case POST_SHIFT_END:
      state = {
        ...state,
        loader: true,
      };
      break;
    case POST_SHIFT_END_SUCCESS:
      state = {
        ...state,
        loader: false,
      };
      break;
    case POST_SHIFT_END_FAILURE:
      state = {
        ...state,
        loader: false,
      };
      break;

    case RENT:
      state = {
        ...state,
        loader: true,
      };
      break;
    case RENT_SUCCESS:
      state = {
        ...state,
        rents: action.payload,
        loader: false,
      };
      break;
    case RENT_FAILURE:
      state = {
        ...state,
        loader: false,
      };
      break;

    case COLLECT_RENT:
      state = {
        ...state,
        loader: true,
      };
      break;
    case COLLECT_RENT_SUCCESS:
      state = {
        ...state,
        loader: false,
      };
      break;
    case COLLECT_RENT_FAILURE:
      state = {
        ...state,
        loader: false,
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
