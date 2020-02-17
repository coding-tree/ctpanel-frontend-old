export const getLastMeet = () => {
  return fetch('/meetings/last-one').then(resp => resp.json());
};
