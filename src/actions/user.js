export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_RECEIVED = 'GET_USER_RECEIVED';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const getUserPending = () => ({
  type: GET_USER_REQUEST,
});

export const getUserSuccess = meetings => ({
  type: GET_USER_RECEIVED,
  meetings,
});

export const getUserError = error => ({
  type: GET_USER_ERROR,
  error,
});
