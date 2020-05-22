import styled, {css} from 'styled-components';
import variables from 'settings/variables';

const Anchor = styled.a`
  color: ${variables.colorLink};
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;
  font-size: ${({fontSize}) => fontSize};
  &:hover {
    color: ${variables.colorMain};
    transition: 0.2s all ease-in-out;
  }

  ${({button}) =>
    button &&
    css`
      border: 2px solid ${variables.colorMain};
      border-radius: 4px;
      background-color: ${variables.colorMain};
      &:hover {
        background-color: ${variables.colorWhite};
      }
    `}

  ${(props) =>
    props.buttonLink &&
    css`
      align-items: center;
      padding: 0.9rem 3.3rem;
      color: ${variables.colorWhite};
    `}
  ${(props) =>
    props.social &&
    css`
      color: ${variables.colorMain};
      &:hover {
        color: ${variables.colorWhite};
      }
    `}
`;

export default Anchor;
