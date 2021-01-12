import StyledDate from 'components/atoms/StyledDate';
import Title from 'components/atoms/Title';
import React from 'react';
import variables from 'settings/variables';
import styled from 'styled-components';

const MeetWrapper = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.6rem;

  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    display: grid;
    row-gap: 1rem;

    > div:nth-of-type(2) {
      display: none;
    }
  }
`;

const NextMeetInfo = ({date, title}) => {
  return (
    <MeetWrapper>
      <StyledDate uppercase format="dddd DD/MM/YYYY, H:mm" date={date}></StyledDate>
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
