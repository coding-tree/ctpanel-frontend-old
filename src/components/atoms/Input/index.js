import React from 'react';
import variables from 'settings/variables';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 360px;
  height: 43px;
  border-radius: 4px;
  padding-left: 30px;
  font-family: ${variables.mainFont};
  font-size: 1.4rem;
  border: 1px solid ${variables.colorLink};
`;

const Input = () => {
  return <StyledInput type="text" placeholder="Wyszukaj..."></StyledInput>;
};

export const TestInput = ({handleKeyPress}) => {
  return <StyledInput type="text" placeholder="Wyszukaj..."></StyledInput>;
};

export default Input;
