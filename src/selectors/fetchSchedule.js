import {getSchedulePending, getScheduleSuccess, getScheduleError} from 'actions/schedule';

export const getSchedule = () => {
  return async dispatch => {
    dispatch(getSchedulePending());
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_URL + '/meetings/schedule');
      const data = await response.json();
      dispatch(getScheduleSuccess(data));
    } catch (error) {
      dispatch(getScheduleError(error));
    }
  };
};
