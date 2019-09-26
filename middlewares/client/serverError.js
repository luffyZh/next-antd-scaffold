import {
  SERVER_ERROR
} from '../../constants/ActionTypes';

export default () => next => action => {
  if (!process.browser && action.type.includes('FAIL')) {
    next({
      type: SERVER_ERROR,
      payload: action.type 
    });
  }
  return next(action);
};
