import React from 'react';
import {StyledDate} from 'styledComponents/LastMeet';

const LastMeetDate = ({date}) => {
  const timestamp = new Date(date * 1000);
  const formattedDate = new Intl.DateTimeFormat('pl-PL', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(timestamp);
  return <StyledDate>{formattedDate}</StyledDate>;
};
export default LastMeetDate;
