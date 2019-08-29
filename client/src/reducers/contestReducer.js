import ACTION from '../actions/actiontsTypes';

const initialState = {
  contestType: '',
  error: null,
  steps: 4,
  currentStepIndex: 0,
  bundle: null,
  contests: [],
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
