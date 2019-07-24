/* like mutation */
import ACTION from '../actions/actiontsTypes';

const initialState = {
    user: {},
    isFetching: false,
    error: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.LOGIN_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }
        case ACTION.LOGIN_RESPONSE: {
            return {
                ...state,
                user: action.user,
                isFetching: false,
                error: null,
            };
        }
        case ACTION.LOGIN_ERROR: {
            return {
                ...state,
                error: action.error,
                isFetching: false,
            };
        }
        default: {
            return state;
        }
    }
}


