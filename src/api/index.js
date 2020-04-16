export const getLastMeet = () => {
    let url = '/meetings/last-one'
  return fetch(`${url}`).then(resp => resp.json());
};