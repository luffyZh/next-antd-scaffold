import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import home from './home';
import user from './user';

const _reducers = combineReducers({
  home,
  user
});

function reducers(state, action) {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  return _reducers(state, action);
}

export default reducers;