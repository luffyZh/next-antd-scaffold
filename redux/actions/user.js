import {
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  FETCH_USER_LIST,
  FETCH_USER_LIST_FAIL,
  FETCH_USER_LIST_SUCCESS,
  AUTH_USER_SUCCESS
} from '../../constants/ActionTypes';

export function fetchUserListData () {
  return {
    type: FETCH_USER_LIST
  };
}

export function fetchUserListDataSuccess (payload) {
  return {
    type: FETCH_USER_LIST_SUCCESS,
    payload
  };
}

export function fetchUserListDataFail () {
  return {
    type: FETCH_USER_LIST_FAIL,
  };
}

export function login(payload) {
  return {
    type: LOGIN,
    payload
  };
}

export function loginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload
  };
}

export function loginFail() {
  return {
    type: LOGIN_FAIL
  };
}

export function authUserSuccess(payload) {
  return {
    type: AUTH_USER_SUCCESS,
    payload
  };
}