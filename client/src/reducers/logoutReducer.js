/* like mutation */
import ACTION from '../actions/actiontsTypes';


export default function (state, action) {
    switch (action.type) {
        case ACTION.LOGOUT_REQUEST: {
            return {
                ...state,
                user: {}
            };
        }
        default: {
            return state;
        }
    }

}


