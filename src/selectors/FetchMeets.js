import { 
  fetchMeetingHistoryPending, fetchMeetingHistorySuccess, fetchMeetingHistoryError, 
  fetchSchedulePending, fetchScheduleSuccess, fetchScheduleError, 
  fetchMeetingsPending, fetchMeetingsSuccess, fetchMeetingsError, 
  fetchTopicsPending, fetchTopicsSuccess, fetchTopicsError
} from 'actions';

export const fetchUser = async () => {
  try {
    const response = await fetch(process.env.REACT_APP_SERVER_URL + "/user");
    const data = await response.json();
    return data;
  } catch(error){
    console.log(error);
  }
}



export const fetchMeetingHistory = () => {
  return async dispatch => {
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_URL + "/meetings/schedule");
      const data = await response.json();
      dispatch(fetchMeetingHistorySuccess(data));
      //return data;
    } catch(error){
      console.log(error);
    }
  }

}



export const fetchTopics = async () => {
  try {
    const response = await fetch(process.env.REACT_APP_SERVER_URL + "/topics");
    const data = await response.json();
    return data;
  } catch(error){
    console.log(error);
  }
}

// export const fetchMeets = fetchParameters => dispatch => {
//   const {methodType, requestDataType, generalAttribute, specificAttribute, limit} = fetchParameters;

//   const createUrl = () => {
//     if (generalAttribute !== '') {
//       if (limit) return `${process.env.REACT_APP_SERVER_URL}/${generalAttribute}/${requestDataType}/?limit=${limit}`;
//       return `${process.env.REACT_APP_SERVER_URL}/${generalAttribute}/${requestDataType}`;
//     } else if (specificAttribute !== '') {
//       return `${process.env.REACT_APP_SERVER_URL}/${requestDataType}/${specificAttribute}`;
//     } else {
//       return `${process.env.REACT_APP_SERVER_URL}/${requestDataType}`;
//     }
//   };

//   const getData = () => {
//     const url = createUrl();

//     try {
//       fetch(url, {
//         method: methodType,
//         credentials: 'include',
//       })
//         .then(response => {
//           if (response.status === 200) return response.json();
//           if (response.status >= 400 && response.status <= 499) throw new Error(`There is problem: Błąd aplikacji. Dane nie zostały pobrane.`);
//           if (response.status >= 500 && response.status <= 599) throw new Error(`There is problem: Błąd serwera. Dane nie zostały pobrane.`);
//           throw new Error(`There is problem: Inna odpowiedź z serwera. Skontaktuj się z administratorem.`);
//         })
//         .then(data => dispatch(fetchMeetsSuccess(data, requestDataType)))
//         .catch(error => dispatch(fetchMeetsError(error, requestDataType)));
//     } catch (error) {
//       throw new Error(`There is problem: ${error}`);
//     }
//   };

//   return getData();
// };