import { combineReducers } from 'redux';
import home from './home';
import user from './user';

export default combineReducers({
  home,
  user
});