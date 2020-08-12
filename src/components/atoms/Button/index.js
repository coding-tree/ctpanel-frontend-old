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

  @media only screen and (max-width: ${variables.bpTablet}) {
    font-size: 1.2rem;
  }

  ${({large}) =>
    large &&
    css`
      min-width: 144px;
      padding: 0 3rem;
      @media only screen and (max-width: ${variables.bpTablet}) {
        min-width: auto;
        padding: 0 1rem;
      }
    `}
  ${({small}) =>
    small &&
    css`
      min-width: auto;
      height: auto;
      padding: 0.5rem 1.5rem;
    `}
`;

export const PrimaryButton = styled(Button)`
  border: 2px solid ${variables.colorMain};
  color: ${variables.colorWhite};
  background-color: ${variables.colorMain};
  ${({inactive}) =>
    inactive &&
    css`
      border-color: ${variables.colorCancel};
      color: ${variables.colorWhite};
      background-color: ${variables.colorCancel};
      opacity: 0.3;
    `}
  ${({voted}) =>
    voted &&
    css`
      border-color: ${variables.colorMain};
      color: ${variables.colorWhite};
      background-color: ${variables.colorMain};
      opacity: 1;
    `}
  &:hover {
    border-color: ${variables.colorMain};
    color: ${variables.colorMain};
    background-color: ${variables.colorWhite};
    opacity: 1;
  }
`;

export const CancelButton = styled(Button)`
  color: ${variables.colorCancel};
  background-color: ${variables.colorWhite};
  border-color: ${variables.colorCancel};

  &:hover {
    color: ${variables.colorWhite};
    background-color: ${variables.colorCancel};
  }
`;

export const DeleteButton = styled(Button)`
  color: ${variables.colorWhite};
  background-color: ${variables.colorError};
  border-color: ${variables.colorError};
  ${({inactive}) =>
    inactive &&
    css`
      border-color: ${variables.colorCancel};
      color: ${variables.colorWhite};
      background-color: ${variables.colorCancel};
      opacity: 0.3;
    `}
  ${({voted}) =>
    voted &&
    css`
      color: ${variables.colorWhite};
      background-color: ${variables.colorError};
      border-color: ${variables.colorError};
      opacity: 1;
    `}
  &:hover {
    border-color: ${variables.colorError};
    color: ${variables.colorError};
    background-color: ${variables.colorWhite};
    opacity: 1;
  }
`;

export const EditButton = styled(Button)`
  color: ${variables.colorWhite};
  background-color: ${variables.colorEdit};
  border-color: ${variables.colorEdit};
  &:hover {
    color: ${variables.colorEdit};
    background-color: ${variables.colorWhite};
  }
`;

export default Button;
