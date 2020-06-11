export const GET_MEETS_REQUEST = 'GET_MEETS_REQUEST';
export const GET_MEETS_SUCCESS = 'GET_MEETS_SUCCESS';
export const GET_MEETS_FAILURE = 'GET_MEETS_FAILURE';

export const fetchMeetingHistoryPending = () => ({
  type: REQUEST_MEETING_HISTORY
});

export const fetchMeetingHistorySuccess = meetings => ({
  type: RECEIVE_MEETING_HISTORY,
  meetings
});

export const fetchMeetingHistoryError = error => ({
  type: INVALIDATE_MEETING_HISTORY,
  error
});

export const fetchSchedulePending = () => ({
  type: REQUEST_SCHEDULE
});

export const fetchScheduleSuccess = meetings => ({
  type: RECEIVE_SCHEDULE,
  meetings
});

export const fetchScheduleError = error => ({
  type: INVALIDATE_SCHEDULE,
  error
});

export const fetchMeetingsPending = () => ({
  type: REQUEST_MEETINGS
});

export const fetchMeetingsSuccess = meetings => ({
  type: RECEIVE_MEETINGS,
  meetings
});

export const fetchMeetingsError = error => ({
  type: INVALIDATE_MEETINGS,
  error
});

export const fetchTopicsPending = () => ({
  type: REQUEST_TOPICS
});

export const fetchTopicsSuccess = meetings => ({
  type: RECEIVE_TOPICS,
  meetings
});

export const fetchTopicsError = error => ({
  type: INVALIDATE_TOPICS,
  error
});