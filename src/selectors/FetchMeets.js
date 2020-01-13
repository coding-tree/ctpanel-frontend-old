import { fetchMeetsPending, fetchMeetsSuccess, fetchMeetsError } from 'actions';

const fetchMeets = () => dispatch => {
    return fetch('http://www.mocky.io/v2/5e14ccd42d00002b0016739e')
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                throw (res.error);
            }
            dispatch(fetchMeetsSuccess(res))
        })
        .catch(error => {
            //dispatch(fetchMeetsError(error));
        })
}

export default fetchMeets;