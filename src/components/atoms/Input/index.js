import React from 'react';
import styled from 'styled-components';
import variables from 'settings/variables';

const StyledInput = styled.input`
  width: 360px;
  height: 43px;
  border-radius: 4px;
  padding-left: 30px;
  font-family: ${variables.mainFont};
  font-size: 1.4rem;
  border: 1px solid ${variables.colorLink};
  &::placeholder {
    display: flex;
  }
`;

const Input = () => {
  const handleKeyPress = e => {};

  return <StyledInput type="text" onKeyPress={e => handleKeyPress(e)} placeholder="Wyszukaj..."></StyledInput>;
};

export default Input;
