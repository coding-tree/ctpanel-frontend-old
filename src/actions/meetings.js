export const GET_MEETINGS_REQUEST = 'GET_MEETINGS_REQUEST';
export const GET_MEETINGS_RECEIVED = 'GET_MEETINGS_RECEIVED';
export const GET_MEETINGS_ERROR = 'GET_MEETINGS_ERROR';

export const getMeetingsPending = () => ({
  type: GET_MEETINGS_REQUEST,
});

export const getMeetingsSuccess = meetings => ({
  type: GET_MEETINGS_RECEIVED,
  meetings,
});

export const getMeetingsError = error => ({
  type: GET_MEETINGS_ERROR,
  error,
});
