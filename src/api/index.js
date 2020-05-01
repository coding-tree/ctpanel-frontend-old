export const getLastMeet = () => {
  let url = '/meetings/last-one';
  return fetch(`${process.env.REACT_APP_PREFIX}${url}`).then((resp) => resp.json());
};
