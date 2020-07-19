import { 
    getSchedulePending,
    getScheduleSuccess,
    getScheduleError
} from 'actions/schedule';

export const getSchedule = () => {
    console.log("HALO")
    return async dispatch => {
        dispatch(getSchedulePending());
        try {
            const response = await fetch(process.env.REACT_APP_SERVER_URL + "/meetings/schedule");
            console.log(response.json());
            const data = await response.json();
            console.log(data);
            dispatch(getScheduleSuccess(data));
        } catch(error){
            dispatch(getScheduleError(error));
        };
    };
};