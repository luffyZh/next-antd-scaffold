import {
  INCREMENT,
  DECREMENT,
  RESET,
  ADD_TO_NUMBER
} from '../../../constants/ActionTypes';

const initialState = {
  count: 0
};

const counter = (state = initialState, { type, payload }) => {
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
    case ADD_TO_NUMBER: {
      return {
        ...state,
        count: payload
      };
    }
    default:
      return state;
  }
};

export default counter;
