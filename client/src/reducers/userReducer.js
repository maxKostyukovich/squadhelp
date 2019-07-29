import ACTION from '../actions/actiontsTypes';

const initialState = {
    users: [],
    user: {},
    isFetching: false,
    error: null,
};


export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.USER_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }
        case ACTION.USER_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                error: null,
                user: action.user
            };
        }
        case ACTION.USER_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };
        }
        case ACTION.LOGOUT_REQUEST: {
            return {
                ...state,
                ...initialState
            }
        }
        case ACTION.GET_ALL_USERS_ADMIN_RESPONSE: {
            return {
                ...state,
                isFetching:false,
                error: null,
                users: action.users,
            }
        }
        default: {
            return state;
        }
    }
}


