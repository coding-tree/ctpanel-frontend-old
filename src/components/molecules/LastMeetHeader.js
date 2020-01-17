import React from 'react';
import styled from 'styled-components';

import StyledDate from 'components/atoms/StyledDate';
import Title from 'components/atoms/Title';

const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 7rem;
`;

const LastMeetHeader = ({ leader, topic, date }) => {
  return (
    <HeaderWrapper>
      <Title left uppercase>
        {leader}
      </Title>
      <Title uppercase important fontSize="3.2rem">
        {topic}
      </Title>
      <StyledDate right fontSize="2rem" format="MM.DoYYYY" date={date}></StyledDate>
    </HeaderWrapper>
  );
};

export default LastMeetHeader;
