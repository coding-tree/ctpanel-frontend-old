import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import variables from 'settings/variables';
import Icon from '../Icon';

const StyledWrapper = styled.div`
  height: 20px;
  width: 20px;
  background: ${variables.checkboxColor};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  transition: 0.1s background;
  cursor: pointer;
  ${({checked}) =>
    checked &&
    css`
      color: ${variables.colorWhite};
      background: ${variables.colorMain};
      transition: 0.1s background;
    `}
`;
const StyledCheckbox = styled.input``;

const Checkbox = () => {
  const [isChecked, toggleChecked] = useState(false);
  return (
    <StyledWrapper checked={isChecked} onClick={() => toggleChecked(!isChecked)}>
      <Icon fontSize="1rem" className={isChecked && 'fas fa-check'}></Icon>
      <StyledCheckbox value={isChecked} type="checkbox" hidden></StyledCheckbox>
    </StyledWrapper>
  );
};

export default Checkbox;
