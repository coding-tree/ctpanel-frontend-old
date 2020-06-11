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