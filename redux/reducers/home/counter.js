import {
  INCREMENT,
  DECREMENT,
  RESET
} from '../../../constants/ActionTypes';

const initialState = {
  count: 0
};

const counter = (state = initialState, { type }) => {
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1 
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case RESET:
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
};

export default counter;
