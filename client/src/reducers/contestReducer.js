import ACTION from '../actions/actiontsTypes';

const initialState = {
  contestType: '',
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION.SELECT_CONTEST_TYPE: {
      return {
        ...state,
        contestType: action.contestType,
      }
    }
    default: {
      return state;
    }
  }
}
