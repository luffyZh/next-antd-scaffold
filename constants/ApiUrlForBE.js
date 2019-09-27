import getConfig from 'next/config';

const { publicRuntimeConfig: { API_SERVER } } = getConfig();


// const API url
export default {
  /**
   * Login
   * @method GET
   */
  login: `${API_SERVER}/login`,
  /**
   * Get user list
   * @method GET
   */
  getUserList: `${API_SERVER}/user/list`
};