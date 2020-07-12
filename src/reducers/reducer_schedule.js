import {
  GET_SCHEDULE_REQUEST,
  GET_SCHEDULE_RECEIVED,
  GET_SCHEDULE_ERROR
} from 'actions';

const _initialState = {
  pending: false,
  meetings: [],
  error: null
};

export default (state = _initialState, action) => {
  switch(action.type) {
    case GET_SCHEDULE_REQUEST:
      return {
        ...state,
        pending: true,
        error: false
      };
    case GET_SCHEDULE_RECEIVED:
      return {
          pending: false,
          meetings: action.meetings,
          error: null
      };
    case GET_SCHEDULE_ERROR:
      return {
        ...state,
        error: true
      };
    default: 
        return state;
    };
};