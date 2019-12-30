import React, {lazy} from 'react';
import {HeaderWrapper} from 'styledComponents/LastMeet';

const LastMeetAuthor = lazy(() => import('atoms/LastMeetAuthor'));
const LastMeetTitle = lazy(() => import('atoms/LastMeetTitle'));
const LastMeetDate = lazy(() => import('atoms/LastMeetDate'));

const LastMeetHeader = ({author, title, date}) => {
  return (
    <HeaderWrapper>
      <LastMeetAuthor>{author}</LastMeetAuthor>
      <LastMeetTitle>{title}</LastMeetTitle>
      <LastMeetDate date={date}></LastMeetDate>
    </HeaderWrapper>
  );
};

export default LastMeetHeader;
