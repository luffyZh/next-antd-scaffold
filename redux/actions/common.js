import {
  CLEAR_SERVER_ERROR
} from '../../constants/ActionTypes';

export function clearServerError() {
  return {
    type: CLEAR_SERVER_ERROR
  };
}