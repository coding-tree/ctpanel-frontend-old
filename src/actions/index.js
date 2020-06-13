export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const INVALIDATE_USER = 'INVALIDATE_USER';

export const REQUEST_MEETING_HISTORY = 'REQUEST_MEETING_HISTORY';
export const RECEIVE_MEETING_HISTORY = 'RECEIVE_MEETING_HISTORY';
export const INVALIDATE_MEETING_HISTORY = 'INVALIDATE_MEETING_HISTORY';

export const REQUEST_SCHEDULE = 'REQUEST_SCHEDULE';
export const RECEIVE_SCHEDULE = 'RECEIVE_SCHEDULE';
export const INVALIDATE_SCHEDULE = 'INVALIDATE_SCHEDULE';

export const REQUEST_MEETINGS = 'REQUEST_MEETINGS';
export const RECEIVE_MEETINGS = 'RECEIVE_MEETINGS';
export const INVALIDATE_MEETINGS = 'INVALIDATE_MEETINGS';

export const REQUEST_TOPICS = 'REQUEST_TOPICS';
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';
export const INVALIDATE_TOPICS = 'INVALIDATE_TOPICS';

export const getUserPending = () => ({
  type: REQUEST_USER
});
export const getUserSuccess = meetings => ({
  type: RECEIVE_USER,
  meetings
});
export const getUserError = error => ({
  type: INVALIDATE_USER,
  error
});

export const getMeetingHistoryPending = () => ({
  type: REQUEST_MEETING_HISTORY
});
export const getMeetingHistorySuccess = meetings => ({
  type: RECEIVE_MEETING_HISTORY,
  meetings
});
export const getMeetingHistoryError = error => ({
  type: INVALIDATE_MEETING_HISTORY,
  error
});

export const getSchedulePending = () => ({
  type: REQUEST_SCHEDULE
});
export const getScheduleSuccess = meetings => ({
  type: RECEIVE_SCHEDULE,
  meetings
});
export const getScheduleError = error => ({
  type: INVALIDATE_SCHEDULE,
  error
});

export const getMeetingsPending = () => ({
  type: REQUEST_MEETINGS
});
export const getMeetingsSuccess = meetings => ({
  type: RECEIVE_MEETINGS,
  meetings
});
export const getMeetingsError = error => ({
  type: INVALIDATE_MEETINGS,
  error
});

export const getTopicsPending = () => ({
  type: REQUEST_TOPICS
});
export const getTopicsSuccess = meetings => ({
  type: RECEIVE_TOPICS,
  meetings
});
export const getTopicsError = error => ({
  type: INVALIDATE_TOPICS,
  error
});