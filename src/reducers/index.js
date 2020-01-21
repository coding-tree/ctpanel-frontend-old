import { GET_SCHEDULES_REQUEST, GET_SCHEDULES_SUCCESS, GET_SCHEDULES_FAILURE } from 'actions';

const initialState = {
  meetingHistory: {
    pending: false,
    meetings: [],
    error: null,
  },
  schedules: {
    pending: false,
    meetings: [],
    error: null,
  },
  topicDatabases: {
    pending: false,
    meetings: [],
    error: null,
  },
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SCHEDULES_REQUEST:
      return {
        ...state,
        pending: true
      }
    case GET_SCHEDULES_SUCCESS:
      return {
        ...state,
        schedules: {
          ...state.schedules,
          meetings: action.payload,
        },
      }
    case GET_SCHEDULES_FAILURE:
      return {
        ...state,
        pending: false
      }
    default:
      return state;
  }
}

export default tableReducer;