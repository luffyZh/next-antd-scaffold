import getConfig from 'next/config';

const { publicRuntimeConfig: { PORT, NODE_HOST } } = getConfig();
// const API url
export default {
  /**
   * 获取用户列表数据
   * @method GET
   */
  getUserList: `${NODE_HOST}:${PORT}/api/getUserList`
};