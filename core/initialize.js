import { getCookie } from './cookie';
import nextFetch from './nextFetch';
import { authUserSuccess } from '../redux/actions/user';

/**
 * 进入系统初始化函数，用于用户授权相关
 * @param {Object} ctx
 */
export default function(ctx) {
  const { req, store } = ctx;
  const userToken = getCookie('USER_TOKEN', req);
  nextFetch.Authorization = userToken || '';
  if (userToken && !store.getState().user.auth.user) {
    // cookie存在token并且auth.user不存在为null，直接走auth流程即可，判断user是否为空是为了每次一路由跳转都走authuser
    const name = getCookie('USER_NAME', req);
    const payload = {
      user: {
        name
      },
      token: userToken
    };
    store.dispatch(
      authUserSuccess(payload)
    );
  }
}
