export const getLastMeet = () => {
  return fetch('/api/meetings/last-one').then((resp) => resp.json());
};
