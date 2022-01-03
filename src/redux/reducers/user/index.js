import { combineReducers } from 'redux';
import list from './list';

const userReducers = combineReducers({
  list
});

export default userReducers;