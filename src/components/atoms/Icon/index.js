import styled, {css} from 'styled-components';
import variables from 'settings/variables';

const Icon = styled.i`
  font-size: ${({fontSize}) => fontSize};
  padding: ${({padding}) => padding};
  color: ${({checkbox}) => checkbox && variables.colorMain};

  ${({absolute, top, left, right, bottom}) =>
    absolute &&
    css`
      position: absolute;
      top: ${top => top || 'initial'};
      bottom: ${bottom} || 'initial';
      right: ${right} || 'initial';
      left: ${left} || 'initial';
    `}
`;

export default Icon;
