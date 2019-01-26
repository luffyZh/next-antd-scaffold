const apiServer = `${process.env.NODE_HOST}/api`;
// const API url
export default {
  /**
   * 获取用户列表数据
   * @method GET
   */
  getUserList: `${apiServer}/user/list`
};