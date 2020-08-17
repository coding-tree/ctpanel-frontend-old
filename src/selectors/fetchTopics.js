import {getTopicsPending, getTopicsSuccess, getTopicsError} from 'actions/topics';
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
    const removeElements = (selectedElements, destination) => {
      return selectedElements.map((element) => axios.delete(process.env.REACT_APP_SERVER_URL + '/' + destination + '/' + element._id));
    };

    try {
      await Promise.all(removeElements(selectedElements, destination));
      dispatch(getTopics());
    } catch (err) {
      return err.response;
    }
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
