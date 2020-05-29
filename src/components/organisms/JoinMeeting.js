import React from 'react';
import styled from 'styled-components';
import Anchor from 'components/atoms/Anchor';
import {PrimaryButton} from 'components/atoms/Button';

const JoinMeeting = ({setIsModalVisible, isModalVisible, href}) => {
  return (
    <StyledWrapper>
      Czy na pewno chcesz dołączyć do następującego spotkania?
      <Anchor href={href} target="_blank">
        {href}
      </Anchor>
      <Anchor href={href} target="_blank">
        <PrimaryButton>Dołącz do spotkania</PrimaryButton>
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
  }
`;
