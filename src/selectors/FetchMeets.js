import { 
  getUserPending, getUserSuccess, getUserError,
  getMeetingHistoryPending, getMeetingHistorySuccess, getMeetingHistoryError, 
  getSchedulePending, getScheduleSuccess, getScheduleError, 
  getMeetingsPending, getMeetingsSuccess, getMeetingsError, 
  getTopicsPending, getTopicsSuccess, getTopicsError
} from 'actions';

export const getUser = () => (
  async dispatch => {
    dispatch(getUserPending());
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_URL + "/user", {credentials: 'include'});
      const data = await response.json();
      dispatch(getUserSuccess(data));
    } catch(error){
      dispatch(getUserError(error));
    };
  }
);
export const getMeetingHistory = () => (
  async dispatch => {
    dispatch(getMeetingHistoryPending());
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_URL + "/meetings/archive");
      const data = await response.json();
      dispatch(getMeetingHistorySuccess(data));
    } catch(error){
      dispatch(getMeetingHistoryError(error));
    };
  }
);
export const getSchedule = () => (
  async dispatch => {
    dispatch(getSchedulePending());
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_URL + "/meetings/schedule");
      const data = await response.json();
      dispatch(getScheduleSuccess(data));
    } catch(error){
      dispatch(getScheduleError(error));
    };
  }
);
export const getMeetings = () => (
  async dispatch => {
    dispatch(getMeetingsPending());
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_URL + "/meetings");
      const data = await response.json();
      dispatch(getMeetingsSuccess(data));
    } catch(error){
      dispatch(getMeetingsError(error));
    };
  }
);
export const getTopics = () => (
  async dispatch => {
    dispatch(getTopicsPending());
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_URL + "/topics");
      const data = await response.json();
      dispatch(getTopicsSuccess(data));
    } catch(error){
      dispatch(getTopicsError(error));
    };
  }
);