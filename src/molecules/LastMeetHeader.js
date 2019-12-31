import React from 'react';
import styled from 'styled-components';

import StyledDate from 'atoms/StyledDate';
import Title from 'atoms/Title';

const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 7rem;
`;

const LastMeetHeader = ({author, title, date}) => {
  return (
    <HeaderWrapper>
      <Title left uppercase>
        {author}
      </Title>
      <Title uppercase important fontSize="3.2rem">
        {title}
      </Title>
      <StyledDate right fontSize="2rem" format="MM.DoYYYY" date={date}></StyledDate>
    </HeaderWrapper>
  );
};

export default LastMeetHeader;
