import ACTION from '../actions/actiontsTypes';

const initialState = {
    selectedUsers: [],
    isFetching: false,
    error: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.SELECT_USER_IN_LIST_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            }
        }
        case ACTION.SELECT_USER_IN_LIST_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                selectedUsers: action.users,
                error:null,
            }
        }
        case ACTION.SELECT_USER_IN_LIST_ERROR: {
            return {
                ...state,
                error: action.error,
            }
        }
    }
    
}