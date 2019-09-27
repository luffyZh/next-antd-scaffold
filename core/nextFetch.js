import fetch from 'isomorphic-unfetch';
import qs from 'query-string';
import { filterObject } from './util';
import { getCookie } from './cookie';

// initial fetch
const nextFetch = Object.create(null);
// browser support methods
// ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PATCH', 'PUT']
const HTTP_METHOD = ['get', 'post', 'put', 'patch', 'delete'];
// can send data method
const CAN_SEND_METHOD = ['post', 'put', 'delete', 'patch'];

HTTP_METHOD.forEach(method => {
  // is can send data in opt.body
  const canSend = CAN_SEND_METHOD.includes(method);
  nextFetch[method] = function (path, { data, query, timeout = 10000 } = {}) {
    let url = path;
    const opts = {
      method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        'User-Token': process.browser ? getCookie('USER_TOKEN') : this.Authorization
      },
      credentials: 'include',
      timeout,
      mode: 'cors',
      cache: 'no-cache'
    };

    console.log(query);

    if (query) {
      url += `${url.includes('?') ? '&' : '?'}${qs.stringify(
        filterObject(query, e => e !== undefined),
      )}`;
    }

    if (canSend && data) {
      opts.body = qs.stringify(filterObject(data, e => e !== undefined));
    }

    console.info('Request Url:', url);

    return fetch(url, opts)
      .then(res => res.json())
      .then(({ errcode = 200, errmsg, data }) => {
        if (errcode !== 200) {
          const err = new Error(errmsg);
          err.message = errmsg;
          err.code = errcode;
          err.data = data;
          throw err;
        }
        return data;
      });
  };
});

export default nextFetch;