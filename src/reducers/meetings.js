import {GET_MEETINGS_REQUEST, GET_MEETINGS_RECEIVED, GET_MEETINGS_ERROR} from 'actions/meetings';

const _initialState = {
  pending: false,
  meetings: [],
  error: null,
};

export default (state = _initialState, action) => {
  switch (action.type) {
    case GET_MEETINGS_REQUEST:
      return {
        ...state,
        pending: true,
        error: false,
      };
    case GET_MEETINGS_RECEIVED:
      return {
        pending: false,
        meetings: action.meetings,
        error: null,
      };
    case GET_MEETINGS_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
