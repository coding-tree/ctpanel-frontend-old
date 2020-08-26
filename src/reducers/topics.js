import { 
  GET_TOPICS_REQUEST, GET_TOPICS_RECEIVED, GET_TOPICS_ERROR,
  SET_SUCCESSFULLY_REMOVED_MEETINGS, CLEAR_SUCCESSFULLY_REMOVED_MEETINGS, REMOVE_TOPICS_ERROR
} from 'actions/topics';

const _initialState = {
  pending: false,
  meetings: [],
  error: null,
  lastRemovedMeetings: [],
  removedErrors: null,
};

export default (state = _initialState, action) => {
  switch (action.type) {
    case GET_TOPICS_REQUEST:
      return {
        ...state,
        pending: true,
        error: false,
      };
    case GET_TOPICS_RECEIVED:
      return {
        ...state,
        pending: false,
        meetings: action.meetings,
        error: null,
      };
    case GET_TOPICS_ERROR:
      return {
        ...state,
        error: true,
      };
    case SET_SUCCESSFULLY_REMOVED_MEETINGS:
      return {
        ...state,
        lastRemovedMeetings: action.successfullyMeetings,
      };
    case CLEAR_SUCCESSFULLY_REMOVED_MEETINGS:
      return {
        ...state,
        lastRemovedMeetings: null,
      };
    case REMOVE_TOPICS_ERROR:
      console.log(action.failedMeetings)
      return {
        ...state,
        removedErrors: action.failedMeetings,
      };
    default:
      return state;
  }
};
