import fetch from 'isomorphic-unfetch';
import { take, put, fork } from 'redux-saga/effects';
import {
  FETCH_USER_LIST,
} from '../../../constants/ActionTypes';
import { fetchUserListDataFail, fetchUserListDataSuccess } from '../../actions/user';
import api from '../../../constants/ApiUrlForBE';
/**
 * userList saga
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




