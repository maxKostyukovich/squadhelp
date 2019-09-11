import ACTION from '../actions/actiontsTypes';

const initialState = {
    word: 'a Company'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.SET_NEXT_WORD_MAIN_PAGE: {
            return {
                ...state,
                word: action.word,
            };
        }
        default: {
            return state;
        }
    }
}
