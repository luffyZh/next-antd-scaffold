import fetch from 'isomorphic-unfetch';
import { take, put, fork } from 'redux-saga/effects';
import {
  FETCH_USER_LIST,
} from '../../../constants/ActionTypes';
import { fetchUserListFail, fetchUserListSuccess } from '../../actions/user';
import api from '../../../constants/ApiUrlForBE';
/**
 * userList saga
 */
export function* fetchUserList() {
  while (true) {
    yield take(FETCH_USER_LIST);
    try {
      const res = yield fetch(api.getUserList);
      const data = yield res.json();
      yield put(fetchUserListSuccess(data));
    } catch (e) {
      yield put(fetchUserListFail());
    }
  }
}

export default [
  fork(fetchUserList)
];




