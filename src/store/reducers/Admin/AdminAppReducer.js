import {
    SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE,
    ADD_POST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE,
    LOADER_TRUE, LOADER_FALSE, COMPLETE_PROFILE, COMPLETE_PROFILE_SUCCESS, COMPLETE_PROFILE_FAILURE, CURRENT_DATE, SHIFT_ONE_STATUS, SHIFT_TWO_STATUS,
} from '../../constants';

const initialState = {
    user: {},
    loader: false,
    posts: [],
    shiftOne : false,
    shiftTwo: false,
    currDate : ''
}

export default function AdminAppReducer(state = initialState, action) {
    switch (action.type) {


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

        
        case SHIFT_ONE_STATUS:
            state = {
                ...state,
                shiftOne: action.payload
            }
            break;
        

        case SHIFT_TWO_STATUS:
            state = {
                ...state,
                shiftTwo: action.payload
            }
            break;
                    
        case CURRENT_DATE:
            state = {
                ...state,
                currDate: action.payload
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