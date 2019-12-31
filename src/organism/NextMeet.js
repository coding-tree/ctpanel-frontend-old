import React from 'react';
import styled from 'styled-components';
import variables from 'settings/variables';

import Title from 'atoms/Title';
import NextMeetInfo from 'molecules/NextMeetInfo';

const StyledWrapper = styled.div`
  width: calc(100%);
  height: 113px;
  min-height: 113px;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
  background-color: ${variables.colorWhite};
`;

const NextMeet = () => {
  const fakeData = {
    id: 1,
    date: 1578864600,
    title: 'Testowanie komponentów przy użyciu JEST',
  };

  return (
    <StyledWrapper>
      <Title important uppercase>
        Najbliższe spotkanie
      </Title>
      <NextMeetInfo date={fakeData.date} title={fakeData.title}></NextMeetInfo>
    </StyledWrapper>
  );
};

export default NextMeet;
