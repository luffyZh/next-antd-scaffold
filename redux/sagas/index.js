import { all } from 'redux-saga/effects';
import userSagas from './user/index';


export default function* rootSagas() {
  yield all([
    ...userSagas
  ]);
}
