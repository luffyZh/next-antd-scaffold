import { message } from 'antd';
import {
  FETCH_USER_LIST_FAIL
} from '../../constants/ActionTypes';

export default ({ getState }) => next => action => {
  console.log(getState());
  const ret = next(action);
  switch (action.type) {
    case FETCH_USER_LIST_FAIL: {
      message.error('获取用户列表失败, 请稍后重试');
      break;
    }
    default:
  }
  return ret;
};
