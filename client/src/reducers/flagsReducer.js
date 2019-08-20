import ACTION from '../actions/actiontsTypes';

const initialState = {
  headerMenuState: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION.DROP_DOWN_CLICK: {
      return {
        ...state,
        headerMenuState: action.isActive,
      };
    }
    default: {
      return state;
    }
  }
}
