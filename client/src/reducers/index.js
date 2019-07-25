import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import logoutReducer from './logoutReducer';
import { reducer as formReducer } from 'redux-form'

const appReducer = combineReducers({
  loginReducer,
  logoutReducer,
  form: formReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
