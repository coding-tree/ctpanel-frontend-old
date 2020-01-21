import styled, {css} from 'styled-components';
import variables from 'settings/variables';

const Title = styled.div`
  font-size: ${props => (props.fontSize ? props.fontSize : '2rem')};
  color: ${props => (props.important ? variables.colorMain : variables.colorFont)};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'initial')};
  font-weight: bold;
  padding: ${props => (props.padding ? props.padding : 'initial')};
  color: ${props => props.link && variables.colorLink};

  ${props =>
    props.left &&
    css`
      position: absolute;
      left: 0;
    `};
`;

export default Title;