import { combineReducers } from 'redux';
import home from './home';
import user from './user';

const _reducers = combineReducers({
  home,
  user
});

function reducers(state, action) {
  return _reducers(state, action);
}

export default reducers;