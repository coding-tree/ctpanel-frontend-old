import styled, {css} from 'styled-components';
import variables from 'settings/variables';

const Anchor = styled.a`
  color: ${variables.colorLink};
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;
  font-size: ${({fontSize}) => fontSize}
  &:hover {
    color: ${variables.colorMain};
    transition: 0.3s;
  }

  ${props =>
    props.buttonLink &&
    css`
      align-items: center;
      padding: 0.9rem 3.3rem;
      color: ${variables.colorWhite};
    `}
`;

export default Anchor;
