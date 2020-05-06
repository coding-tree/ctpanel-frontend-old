export const getLastMeet = () => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/meetings/last-one`, {credentials: 'include'}).then((resp) =>
    resp.json()
  );
};
