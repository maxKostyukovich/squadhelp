import { combineReducers } from 'redux';
import userReducer from './userReducer'
import selectedUsersInListReducer from './selectedUsersInListReducer';
import { reducer as formReducer } from 'redux-form'

const appReducer = combineReducers({
  userReducer,
  form: formReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
