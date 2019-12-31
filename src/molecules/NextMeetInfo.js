import React from 'react';
import styled from 'styled-components';

import StyledDate from 'atoms/StyledDate';
import Title from 'atoms/Title';

const MeetWrapper = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.6rem;
`;

const NextMeetInfo = ({date, title}) => {
  return (
    <MeetWrapper>
      <StyledDate format="dddd DD/MM/YYYY, H:mm" date={date}></StyledDate>
      <Title padding="0 1rem" fontSize="1.6rem">
        -
      </Title>
      <Title important uppercase fontSize="1.6rem">
        {title}
      </Title>
    </MeetWrapper>
  );
};

export default NextMeetInfo;
