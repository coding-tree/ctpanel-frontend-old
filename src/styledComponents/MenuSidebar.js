import styled from 'styled-components';
import variables from 'settings/variables';

export const StyledWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  width: 340px;
  min-width: 340px;
  height: 100vh;
  background-color: ${variables.colorMain};
  overflow-y: auto;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
`;

export const TitleWrapper = styled.header`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  color: ${variables.colorWhite};
  font-size: 4rem;
  font-weight: 700;
  font-family: ${variables.logoFont};
  margin-top: 10rem;
  margin-bottom: 6rem;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  justify-content: flex-end;
  flex-grow: 1;
`;

export const StyledLinksList = styled.ul`
  flex-direction: column;

  width: 313px;
`;

export const StyledLinkElement = styled.li`
  height: 65px;
  border-radius: 3rem 0 0 3rem;
  overflow: hidden;
  margin-bottom: 1.5rem;
`;

export const StyledLink = styled.a`
  width: 100%;
  align-items: center;
  padding: 0 0 0 5rem;
  font-weight: 700;
  font-size: 1.8rem;
  &.active {
    color: ${variables.colorMain};
    background-color: ${variables.backgroundColor};
  }
`;

export const MenuIcon = styled.i`
  font-size: 2rem;
  padding-right: 1rem;
`;

export const CopyrightWrapper = styled.div`
  width: 100%;
  bottom: 5rem;
  justify-content: center;
  color: ${variables.colorWhite};
  font-size: 1.6rem;
  margin-bottom: 2rem;
`;
