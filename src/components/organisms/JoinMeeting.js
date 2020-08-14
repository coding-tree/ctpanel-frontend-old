import React from 'react';
import styled from 'styled-components';
import Anchor from 'components/atoms/Anchor';
import {MainButton} from 'components/atoms/Button';
import variables from 'settings/variables';

const JoinMeeting = ({setIsModalVisible, isModalVisible, href}) => {
  return (
    <StyledWrapper>
      Czy na pewno chcesz dołączyć do następującego spotkania?
      <Anchor href={href} target="_blank">
        {href}
      </Anchor>
      <Anchor href={href} target="_blank">
        <MainButton>Dołącz do spotkania</MainButton>
      </Anchor>
    </StyledWrapper>
  );
};

export default JoinMeeting;

const StyledWrapper = styled.div`
  display: grid;
  padding: 2.3rem;
  grid-row-gap: 2rem;
  ${Anchor}:last-child {
    justify-self: end;

    @media only screen and (max-width: ${variables.bpLargeMobile}) {
      justify-self: stretch;
      > button {
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: ${variables.bpTablet}) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    font-size: 1.2rem;
  }
`;
