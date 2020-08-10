import React from 'react';
import {NavLink} from 'react-router-dom';
import styled, {css} from 'styled-components';
import variables from 'settings/variables';
import Icon from 'components/atoms/Icon';

const logout = () => {
  window.location.href = `${process.env.REACT_APP_SERVER_URL}/logout`;
};

const MenuSidebar = () => {
  const year = new Date().getFullYear();

  return (
    <StyledWrapper>
      <TitleWrapper>Coding Tree Panel</TitleWrapper>
      <TitleWrapper tablet>CT</TitleWrapper>

      <MenuWrapper>
        <StyledLinksList>
          <StyledLinkElement>
            <StyledLink as={NavLink} exact strict to="/" activeclass="active">
              <Icon fontSize="2rem" padding="0 1rem 0 0" className="fas fa-home"></Icon>
              <StyledSpan>Strona główna</StyledSpan>
            </StyledLink>
          </StyledLinkElement>
          <StyledLinkElement>
            <StyledLink as={NavLink} to="/harmonogram" activeclass="active">
              <Icon fontSize="2rem" padding="0 1rem 0 0" className="fas fa-clock"></Icon>
              <StyledSpan>Harmonogram</StyledSpan>
            </StyledLink>
          </StyledLinkElement>
          <StyledLinkElement>
            <StyledLink as={NavLink} to="/baza-tematow" activeclass="active">
              <Icon fontSize="2rem" padding="0 1rem 0 0" className="fas fa-database"></Icon>
              <StyledSpan>Baza tematów</StyledSpan>
            </StyledLink>
          </StyledLinkElement>
          <StyledLinkElement>
            <StyledLink as={NavLink} to="/historia-spotkan" activeclass="active">
              <Icon fontSize="2rem" padding="0 1rem 0 0" className="fas fa-calendar-alt"></Icon>
              <StyledSpan>Historia</StyledSpan>
            </StyledLink>
          </StyledLinkElement>
          <StyledLinkElement>
            <StyledLink as={NavLink} to="/konto" activeclass="active">
              <Icon fontSize="2rem" padding="0 1rem 0 0" className="fas fa-user-circle"></Icon>
              <StyledSpan>Konto</StyledSpan>
            </StyledLink>
          </StyledLinkElement>
          <StyledLinkElement logout>
            <StyledLink onClick={() => logout()}>
              <Icon fontSize="2rem" padding="0 1rem 0 0" className="fas fa-sign-out-alt"></Icon>
              <StyledSpan>Wyloguj</StyledSpan>
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
  grid-area: aside;
  position: sticky;
  top: 0;
  left: 0;
  flex-direction: column;
  height: 100vh;
  background-color: ${variables.colorMain};
  z-index: 9999;

  @media only screen and (max-width: ${variables.bpTablet}) {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    height: 10rem;
  }

  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    height: auto;
    padding: 1rem 0;
  }

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

  @media only screen and (max-width: ${variables.bpDesktop}) {
    display: none;
  }
  @media only screen and (max-width: ${variables.bpTablet}) {
    display: block;
    font-size: 5vw;
  }

  ${({tablet}) =>
    tablet &&
    css`
      display: none;
      @media only screen and (max-width: ${variables.bpDesktop}) {
        display: block;
      }
      @media only screen and (max-width: ${variables.bpTablet}) {
        display: none;
      }
    `}

  @media only screen and (max-width: ${variables.bpTablet}) {
    margin: 0;
  }
`;

const MenuWrapper = styled.div`
  width: 100%;
  justify-content: flex-end;
  flex-grow: 1;

  @media only screen and (max-width: ${variables.bpTablet}) {
    position: fixed;
    right: 0;
    bottom: 0;
    justify-content: center;
    grid-row: 2/3;
    grid-column: 1/-1;
    background-color: ${variables.colorMain};
    height: 10rem;
  }
`;

const StyledLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 90%;
  @media only screen and (max-width: ${variables.bpTablet}) {
    display: grid;
    grid-auto-columns: 1fr;
    justify-content: space-between;
    grid-auto-flow: column;
    width: 100%;
  }
`;

const StyledLinkElement = styled.li`
  position: relative;
  height: 65px;
  border-radius: 3rem 0 0 3rem;
  overflow: hidden;
  margin-bottom: 1.5rem;
  &:hover a {
    color: ${variables.colorMain};
    @media only screen and (max-width: ${variables.bpTablet}) {
      color: ${variables.colorWhite};
      opacity: 1;
    }
  }
  i {
    @media only screen and (max-width: ${variables.bpDesktop}) {
      padding: 0;
    }
    @media only screen and (max-width: ${variables.bpTablet}) {
      padding: 0;
    }
  }

  @media only screen and (max-width: ${variables.bpTablet}) {
    height: auto;
    margin-bottom: 0;
    align-items: center;
    justify-content: center;
  }

  ${({logout}) =>
    logout &&
    css`
      margin-top: auto;
      margin-bottom: 5rem;
      background-color: ${variables.logoutButtonColor};
      &:hover a {
        color: ${variables.logoutButtonColor};
      }

      @media only screen and (max-width: ${variables.bpTablet}) {
        display: none;
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
    transition: transform 0.2s ease-in-out;
    transform-origin: right;
    right: 0;
    @media only screen and (max-width: ${variables.bpTablet}) {
      display: none;
    }
  }
  &:hover::before {
    transform: scaleX(1);
  }
`;

const StyledSpan = styled.span`
  @media only screen and (max-width: ${variables.bpDesktop}) {
    display: none;
  }
  @media only screen and (max-width: ${variables.bpTablet}) {
    display: block;
  }
`;

const StyledLink = styled.a`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 0 0 0 5rem;
  font-weight: 700;
  font-size: 1.8rem;
  transition: all 0.2s ease-in-out;
  z-index: 10;
  cursor: pointer;

  @media only screen and (max-width: ${variables.bpDesktop}) {
    padding-left: 3.5rem;
  }

  @media only screen and (max-width: ${variables.bpTablet}) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: auto;
    border-radius: 100%;
    opacity: 0.7;
    font-size: 1.2rem;
  }

  @media only screen and (max-width: ${variables.bpMobile}) {
    font-size: 0.8rem;
  }

  &.active {
    color: ${variables.colorMain};
    background-color: ${variables.backgroundColor};
    @media only screen and (max-width: ${variables.bpTablet}) {
      color: ${variables.colorWhite};
      background-color: transparent;
      opacity: 1;
    }
  }
`;

const CopyrightWrapper = styled.div`
  width: 100%;
  bottom: 5rem;
  justify-content: center;
  color: ${variables.colorWhite};
  font-size: 1.6rem;
  margin-bottom: 5rem;

  @media only screen and (max-width: ${variables.bpDesktop}) {
    display: none;
  }
`;
