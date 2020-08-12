export const GET_MEETING_HISTORY_REQUEST = 'GET_MEETING_HISTORY_REQUEST';
export const GET_MEETING_HISTORY_RECEIVED = 'GET_MEETING_HISTORY_RECEIVED';
export const GET_MEETING_HISTORY_ERROR = 'GET_MEETING_HISTORY_ERROR';

export const getMeetingsHistoryPending = () => ({
  type: GET_MEETING_HISTORY_REQUEST,
});

export const getMeetingsHistorySuccess = meetings => ({
  type: GET_MEETING_HISTORY_RECEIVED,
  meetings,
});

export const getMeetingsHistoryError = error => ({
  type: GET_MEETING_HISTORY_ERROR,
  error,
});
