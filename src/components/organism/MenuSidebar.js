import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import variables from 'settings/variables';

const StyledWrapper = styled.nav`
  position: relative;
  flex-direction: column;
  width: 340px;
  height: 100vh;
  background-color: ${variables.colorMain};
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
`;

const StyledLinksList = styled.ul`
  flex-direction: column;
  width: 313px;
`;
const StyledLinkElement = styled.li`
  height: 65px;
  border-radius: 3rem 0 0 3rem;
  overflow: hidden;
  margin-bottom: 1.5rem;
`;
const StyledLink = styled.a`
  width: 100%;
  align-items: center;
  padding: 0 0 0 5rem;
  font-weight: 700;
  font-size: 2rem;
  &.active {
    color: ${variables.colorMain};
    background-color: ${variables.backgroundColor};
  }
`;
const MenuIcon = styled.i`
  font-size: 2rem;
  padding-right: 1rem;
`;

const CopyrightsWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 5rem;
  justify-content: center;
  color: ${variables.colorWhite};
  font-size: 1.6rem;
`;

const MenuSidebar = () => {
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
        </StyledLinksList>
      </MenuWrapper>
      <CopyrightsWrapper>Copyright &#169; Coding Tree | 2019</CopyrightsWrapper>
    </StyledWrapper>
  );
};

export default MenuSidebar;
