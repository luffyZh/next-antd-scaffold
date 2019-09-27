/**
 * Rewrite Cookie
 */
import cookie from 'js-cookie';

export const setCookie = (key, value, options) => {
  if (process.browser) {
    cookie.set(key, value, options);
  }
};

export const removeCookie = key => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1
    });
  }
};

/**
 * 基于js-cookie插件进行封装
 * Client-Side -> 直接使用js-cookie API进行获取
 * Server-Side -> 使用ctx.req进行获取（req.headers.cookie）
 */
export const getCookie = (key, req) => {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
};

const getCookieFromBrowser = key => {
  return cookie.get(key);
};

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(';')
    .find(c => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split('=')[1];
};
