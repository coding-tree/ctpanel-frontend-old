export const getLastMeet = () => {
  return fetch('/meetings/last-one');
};
