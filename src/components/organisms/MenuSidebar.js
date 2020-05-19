import React from 'react';
import {NavLink} from 'react-router-dom';
import styled, {css} from 'styled-components';
import variables from 'settings/variables';

const logout = () => {
  window.location.href = `${process.env.REACT_APP_SERVER_URL}/logout`;
};

const MenuSidebar = () => {
  const year = new Date().getFullYear();
  return (
    <StyledWrapper>
      <TitleWrapper>Manager Spotkań</TitleWrapper>
      <MenuWrapper>
        <StyledLinksList>
          <StyledLinkElement>
            <StyledLink as={NavLink} exact strict to="/" activeclass="active">
              <MenuIcon className="fas fa-home"></MenuIcon> Strona główna
            </StyledLink>
          </StyledLinkElement>
          <StyledLinkElement>
            <StyledLink as={NavLink} to="/harmonogram" activeclass="active">
              <MenuIcon className="fas fa-clock"></MenuIcon>
              Harmonogram
            </StyledLink>
          </StyledLinkElement>
          <StyledLinkElement>
            <StyledLink as={NavLink} to="/baza-tematow" activeclass="active">
              <MenuIcon className="fas fa-database"></MenuIcon>
              Baza tematów
            </StyledLink>
          </StyledLinkElement>
          <StyledLinkElement>
            <StyledLink as={NavLink} to="/historia-spotkan" activeclass="active">
              <MenuIcon className="fas fa-calendar-alt"></MenuIcon>
              Historia
            </StyledLink>
          </StyledLinkElement>
          <StyledLinkElement>
            <StyledLink as={NavLink} to="/konto" activeclass="active">
              <MenuIcon className="fas fa-user-circle"></MenuIcon>
              Konto
            </StyledLink>
          </StyledLinkElement>
          <StyledLinkElement logout>
            <StyledLink onClick={() => logout()}>
              <MenuIcon className="fas fa-sign-out-alt"></MenuIcon>
              Wyloguj
            </StyledLink>
          </StyledLinkElement>
        </StyledLinksList>
      </MenuWrapper>
      <CopyrightWrapper>Copyright &copy; Coding Tree | {year}</CopyrightWrapper>
    </StyledWrapper>
  );
};

export default MenuSidebar;

// Styles

const StyledWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  width: 34rem;
  max-width: 34rem;
  height: 100vh;
  background-color: ${variables.colorMain};
  overflow-y: auto;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px ${variables.modalBackground};
    box-shadow: inset 0 0 6px ${variables.modalBackground};
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px ${variables.modalBackground};
    box-shadow: inset 0 0 6px ${variables.modalBackground};
    background-color: #555;
  }
`;

const TitleWrapper = styled.header`
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

const MenuWrapper = styled.div`
  width: 100%;
  justify-content: flex-end;
  flex-grow: 1;
`;

const StyledLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const StyledLinkElement = styled.li`
  position: relative;
  height: 65px;
  border-radius: 3rem 0 0 3rem;
  overflow: hidden;
  margin-bottom: 1.5rem;
  &:last-of-type {
    margin-top: auto;
    margin-bottom: 5rem;
  }
  &:hover a {
    color: ${variables.colorMain};
  }

  ${({logout}) =>
    logout &&
    css`
      background-color: ${variables.logoutButtonColor};
      &:hover a {
        color: ${variables.logoutButtonColor};
      }
    `}

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    background-color: ${variables.backgroundColor};
    z-index: 0;
    transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    transform-origin: right;
    right: 0;
  }
  &:hover::before {
    transform: scaleX(1);
  }
`;

const StyledLink = styled.a`
  width: 100%;
  align-items: center;
  padding: 0 0 0 5rem;
  font-weight: 700;
  font-size: 1.8rem;
  transition: all 0.3s;
  z-index: 10;
  cursor: pointer;
  &.active {
    color: ${variables.colorMain};
    background-color: ${variables.backgroundColor};
  }
`;

const MenuIcon = styled.i`
  font-size: 2rem;
  padding-right: 1rem;
`;

const CopyrightWrapper = styled.div`
  width: 100%;
  bottom: 5rem;
  justify-content: center;
  color: ${variables.colorWhite};
  font-size: 1.6rem;
  margin-bottom: 5rem;
`;
