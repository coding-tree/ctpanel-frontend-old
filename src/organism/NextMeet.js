import React from 'react';

import styled from 'styled-components';
import variables from 'settings/variables';

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
    date: new Date(2020, 0, 22, 21, 30),
    title: 'Testowanie komponentów przy użyciu JEST',
  };

  const days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
  const date = fakeData.date;
  const day = days[fakeData.date.getDay()];
  const formattedDate = `${day} ${date.toLocaleDateString()}`;
  const formattedTime = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <StyledWrapper>
      <TitleWrapper>Najbliższe spotkanie</TitleWrapper>
      <MeetWrapper>
        {formattedDate}, {formattedTime} - <StyledMeetTitle> {fakeData.title}</StyledMeetTitle>
      </MeetWrapper>
    </StyledWrapper>
  );
};

export default NextMeet;
