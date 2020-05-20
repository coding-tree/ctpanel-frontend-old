import {GET_MEETS_REQUEST, GET_MEETS_SUCCESS, GET_MEETS_FAILURE} from 'actions';

const initialState = {
  user: {
    pending: false,
    meetings: undefined,
    error: null,
  },
  meetingHistory: {
    pending: false,
    meetings: [],
    error: null,
  },
  meetings: {
    pending: false,
    meetings: [],
    error: null,
  },
  topics: {
    pending: false,
    meetings: [],
    error: null,
  },
  archive: {
    pending: false,
    meetings: [],
    error: null,
  },
};

const tableReducer = (state = initialState, {type, payload, meetType}) => {
  console.log('xxx', meetType, payload);
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
        },
      };
    case GET_MEETS_FAILURE:
      return {
        ...state,
        [meetType]: {
          ...state[meetType],
          error: true,
        },
      };
    default:
      return state;
  }
};

export default tableReducer;
