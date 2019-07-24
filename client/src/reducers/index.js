import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import { reducer as formReducer } from 'redux-form'

const appReducer = combineReducers({
  loginReducer,
  form: formReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
