export const getLastMeet = () => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/meetings/last-one`).then((resp) => resp.json());
};
