import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  AUTH_USER_SUCCESS
} from '../../../constants/ActionTypes';

const initialState = {
  user: null,
  token: '',
  login: false
};

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_USER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        login: true
      };
    case LOGIN_FAIL:
      return {
        ...state,
        login: false
      };  
    default:
      return state;
  }
};

export default auth;
