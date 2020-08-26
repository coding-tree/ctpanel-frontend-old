import {
  getTopicsPending, getTopicsSuccess, getTopicsError,
  setSuccessfullyRemovedMeetings, removeTopicsError
} from 'actions/topics';
import axios from 'axios';

export const getTopics = () => {
  return async (dispatch) => {
    dispatch(getTopicsPending());
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_URL + '/topics');
      const data = await response.json();
      dispatch(getTopicsSuccess(data));
    } catch (error) {
      dispatch(getTopicsError(error));
    }
  };
};

export const addTopic = (dataToSend) => {
  return async (dispatch) => {
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_URL + '/topics', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
      dispatch(getTopics());
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTopics = (selectedElements, destination) => {
  return async (dispatch) => {
    const removeElement = async (element) => {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/${destination}/${element._id}`, {
          method: 'DELETE',
          body: JSON.stringify(element)
        });
        if(response.ok) return ({success: true, meetingTopic: element.topic});
        else return ({success: false, errorText: await response.text()});
    };

    try {
      const response = await Promise.all(selectedElements.map(element => removeElement(element)));
      const { successfullyMeetings, failedMeetings } = response.reduce((acc, element) => {
        if(element.success) acc.successfullyMeetings.push(element.meetingTopic);
        else acc.failedMeetings.push(element.errorText);
        return acc;
      }, {successfullyMeetings: [], failedMeetings: []});

      dispatch(setSuccessfullyRemovedMeetings(successfullyMeetings));
      dispatch(removeTopicsError(failedMeetings));

      return { successfullyMeetings, failedMeetings }
    } catch(err){
      console.log(err);
      console.log(err.response);
    } finally{
      dispatch(getTopics());
    };
  };
};

export const editTopic = (dataToSend, id) => {
  return async (dispatch) => {
    try {
      await axios.put(process.env.REACT_APP_SERVER_URL + '/topics/' + id, JSON.stringify(dataToSend), {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      dispatch(getTopics());
    } catch (error) {
      return error.response;
    }
  };
};
