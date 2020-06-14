import { 
  getUserPending, getUserSuccess, getUserError,
  getMeetingHistoryPending, getMeetingHistorySuccess, getMeetingHistoryError, 
  getSchedulePending, getScheduleSuccess, getScheduleError, 
  getMeetingsPending, getMeetingsSuccess, getMeetingsError, 
  getTopicsPending, getTopicsSuccess, getTopicsError
} from 'actions';

export const getUser = () => (
  async dispatch => {
    //dispatch(getUserPending());
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
export const postMeetings = dataToSend => (
  async dispatch => {
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_URL + "/meetings", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)

      });
    } catch(error){
      console.log(error);
    };
  }
);
export const removeMeetings = (selectedElements, destination) => (
  async dispatch => {
    const removeElements = (selectedElements, destination) => selectedElements.map(element => (
      fetch(process.env.REACT_APP_SERVER_URL + "/" + destination + "/" + element._id, {
        method: 'DELETE'
      })
    ));
    
    try {
      const response = await Promise.all(removeElements(selectedElements, destination));
    } catch(error) {
      console.log(error);
    }
  }
);
export const editMeetings = (dataToSend, id) => (
  async dispatch => {
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_URL + "/meetings/" + id, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      });
    } catch(error){
      console.log(error);
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
export const postTopic = dataToSend => (
  async dispatch => {
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_URL + "/topics", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)

      });
    } catch(error){
      console.log(error);
    };
  }
);
export const removeTopics = (selectedElements, destination) => (
  async dispatch => {
    const removeElements = (selectedElements, destination) => selectedElements.map(element => (
      fetch(process.env.REACT_APP_SERVER_URL + "/" + destination + "/" + element._id, {
        method: 'DELETE'
      })
    ));
    
    try {
      const response = await Promise.all(removeElements(selectedElements, destination));
    } catch(error) {
      console.log(error);
    }
  }
);
export const editTopics = (dataToSend, id) => (
  async dispatch => {
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_URL + "/topics/" + id, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)

      });
    } catch(error){
      console.log(error);
    };
  }
);