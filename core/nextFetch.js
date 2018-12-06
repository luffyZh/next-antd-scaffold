import fetch from 'isomorphic-unfetch';
import qs from 'query-string';
import { filterObject } from './util';

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
  nextFetch[method] = (path, { data, query, timeout = 10000 } = {}) => {
    let url = path;
    const opts = {
      method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
      },
      credentials: 'include',
      timeout,
      mode: 'same-origin',
      cache: 'no-cache'
    };

    if (query) {
      url += `${url.includes('?') ? '&' : '?'}${qs.stringify(
        filterObject(query, Boolean),
      )}`;
    }

    if (canSend && data) {
      opts.body = qs.stringify(filterObject(data, Boolean));
    }

    console.info('Request Url:', url);

    return fetch(url, opts)
      .then(res => res.json())
      .then(({ errcode = 0, errmsg, data }) => {
        if (errcode !== 0) {
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