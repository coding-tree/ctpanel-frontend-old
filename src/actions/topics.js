export const GET_TOPICS_REQUEST = 'GET_TOPICS_REQUEST';
export const GET_TOPICS_RECEIVED = 'GET_TOPICS_RECEIVED';
export const GET_TOPICS_ERROR = 'GET_TOPICS_ERROR';

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