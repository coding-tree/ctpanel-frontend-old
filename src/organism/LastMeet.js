import React, {lazy} from 'react';
import {LastMeetWrapper} from 'styledComponents/LastMeet';

const LastMeetHeader = lazy(() => import('molecules/LastMeetHeader'));
const LastMeetDescription = lazy(() => import('atoms/LastMeetDescription'));
const LastMeetLinks = lazy(() => import('molecules/LastMeetLinks'));
const MaterialButton = lazy(() => import('atoms/MaterialButton'));

const LastMeet = ({lastMeet}) => {
  const {author, title, date, description, usefulLinks, materialLink} = lastMeet;
  return (
    <LastMeetWrapper>
      <LastMeetHeader author={author} title={title} date={date}></LastMeetHeader>
      <LastMeetDescription description={description}></LastMeetDescription>
      <LastMeetLinks usefulLinks={usefulLinks}></LastMeetLinks>
      <MaterialButton url={materialLink}></MaterialButton>
    </LastMeetWrapper>
  );
};

export default LastMeet;
