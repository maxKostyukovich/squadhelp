import { combineReducers } from 'redux';
import userReducer from './userReducer'
import flagsReducer from './flagsReducer';
import contestReducer from './contestReducer'
import utilsReducer from './utilsReducer'
import { reducer as formReducer } from 'redux-form'

const appReducer = combineReducers({
  userReducer,
  form: formReducer,
  flagsReducer,
  contestReducer,
  utilsReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
