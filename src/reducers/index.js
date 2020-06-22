import { combineReducers } from 'redux';
import {
  GET_USER_REQUEST, GET_USER_RECEIVED, GET_USER_ERROR,
  GET_MEETING_HISTORY_REQUEST, GET_MEETING_HISTORY_RECEIVED, GET_MEETING_HISTORY_ERROR,
  GET_SCHEDULE_REQUEST, GET_SCHEDULE_RECEIVED, GET_SCHEDULE_ERROR,
  GET_MEETINGS_REQUEST, GET_MEETINGS_RECEIVED, GET_MEETINGS_ERROR,
  GET_TOPICS_REQUEST, GET_TOPICS_RECEIVED, GET_TOPICS_ERROR
} from 'actions';

const _user = {
  pending: false,
  meetings: undefined,
  error: null
};
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

const userReducer = (state = _user, action) => {
  switch(action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        pending: true,
        error: false
      };
    case GET_USER_RECEIVED:
      return {
          pending: false,
          meetings: action.meetings,
          error: null
      };
    case GET_USER_ERROR:
      return {
        ...state,
        error: true
      };
    default: 
        return state;
    };
};
const meetingHistoryReducer = (state = _meetingHistory, action) => {
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
const scheduleReducer = (state = _schedule, action) => {
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
const meetingsReducer = (state = _meetings, action) => {
  switch(action.type) {
    case GET_MEETINGS_REQUEST:
      return {
        ...state,
        pending: true,
        error: false
      };
    case GET_MEETINGS_RECEIVED:
      return {
          pending: false,
          meetings: action.meetings,
          error: null
      };
    case GET_MEETINGS_ERROR:
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
    case GET_TOPICS_REQUEST:
      return {
        ...state,
        pending: true,
        error: false
      }
    case GET_TOPICS_RECEIVED:
      return {
          pending: false,
          meetings: action.meetings,
          error: null
      }
      case GET_TOPICS_ERROR:
        return {
          ...state,
          error: true
        }
    default: 
        return state;
    };
};

const rootReducer = combineReducers({
  userReducer,
  meetingHistoryReducer,
  scheduleReducer,
  meetingsReducer,
  topicsReducer
});

export default rootReducer;