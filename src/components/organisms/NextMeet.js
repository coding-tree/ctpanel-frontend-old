import React from 'react';

import styled from 'styled-components';
import variables from 'settings/variables';

import DateLabel from 'components/atoms/dateLabel';

const StyledWrapper = styled.div`
  width: calc(100%);
  height: 113px;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
  background-color: ${variables.colorWhite};
`;
const TitleWrapper = styled.div`
  color: ${variables.colorMain};
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`;
const MeetWrapper = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.6rem;
`;
const StyledMeetTitle = styled.span`
  color: ${variables.colorMain};
  padding-left: 0.5rem;
`;

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
