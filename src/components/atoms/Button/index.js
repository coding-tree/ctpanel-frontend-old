import styled, {css} from 'styled-components';
import variables from 'settings/variables';

const Button = styled.button`
  font-family: inherit;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-radius: 4px;
  border: 2px solid black;
  transition: all 0.2s ease-in-out;
  text-transform: ${({uppercase}) => uppercase && 'uppercase'};
  line-height: 1;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  min-width: 42px;
  height: 42px;
  font-size: 1.6rem;
  padding: 0 1.2rem;
  ${({large}) =>
    large &&
    css`
      min-width: 144px;
      padding: 0 3rem;
    `}
`;

export const PrimaryButton = styled(Button)`
  border: 2px solid ${variables.colorMain};
  color: ${variables.colorWhite};
  background-color: ${variables.colorMain};
  &:hover {
    color: ${variables.colorMain};
    background-color: ${variables.colorWhite};
  }
`;

export const CancelButton = styled(Button)`
  color: ${variables.colorWhite};
  background-color: ${variables.colorError};
  border-color: ${variables.colorError};
  &:hover {
    color: ${variables.colorError};
    background-color: ${variables.colorWhite};
  }
`;

export default Button;