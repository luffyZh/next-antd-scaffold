import { message } from 'antd';
import {
  FETCH_USER_LIST_FAIL
} from '../../constants/ActionTypes';

export default () => next => action => {
  const ret = next(action);
  switch (action.type) {
    case FETCH_USER_LIST_FAIL: {
      message.error('Fetch user list fail');
      break;
    }
    default:
  }
  return ret;
};
