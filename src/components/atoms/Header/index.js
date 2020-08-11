import styled from 'styled-components';
import variables from 'settings/variables';

const Header = styled.h1`
  display: flex;
  text-transform: uppercase;
  padding-bottom: ${({tableTitle}) => tableTitle && '3rem'};

  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    margin-left: 1rem;
    font-size: 2rem;
  }
`;

export default Header;
