import React from 'react';
import {NavLink} from 'react-router-dom';

import {
  StyledWrapper,
  TitleWrapper,
  MenuWrapper,
  StyledLinksList,
  StyledLinkElement,
  StyledLink,
  MenuIcon,
  CopyrightWrapper,
} from 'styledComponents/MenuSidebar';

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
      <CopyrightWrapper>Copyright &#169; Coding Tree | 2019</CopyrightWrapper>
    </StyledWrapper>
  );
};

export default MenuSidebar;
