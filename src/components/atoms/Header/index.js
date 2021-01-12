import variables from 'settings/variables';
import styled from 'styled-components';

const Header = styled.h1`
  text-transform: uppercase;
  padding-bottom: ${({tableTitle}) => tableTitle && '3rem'};

  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    margin-left: 1rem;
    font-size: 2rem;
  }
`;

export default Header;
