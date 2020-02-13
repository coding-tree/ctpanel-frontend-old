import styled from 'styled-components';
import variables from 'settings/variables';

const Icon = styled.i`
  font-size: ${({fontSize}) => fontSize};
  padding: ${({padding}) => padding};
  color: ${({checkbox}) => checkbox && variables.colorMain};
`;

export default Icon;
