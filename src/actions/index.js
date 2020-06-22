export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_RECEIVED = 'GET_USER_RECEIVED';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const GET_MEETING_HISTORY_REQUEST = 'GET_MEETING_HISTORY_REQUEST';
export const GET_MEETING_HISTORY_RECEIVED = 'GET_MEETING_HISTORY_RECEIVED';
export const GET_MEETING_HISTORY_ERROR = 'GET_MEETING_HISTORY_ERROR';

export const GET_SCHEDULE_REQUEST = 'GET_SCHEDULE_REQUEST';
export const GET_SCHEDULE_RECEIVED = 'GET_SCHEDULE_RECEIVED';
export const GET_SCHEDULE_ERROR = 'GET_SCHEDULE_ERROR';

export const GET_MEETINGS_REQUEST = 'GET_MEETINGS_REQUEST';
export const GET_MEETINGS_RECEIVED = 'GET_MEETINGS_RECEIVED';
export const GET_MEETINGS_ERROR = 'GET_MEETINGS_ERROR';

export const GET_TOPICS_REQUEST = 'GET_TOPICS_REQUEST';
export const GET_TOPICS_RECEIVED = 'GET_TOPICS_RECEIVED';
export const GET_TOPICS_ERROR = 'GET_TOPICS_ERROR';

export const getUserPending = () => ({
  type: GET_USER_REQUEST
});
export const getUserSuccess = meetings => ({
  type: GET_USER_RECEIVED,
  meetings
});
export const getUserError = error => ({
  type: GET_USER_ERROR,
  error
});

export const getMeetingsHistoryPending = () => ({
  type: GET_MEETING_HISTORY_REQUEST
});
export const getMeetingsHistorySuccess = meetings => ({
  type: GET_MEETING_HISTORY_RECEIVED,
  meetings
});
export const getMeetingsHistoryError = error => ({
  type: GET_MEETING_HISTORY_ERROR,
  error
});

export const getSchedulePending = () => ({
  type: GET_SCHEDULE_REQUEST
});
export const getScheduleSuccess = meetings => ({
  type: GET_SCHEDULE_RECEIVED,
  meetings
});
export const getScheduleError = error => ({
  type: GET_SCHEDULE_ERROR,
  error
});

export const getMeetingsPending = () => ({
  type: GET_MEETINGS_REQUEST
});
export const getMeetingsSuccess = meetings => ({
  type: GET_MEETINGS_RECEIVED,
  meetings
});
export const getMeetingsError = error => ({
  type: GET_MEETINGS_ERROR,
  error
});

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