import {
    getTopicsPending,
    getTopicsSuccess,
    getTopicsError
} from 'actions/topics';

export const getTopics = () => {
    return async dispatch => {
        dispatch(getTopicsPending());
        try {
          const response = await fetch(process.env.REACT_APP_SERVER_URL + "/topics");
          const data = await response.json();
          console.log(data);
          dispatch(getTopicsSuccess(data));
        } catch(error){
          dispatch(getTopicsError(error));
        };
    };
};

export const addTopic = dataToSend => {
    return async dispatch => {
        try {
          const response = await fetch(process.env.REACT_APP_SERVER_URL + "/topics", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
              
          });
          dispatch(getTopics());
        } catch(error){
            console.log(error);
        };
    };
};

export const deleteTopics = (selectedElements, destination) => {
    return async dispatch => {
        const removeElements = (selectedElements, destination) => selectedElements.map(element => (
          fetch(process.env.REACT_APP_SERVER_URL + "/" + destination + "/" + element._id, {
            method: 'DELETE'
          })
        ));
        try {
          const response = await Promise.all(removeElements(selectedElements, destination));
          dispatch(getTopics());
        } catch(error) {
          console.log(error);
        };
    };
};

export const editTopic = (dataToSend, id) => {
    return async dispatch => {
        try {
            const response = await fetch(process.env.REACT_APP_SERVER_URL + "/topics/" + id, {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
          });
          dispatch(getTopics());
        } catch(error){
          console.log(error);
        };
    };
};