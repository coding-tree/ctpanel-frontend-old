import { GET_SCHEDULES_REQUEST, GET_SCHEDULES_SUCCESS, GET_SCHEDULES_FAILURE } from 'actions';

const initialState = {
  aaa: "aaa",
}

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SCHEDULES_REQUEST:
      return {
        ...state,
        pending: true
      }
    case GET_SCHEDULES_SUCCESS:
      return {
        ...state,
        pending: false,
        products: payload
      }
    case GET_SCHEDULES_FAILURE:
      return {
        ...state,
        pending: false
      }
    default:
      return state;
  }
}

export default rootReducer;