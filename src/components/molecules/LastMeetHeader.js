import React from 'react';
import styled from 'styled-components';

import StyledDate from 'components/atoms/StyledDate';
import Title from 'components/atoms/Title';
import variables from 'settings/variables';

const HeaderWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 3fr 1fr;
  justify-content: space-between;
  justify-items: center;
  grid-column-gap: 3rem;
  align-items: center;
  word-break: break-word;

  @media only screen and (max-width: ${variables.bpTablet}) {
    grid-template-columns: minmax(min-content, max-content) 1fr;
    gap: 0.5rem;
  }

  > div:first-child {
    justify-self: start;
    @media only screen and (max-width: ${variables.bpTablet}) {
      font-size: 1.6rem;
      grid-row: 1/2;
    }
    @media only screen and (max-width: ${variables.bpLargeMobile}) {
      font-size: 1.2rem;
    }
  }
  > div:last-child {
    justify-self: end;
    @media only screen and (max-width: ${variables.bpTablet}) {
      font-size: 1.6rem;
      grid-row: 1/2;
    }
    @media only screen and (max-width: ${variables.bpLargeMobile}) {
      font-size: 1.2rem;
    }
  }
  ${Title}:nth-child(2) {
    text-align: center;
    @media only screen and (max-width: ${variables.bpTablet}) {
      grid-row: 2/3;
      grid-column: 1/-1;
      text-align: left;
      justify-self: start;
    }
    @media only screen and (max-width: ${variables.bpLargeMobile}) {
      font-size: 2rem;
    }
  }
`;

const LastMeetHeader = ({leader, topic, date}) => {
  return (
    <HeaderWrapper>
      <Title uppercase>{leader}</Title>
      <Title uppercase important fontSize="3.2rem">
        {topic}
      </Title>
      <StyledDate fontSize="2rem" format="DoMM.YYYY" date={date}></StyledDate>
    </HeaderWrapper>
  );
};

export default LastMeetHeader;
