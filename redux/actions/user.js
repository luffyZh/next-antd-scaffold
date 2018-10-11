import {
  FETCH_USER_LIST,
  FETCH_USER_LIST_FAIL,
  FETCH_USER_LIST_SUCCESS
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

export function fetchUserListDataFali () {
  return {
    type: FETCH_USER_LIST_FAIL,
  };
}