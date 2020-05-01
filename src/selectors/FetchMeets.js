import {fetchMeetsPending, fetchMeetsSuccess, fetchMeetsError} from 'actions';

export const fetchMeets = (fetchParameters) => (dispatch) => {
  const {methodType, requestDataType, generalAttribute, specyficAttribute} = fetchParameters;

  const createUrl = () => {
    if (generalAttribute !== '') return `${requestDataType}/${generalAttribute}`;
    if (specyficAttribute !== '') return `${requestDataType}/${specyficAttribute}`;
    if (requestDataType !== '') return `${process.env.REACT_APP_PREFIX}/${requestDataType}`;
  };

  const getData = () => {
    const url = createUrl();

    try {
      fetch(url, {
        method: methodType,
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          if (response.status >= 400 && response.status <= 499)
            throw new Error(`There is problem: Błąd aplikacji. Dane nie zostały pobrane.`);
          if (response.status >= 500 && response.status <= 599)
            throw new Error(`There is problem: Błąd serwera. Dane nie zostały pobrane.`);
          throw new Error(`There is problem: Inna odpowiedź z serwera. Skontaktuj się z administratorem.`);
        })
        .then((data) => dispatch(fetchMeetsSuccess(data, requestDataType)))
        .catch((error) => dispatch(fetchMeetsError(error, requestDataType)));
    } catch (error) {
      throw new Error(`There is problem: ${error}`);
    }
  };

  return getData();
};
