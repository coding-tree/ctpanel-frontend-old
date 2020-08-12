import {getUserPending, getUserSuccess, getUserUnauthorized, getUserError} from 'actions/user';

export const getUser = () => {
  return async dispatch => {
    dispatch(getUserPending());
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_URL + '/user', {credentials: 'include'});

      if (response.ok) {
        const data = await response.json();
        dispatch(getUserSuccess(data));
      } else {
        if (response.status === 401) {
          dispatch(getUserUnauthorized());
        } else {
          dispatch(getUserError(`Invalid responese status ${response.status}`));
        }
      }
    } catch (error) {
      dispatch(getUserError(error));
    }
  };
};
