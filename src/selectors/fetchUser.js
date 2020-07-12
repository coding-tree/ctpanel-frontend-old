import { 
    getUserPending,
    getUserSuccess,
    getUserError
} from 'actions';
  
export const getUser = () => {
    return async dispatch => {
        //dispatch(getUserPending());
        try {
          const response = await fetch(process.env.REACT_APP_SERVER_URL + "/user", {credentials: 'include'});
          const data = await response.json();
          dispatch(getUserSuccess(data));
        } catch(error){
          dispatch(getUserError(error));
        };
    };
};