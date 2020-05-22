import styled from 'styled-components';

const Header = styled.h1`
  display: flex;
  text-transform: uppercase;
  padding-bottom: ${({tableTitle}) => tableTitle && '3rem'};
`;

export default Header;
