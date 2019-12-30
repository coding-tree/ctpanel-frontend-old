import React from 'react';

import DateLabel from 'atoms/DataLabel';
import {StyledWrapper, TitleWrapper, MeetWrapper, StyledMeetTitle} from 'styledComponents/NextMeet';

const NextMeet = () => {
  const fakeData = {
    id: 1,
    date: 1578864600,
    title: 'Testowanie komponentów przy użyciu JEST',
  };

  return (
    <StyledWrapper>
      <TitleWrapper>Najbliższe spotkanie</TitleWrapper>

      <MeetWrapper>
        <DateLabel date={fakeData.date}></DateLabel>
        <StyledMeetTitle>{fakeData.title}</StyledMeetTitle>
      </MeetWrapper>
    </StyledWrapper>
  );
};

export default NextMeet;
