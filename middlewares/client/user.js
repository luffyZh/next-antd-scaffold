import Router from 'next/router';
import { message } from 'antd';
import { setCookie } from '../../core/cookie';
import {
  FETCH_USER_LIST_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from '../../constants/ActionTypes';

export default () => next => action => {
  const ret = next(action);
  switch (action.type) {
    case FETCH_USER_LIST_FAIL: {
      message.error('Fetch user list fail');
      break;
    }
    case LOGIN_FAIL: {
      message.error('用户登录失败，请检查用户名和密码');
      break;
    }
    case LOGIN_SUCCESS: {
      setCookie('USER_TOKEN', action.payload.token);
      setCookie('USER_NAME', action.payload.user.name);
      message.success('用户登录成功', 1, () => {
        Router.push('/home');
      });
      break;
    }
    default:
  }
  return ret;
};
