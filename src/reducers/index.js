import {
  REQUEST_MEETING_HISTORY, RECEIVE_MEETING_HISTORY, INVALIDATE_MEETING_HISTORY,
  REQUEST_SCHEDULE, RECEIVE_SCHEDULE, INVALIDATE_SCHEDULE,
  REQUEST_MEETINGS, RECEIVE_MEETINGS, INVALIDATE_MEETINGS,
  REQUEST_TOPICS, RECEIVE_TOPICS, INVALIDATE_TOPICS
} from 'actions';

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

const meetingHistoryReducer = (state = _meetingHistory, action) => {
  switch(action.type) {
    case REQUEST_MEETING_HISTORY:
      return {
        ...state,
        pending: true,
        error: false
      };
    case RECEIVE_MEETING_HISTORY:
      return {
          pending: false,
          meetings: action.meetings,
          error: null
      };
    case INVALIDATE_MEETING_HISTORY:
      return {
        ...state,
        error: true
      };
    default: 
        return state;
    };
};
const scheduleReducer = (state = _schedule, action) => {
  switch(action.type) {
    case REQUEST_SCHEDULE:
      return {
        ...state,
        pending: true,
        error: false
      };
    case RECEIVE_SCHEDULE:
      return {
          pending: false,
          meetings: action.meetings,
          error: null
      };
    case INVALIDATE_SCHEDULE:
      return {
        ...state,
        error: true
      };
    default: 
        return state;
    };
};
const meetingsReducer = (state = _meetings, action) => {
  switch(action.type) {
    case REQUEST_MEETINGS:
      return {
        ...state,
        pending: true,
        error: false
      };
    case RECEIVE_MEETINGS:
      return {
          pending: false,
          meetings: action.meetings,
          error: null
      };
    case INVALIDATE_MEETINGS:
      return {
        ...state,
        error: true
      };
    default: 
        return state;
    };
};
const topicsReducer = (state = _topics, action) => {
  switch(action.type) {
    case REQUEST_TOPICS:
      return {
        ...state,
        pending: true,
        error: false
      }
    case RECEIVE_TOPICS:
      return {
          pending: false,
          meetings: action.meetings,
          error: null
      }
      case INVALIDATE_TOPICS:
        return {
          ...state,
          error: true
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

export default combineReducers({
  meetingHistoryReducer,
  scheduleReducer,
  meetingsReducer,
  topicsReducer,
  tableReducer
});