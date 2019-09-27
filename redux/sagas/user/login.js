import { take, put, fork } from 'redux-saga/effects';
import {
  LOGIN,
} from '../../../constants/ActionTypes';
import { loginFail, loginSuccess } from '../../actions/user';
import nextFetch from '../../../core/nextFetch';
import api from '../../../constants/ApiUrlForBE';
/**
 * userList saga
 */
export function* login() {
  while (true) {
    const action = yield take(LOGIN);
    const query = {
      username: action.payload.username,
      password: action.payload.password
    };
    try {
      const data = yield nextFetch.get(api.login, { query });
      yield put(loginSuccess(data));
    } catch (e) {
      yield put(loginFail());
    }
  }
}

export default [
  fork(login)
];




