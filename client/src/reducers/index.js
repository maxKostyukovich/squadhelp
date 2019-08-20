import { combineReducers } from 'redux';
import userReducer from './userReducer'
import flagsReducer from './flagsReducer';
import { reducer as formReducer } from 'redux-form'

const appReducer = combineReducers({
  userReducer,
  form: formReducer,
  flagsReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
