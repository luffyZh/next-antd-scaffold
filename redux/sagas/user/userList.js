import { take, put, fork } from 'redux-saga/effects';
import {
  FETCH_USER_LIST,
} from '../../../constants/ActionTypes';
import { fetchUserListDataFali, fetchUserListDataSuccess } from '../../actions/user';
import api from '../../../constants/ApiUrlForBE';
import nextFetch from '../../../core/nextFetch';
/**
 * 简洁的实际写法, 把worker saga和watcher saga结合在一起。写起来方便
 */
export function* userList() {
  while (true) {
    yield take(FETCH_USER_LIST);
    try {
      const data = yield nextFetch.get(api.getUserList);
      // const res = yield fetch(api.getUserList);
      // const { data } = yield res.json();
      yield put(fetchUserListDataSuccess(data));
    } catch (error) {
      console.log(error.code, error.message, error.data);
      yield put(fetchUserListDataFali(error));
    }
  }
}

/**
 * 合理的官方写法，分离了watcher saga和worker saga
 */
// // worker saga
// export function* getUserList() {
//   try {
//     const { data } = yield call(http.get, apiUrl.USER_LIST);
//     yield put({ type: FETCH_ALL_USER_LIST_SUCCESS, payload: data });
//   } catch(error) {
//     yield put({ type: FETCH_ALL_USER_LIST_FAIL, payload: error });
//   }
// }
// // watcher saga
// export function* watchGetUserList() {
//   yield takeEvery(FETCH_ALL_USER_LIST, getUserList);
// }

export default [
  fork(userList)
];




