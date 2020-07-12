import {
    GET_USER_REQUEST,
    GET_USER_RECEIVED,
    GET_USER_ERROR
} from 'actions';

const _initialState = {
    pending: false,
    meetings: undefined,
    error: null
};

export default (state = _initialState, action) => {
    switch(action.type) {
        case GET_USER_REQUEST:
            return {
                ...state,
                pending: true,
                error: false
            };
        case GET_USER_RECEIVED:
            return {
                pending: false,
                meetings: action.meetings,
                error: null
            };
        case GET_USER_ERROR:
            return {
                ...state,
                error: true
            };
        default: 
            return state;
        };
};