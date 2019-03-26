import fetch from 'isomorphic-unfetch';
import { take, put, fork } from 'redux-saga/effects';
import {
  FETCH_USER_LIST,
} from '../../../constants/ActionTypes';
import { fetchUserListDataFail, fetchUserListDataSuccess } from '../../actions/user';
import api from '../../../constants/ApiUrlForBE';
/**
 * 简洁的实际写法, 把worker saga和watcher saga结合在一起。写起来方便
 */
export function* userList() {
  while (true) {
    yield take(FETCH_USER_LIST);
    try {
      const res = yield fetch(api.getUserList);
      const data = yield res.json();
      yield put(fetchUserListDataSuccess(data));
    } catch (error) {
      yield put(fetchUserListDataFail(error));
    }
  }
}

export default [
  fork(userList)
];




