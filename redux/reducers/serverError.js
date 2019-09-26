import {
  SERVER_ERROR,
  CLEAR_SERVER_ERROR
} from '../../constants/ActionTypes';

const initialState = {
  errorType: []
};

const serverError = (state = initialState, { type, payload }) => {
  switch (type) {
    case SERVER_ERROR: {
      const { errorType } = state;
      errorType.includes(payload) ? null : errorType.push(payload);
      return {
        ...state,
        errorType
      };
    }
    case CLEAR_SERVER_ERROR: {
      return initialState;
    }
    default:
      return state;
  }
};

export default serverError;
