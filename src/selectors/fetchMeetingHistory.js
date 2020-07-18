import {
    getMeetingsHistoryPending,
    getMeetingsHistorySuccess,
    getMeetingsHistoryError
} from 'actions/meetingHistory';

export const getMeetingsHistory = () => {
    return async dispatch => {
        dispatch(getMeetingsHistoryPending());
        try {
            const response = await fetch(process.env.REACT_APP_SERVER_URL + "/meetings/archive");
            const data = await response.json();
            dispatch(getMeetingsHistorySuccess(data));
        } catch(error){
            dispatch(getMeetingsHistoryError(error));
        };
    };
};