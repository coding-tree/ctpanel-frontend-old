export const GET_SCHEDULE_REQUEST = 'GET_SCHEDULE_REQUEST';
export const GET_SCHEDULE_RECEIVED = 'GET_SCHEDULE_RECEIVED';
export const GET_SCHEDULE_ERROR = 'GET_SCHEDULE_ERROR';

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