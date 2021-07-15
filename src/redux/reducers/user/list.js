import { HYDRATE } from 'next-redux-wrapper';
import {
  FETCH_USER_LIST,
  FETCH_USER_LIST_FAIL,
  FETCH_USER_LIST_SUCCESS
} from '../../../constants/ActionTypes';

const initialState = [];

const list = (state = initialState, { type, payload }) => {
  switch (type) {
    case HYDRATE: {
      const { user: { list } } = payload;
      return list;
    }
    case FETCH_USER_LIST:
    case FETCH_USER_LIST_FAIL:
      return initialState;
    case FETCH_USER_LIST_SUCCESS: {
      return payload;
    } 
    default:
      return state;
  }
};

export default list;
