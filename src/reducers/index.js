import {
  FETCH_MEETING_HISTORY,
  FETCH_SCHEDULES,
  FETCH_TOPIC_DATABASES,
} from 'actions';

const initialState = {
  meetingHistory: [],
  schedules: [],
  topicDatabases: [],
};

const rootReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case FETCH_MEETING_HISTORY:
      return {
        ...state.meetingHistory,
        payload
      };
    default:
      return state;
  }
};

export default rootReducer;
