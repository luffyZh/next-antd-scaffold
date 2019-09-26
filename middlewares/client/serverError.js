import {
  SERVER_ERROR
} from '../../constants/ActionTypes';

export default () => next => action => {
  if (!process.browser) {
    next({
      type: SERVER_ERROR,
      payload: action.type 
    });
  }
  return next(action);
};
