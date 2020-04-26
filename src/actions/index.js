export const GET_MEETS_REQUEST = 'GET_MEETS_REQUEST';
export const GET_MEETS_SUCCESS = 'GET_MEETS_SUCCESS';
export const GET_MEETS_FAILURE = 'GET_MEETS_FAILURE';

export const fetchMeetsPending = meetType => ({
  type: GET_MEETS_REQUEST,
  meetType
});

export const fetchMeetsSuccess = (payload, meetType) => ({
  type: GET_MEETS_SUCCESS,
  payload,
  meetType
});

export const fetchMeetsError = (error, meetType) => ({
  type: GET_MEETS_FAILURE,
  error,
  meetType
});
