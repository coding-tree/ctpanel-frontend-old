export const GET_TOPICS_REQUEST = 'GET_TOPICS_REQUEST';
export const GET_TOPICS_RECEIVED = 'GET_TOPICS_RECEIVED';
export const GET_TOPICS_ERROR = 'GET_TOPICS_ERROR';

export const SET_SUCCESSFULLY_REMOVED_MEETINGS = 'SET_SUCCESSFULLY_REMOVED_MEETINGS';
export const CLEAR_SUCCESSFULLY_REMOVED_MEETINGS = 'CLEAR_SUCCESSFULLY_REMOVED_MEETINGS';
export const REMOVE_TOPICS_ERROR = 'REMOVE_TOPICS_ERROR';

export const getTopicsPending = () => ({
  type: GET_TOPICS_REQUEST,
});

export const getTopicsSuccess = meetings => ({
  type: GET_TOPICS_RECEIVED,
  meetings,
});

export const getTopicsError = error => ({
  type: GET_TOPICS_ERROR,
  error,
});

export const setSuccessfullyRemovedMeetings = (successfullyMeetings) => ({
  type: SET_SUCCESSFULLY_REMOVED_MEETINGS,
  successfullyMeetings
});

export const clearSuccessfullyRemovedMeetings = () => ({
  type: CLEAR_SUCCESSFULLY_REMOVED_MEETINGS
});

export const removeTopicsError = (failedMeetings) => ({
  type: REMOVE_TOPICS_ERROR,
  failedMeetings,
});