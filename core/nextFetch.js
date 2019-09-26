import fetch from 'isomorphic-unfetch';
import qs from 'query-string';
import { filterObject } from './util';

function dealStatus(res) {
  console.log(res.status, 111111);
  if (res.status !== 200) {
    // 处理错误
    const err = new Error(res.statusText);
    err.message = res.statusText;
    err.code = res.status;
    throw err;
  }
  return res;
}

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
      mode: 'cors',
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
      .then(dealStatus)
      .then(res => res.json());
  };
});

export default nextFetch;