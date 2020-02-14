import React from 'react';
import styled from 'styled-components';
import variables from 'settings/variables';

import Title from 'components/atoms/Title';
import NextMeetInfo from 'components/molecules/NextMeetInfo';

const StyledWrapper = styled.div`
  width: calc(100%);
  height: 113px;
  min-height: 113px;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
  background-color: ${variables.colorWhite};
  margin-bottom: 100px;
`;

const NextMeet = () => {
  const fakeData = {
    id: 1,
    date: 1578864600000,
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
