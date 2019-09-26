import { combineReducers } from 'redux';
import home from './home';
import user from './user';
import serverError from './serverError';

export default combineReducers({
  home,
  user,
  serverError
});