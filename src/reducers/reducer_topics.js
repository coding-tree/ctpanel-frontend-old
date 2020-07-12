import {
  GET_TOPICS_REQUEST,
  GET_TOPICS_RECEIVED,
  GET_TOPICS_ERROR
} from 'actions';

const _initialState = {
  pending: false,
  meetings: [],
  error: null
};

export default (state = _initialState, action) => {
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