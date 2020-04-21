import userSagas from './user/index';
import { all } from 'redux-saga/effects';

const watchers =  [...userSagas];

export default function* rootSaga() {
  yield all(watchers); 
}

