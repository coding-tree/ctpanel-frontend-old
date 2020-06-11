import {GET_MEETS_REQUEST, GET_MEETS_SUCCESS, GET_MEETS_FAILURE} from 'actions';



const _meetingHistory = {
  pending: false,
  meetings: [],
  error: null
};
const _schedule = {
  pending: false,
  meetings: [],
  error: null
};
const _meetings = {
  pending: false,
  meetings: [],
  error: null
};
const _topics = {
  pending: false,
  meetings: [],
  error: null
};

export function meetingHistoryReducer(state = _meetingHistory, action){
  switch(action.type) {
    case INVALIDATE_MEETING_HISTORY:
      return {
        ...state,
        error: true
      }
    case REQUEST_MEETING_HISTORY:
      return {
        ...state,
        pending: true,
        error: false
      }
    case RECEIVE_MEETING_HISTORY:
      return {
          pending: false,
          meetings: action.meetings,
          error: null
      }
    default: 
        return state;
    };
};
export function meetingHistoryReducer(state = _schedule, action){
  switch(action.type) {
    case INVALIDATE_SCHEDULE:
      return {
        ...state,
        error: true
      }
    case REQUEST_SCHEDULE:
      return {
        ...state,
        pending: true,
        error: false
      }
    case RECEIVE_SCHEDULE:
      return {
          pending: false,
          meetings: action.meetings,
          error: null
      }
    default: 
        return state;
    };
};
export function meetingHistoryReducer(state = _meetings, action){
  switch(action.type) {
    case INVALIDATE_MEETINGS:
      return {
        ...state,
        error: true
      }
    case REQUEST_MEETINGS:
      return {
        ...state,
        pending: true,
        error: false
      }
    case RECEIVE_MEETINGS:
      return {
          pending: false,
          meetings: action.meetings,
          error: null
      }
    default: 
        return state;
    };
};
export function meetingHistoryReducer(state = _meetingHistory, action){
  switch(action.type) {
    case INVALIDATE_MEETING_HISTORY:
      return {
        ...state,
        error: true
      }
    case REQUEST_MEETING_HISTORY:
      return {
        ...state,
        pending: true,
        error: false
      }
    case RECEIVE_MEETING_HISTORY:
      return {
          pending: false,
          meetings: action.meetings,
          error: null
      }
    default: 
        return state;
    };
};

const initialState = {
  user: {
    pending: true,
    meetings: undefined,
    error: null,
  },
  archive: {
    pending: false,
    meetings: [],
    error: null,
  },
};

const tableReducer = (state = initialState, {type, payload, meetType}) => {
  switch (type) {
    case GET_MEETS_REQUEST:
      return {
        ...state,
        [meetType]: {
          ...state[meetType],
          pending: true,
        },
      };
    case GET_MEETS_SUCCESS:
      return {
        ...state,
        [meetType]: {
          ...state[meetType],
          meetings: payload,
          pending: false,
          error: false,
        },
      };
    case GET_MEETS_FAILURE:
      return {
        ...state,
        [meetType]: {
          ...state[meetType],
          error: true,
          pending: false,
        },
      };
    default:
      return state;
  }
};

export default tableReducer;
