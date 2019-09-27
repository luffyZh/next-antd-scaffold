import { combineReducers } from 'redux';
import list from './list';
import auth from './auth';

export default combineReducers({
  list,
  auth
});