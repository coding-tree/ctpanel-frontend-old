export const GET_SCHEDULES_REQUEST = 'GET_SCHEDULES_REQUEST';
export const GET_SCHEDULES_SUCCESS = 'GET_SCHEDULES_SUCCESS';
export const GET_SCHEDULES_FAILURE = 'GET_SCHEDULES_FAILURE';

export const fetchSchedulesPending = () => ({
  type: GET_SCHEDULES_REQUEST,
});

export const fetchSchedulesSuccess = payload => ({
  type: GET_SCHEDULES_SUCCESS,
  payload,
});

export const fetchSchedulesError = error => ({
  type: GET_SCHEDULES_FAILURE,
  error,
});
