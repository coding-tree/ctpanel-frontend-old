require('dotenv').config({path: '../../.env'});

export const getLastMeet = () => {
    let url;
  if(process.env.PRODUCTION) {
    url = '/api/meetings/last-one'
  } else {
    url = '/meetings/last-one'
  }
  return fetch(`${url}`).then(resp => resp.json());
};