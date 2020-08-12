import {getMeetingsPending, getMeetingsSuccess, getMeetingsError} from 'actions/meetings';

export const getMeetings = () => {
  return async dispatch => {
    dispatch(getMeetingsPending());
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_URL + '/meetings');
      const data = await response.json();

      dispatch(getMeetingsSuccess(data.results));
    } catch (error) {
      dispatch(getMeetingsError(error));
    }
  };
};

export const addMeeting = dataToSend => {
  return async dispatch => {
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_URL + '/meetings', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
      dispatch(getMeetings());
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteMeetings = (selectedElements, destination) => {
  return async dispatch => {
    const removeElements = (selectedElements, destination) =>
      selectedElements.map(element =>
        fetch(process.env.REACT_APP_SERVER_URL + '/' + destination + '/' + element._id, {
          method: 'DELETE',
        })
      );
    try {
      const response = await Promise.all(removeElements(selectedElements, destination));
      dispatch(getMeetings());
    } catch (error) {
      console.log(error);
    }
  };
};

export const editMeeting = (dataToSend, id) => {
  return async dispatch => {
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_URL + '/meetings/' + id, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
      dispatch(getMeetings());
    } catch (error) {
      console.log(error);
    }
  };
};
