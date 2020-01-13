export const GET_SCHEDULES_REQUEST = 'GET_SCHEDULES_REQUEST';
export const GET_SCHEDULES_SUCCESS = 'GET_SCHEDULES_REQUEST';
export const GET_SCHEDULES_FAILURE = 'GET_SCHEDULES_FAILURE';

export const getSchedules = () => dispatch => {
  return dispatch => {
    //dispatch(fetchProductsPending());
    fetch('https://exampleapi.com/products')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        //dispatch(fetchProductsSuccess(res.products)
        return res.products;
      })
      .catch(error => {
        //dispatch(fetchProductsError(error));
      })
  }
};