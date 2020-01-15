import { fetchSchedulesPending, fetchSchedulesSuccess, fetchSchedulesError } from 'actions';

export const fetchMeets = () => dispatch => {
    return fetch('http://www.mocky.io/v2/5e1e09953600002b00c74577')
        .then(res => res.json())
        .then(payload => {
            // if (res.error) {
            //     throw (res.error);
            // }
            dispatch(fetchSchedulesSuccess(payload))
        })
        .catch(error => {
            //dispatch(fetchMeetsError(error));
        })
}