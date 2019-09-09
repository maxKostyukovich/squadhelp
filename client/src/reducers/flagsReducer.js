import ACTION from '../actions/actiontsTypes';

const initialState = {
  headerMenuState: false,
  burgerMenuState: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION.DROP_DOWN_CLICK: {
      return {
        ...state,
        headerMenuState: action.isActive,
      };
    }
    case ACTION.OUT_CLICK: {
      return {
        ...state,
        ...initialState,
      }
    }
    case ACTION.BURGER_CLICK: {
      return {
        ...state,
        burgerMenuState: action.burgerState,
      }
    }
    default: {
      return state;
    }
  }
}
