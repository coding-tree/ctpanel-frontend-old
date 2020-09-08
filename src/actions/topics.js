export const GET_TOPICS_REQUEST = 'GET_TOPICS_REQUEST';
export const GET_TOPICS_RECEIVED = 'GET_TOPICS_RECEIVED';
export const GET_TOPICS_ERROR = 'GET_TOPICS_ERROR';

export const DELETE_TOPICS_SET_REMOVED_TOPICS = 'DELETE_TOPICS_SET_REMOVED_TOPICS';
export const DELETE_TOPICS_SET_NOT_REMOVED_TOPICS = 'DELETE_TOPICS_SET_NOT_REMOVED_TOPICS';

export const getTopicsPending = () => ({
  type: GET_TOPICS_REQUEST
});

export const getTopicsSuccess = meetings => ({
  type: GET_TOPICS_RECEIVED,
  meetings
});

export const getTopicsError = error => ({
  type: GET_TOPICS_ERROR,
  error
});

export const setSuccessfullyRemovedTopics = (successfullyRemovedTopics) => ({
  type: DELETE_TOPICS_SET_REMOVED_TOPICS,
  successfullyRemovedTopics
});

export const setUnsuccessfullyRemovedTopics = (unsuccessfullyRemovedTopics) => ({
  type: DELETE_TOPICS_SET_NOT_REMOVED_TOPICS,
  unsuccessfullyRemovedTopics
});