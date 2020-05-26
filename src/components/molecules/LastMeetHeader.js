import React from 'react';
import styled from 'styled-components';

import StyledDate from 'components/atoms/StyledDate';
import Title from 'components/atoms/Title';

const HeaderWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 3fr 1fr;
  justify-content: space-between;
  justify-items: center;
  grid-column-gap: 3rem;
  align-items: center;
  > div:last-child {
    justify-self: end;
  }
  ${Title}:nth-child(2) {
    text-align: center;
  }
`;

const LastMeetHeader = ({leader, topic, date}) => {
  return (
    <HeaderWrapper>
      <Title uppercase>{leader}</Title>
      <Title uppercase important fontSize="3.2rem">
        {topic}
      </Title>
      <StyledDate fontSize="2rem" format="MM.DoYYYY" date={date}></StyledDate>
    </HeaderWrapper>
  );
};

export default LastMeetHeader;
