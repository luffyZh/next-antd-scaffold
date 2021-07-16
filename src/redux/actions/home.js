import { 
  INCREMENT,
  DECREMENT,
  RESET,
  ADD_TO_NUMBER
} from '../../constants/ActionTypes';

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function reset() {
  return {
    type: RESET
  };
}

export function addToNumber(payload) {
  return  {
    type: ADD_TO_NUMBER,
    payload
  };
}