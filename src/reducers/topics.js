import { 
  GET_TOPICS_REQUEST, GET_TOPICS_RECEIVED, GET_TOPICS_ERROR,
  DELETE_TOPICS_SET_REMOVED_TOPICS, DELETE_TOPICS_SET_NOT_REMOVED_TOPICS
} from 'actions/topics';

const _initialState = {
  pending: false,
  meetings: [],
  error: null,
  lastSuccessfullyRemovedTopics: [],
  lastUnsuccessfullyRemovedTopics: null,
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
    case DELETE_TOPICS_SET_REMOVED_TOPICS:
      return {
        ...state,
        lastSuccessfullyRemovedTopics: action.successfullyRemovedTopics,
      };
    case DELETE_TOPICS_SET_NOT_REMOVED_TOPICS:
      return {
        ...state,
        lastUnsuccessfullyRemovedTopics: action.unsuccessfullyRemovedTopics,
      };
    default:
      return state;
  };
};