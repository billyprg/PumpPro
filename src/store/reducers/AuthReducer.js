import {
    SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE,
    ADD_POST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE,
    SET_USER, REMOVE_USER,
    LOADER_TRUE, LOADER_FALSE, SIGN_UP, SIGN_UP_SUCCESS, SIGNIN_UP_FAILURE, SEND_OTP, SEND_OTP_SUCCESS, SEND_OTP_FAILURE, VERIFY_OTP, VERIFY_OTP_SUCCESS, VERIFY_OTP_FAILURE, RESET_PASSWORD, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE, 
    CHANGE_PASSWORD, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE,
} from '../constants';

const initialState = {
    user: {},
    loader: false,
    posts: []
}

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case SIGNIN:
            state = {
                ...state,
                loader: true
            }
            break;
        case SIGNIN_SUCCESS:
            state = {
                ...state,
                user: action.payload,
                loader: false
            }
            break;
        case SIGNIN_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;
        case SIGN_UP:
            state = {
                ...state,
                loader: true
            }
            break;
        case SIGN_UP_SUCCESS:
            state = {
                ...state,
                user: action.payload,
                loader: false
            }
            break;
        case SIGNIN_UP_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;
        case SEND_OTP:
            state = {
                ...state,
                loader: true
            }
            break;
        case SEND_OTP_SUCCESS:
            state = {
                ...state,
                loader: false
            }
            break;
        case SEND_OTP_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        case VERIFY_OTP:
            state = {
                ...state,
                loader: true
            }
            break;
        case VERIFY_OTP_SUCCESS:
            state = {
                ...state,
                loader: false,
                user: action.payload
            }
            break;
        case VERIFY_OTP_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;
        case SET_USER:
            state = {
                ...state,
                user: action.payload
            }
            break;
        case REMOVE_USER:
            state = {
                ...state,
                user: {}
            }
            break;
        case LOGOUT:
            state = {
                ...state,
                loader: true
            }
            break;
        case LOGOUT_SUCCESS:
            state = {
                user: {},
                posts: [],
                loader: false
            }
            break;
        case LOGOUT_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        case RESET_PASSWORD:
            state = {
                ...state,
                loader: true
            }
            break;
        case RESET_PASSWORD_SUCCESS:
            state = {
                ...state,
                loader: false
            }
            break;
        case RESET_PASSWORD_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        case CHANGE_PASSWORD:
            state = {
                ...state,
                loader: true
            }
            break;
        case CHANGE_PASSWORD_SUCCESS:
            state = {
                ...state,
                loader: false
            }
            break;
        case CHANGE_PASSWORD_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;
        case ADD_POST:
            state = {
                ...state,
                loader: true
            }
            break;
        case ADD_POST_SUCCESS:
            // state.posts.unshift(action.payload)
            state = {
                ...state,
                posts: [action.payload, ...state.posts],
                loader: false
            }
            break;
        case ADD_POST_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        case GET_POSTS:
            state = {
                ...state,
                loader: true
            }
            break;
        case GET_POSTS_SUCCESS:
            state = {
                ...state,
                posts: action.payload,
                loader: false
            }
            break;
        case GET_POSTS_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;


        case LOADER_TRUE:
            state = {
                ...state,
                loader: true
            }
            break;

        case LOADER_FALSE:
            state = {
                ...state,
                loader: false
            }
            break;

        default:
            break;
    }

    return state;
}