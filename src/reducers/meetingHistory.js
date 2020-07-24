import {
  GET_MEETING_HISTORY_REQUEST,
  GET_MEETING_HISTORY_RECEIVED,
  GET_MEETING_HISTORY_ERROR
} from 'actions/meetingHistory';

const _initialState = {
  pending: false,
  meetings: [],
  error: null
};

export default (state = _initialState, action) => {
  switch(action.type) {
    case GET_MEETING_HISTORY_REQUEST:
      return {
        ...state,
        pending: true,
        error: false
      };
    case GET_MEETING_HISTORY_RECEIVED:
      return {
          pending: false,
          meetings: action.meetings,
          error: null
      };
    case GET_MEETING_HISTORY_ERROR:
      return {
        ...state,
        error: true
      };
    default: 
        return state;
    };
};