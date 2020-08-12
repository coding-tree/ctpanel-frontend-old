import {GET_USER_REQUEST, GET_USER_RECEIVED, GET_USER_ERROR, GET_USER_UNAUTHORIZED} from 'actions/user';

const _initialState = {
  pending: true,
  meetings: undefined,
  error: null,
};

export default (state = _initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        pending: true,
        error: false,
      };
    case GET_USER_RECEIVED:
      return {
        pending: false,
        meetings: action.meetings,
        error: null,
      };
    case GET_USER_ERROR:
      return {
        ...state,
        pending: false,
        error: true,
      };
    case GET_USER_UNAUTHORIZED:
      return {
        ...state,
        pending: false,
        error: false,
      };
    default:
      return state;
  }
};
