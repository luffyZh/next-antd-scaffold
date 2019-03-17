const apiServer = `${process.env.API_HOST}:${process.env.PORT}/api`;
// const API url
export default {
  /**
   * 获取用户列表数据
   * @method GET
   */
  getUserList: `${apiServer}/user/list`
};