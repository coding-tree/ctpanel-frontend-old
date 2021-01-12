import Icon from 'components/atoms/Icon';
import React from 'react';
import variables from 'settings/variables';
import styled, {css} from 'styled-components';

const logout = () => {
  window.location.href = `${process.env.REACT_APP_SERVER_URL}/logout`;
};

const LogoutButton = ({children, account}) => {
  return (
    <StyledLink account={account} onClick={() => logout()}>
      <Icon fontSize="2rem" padding="0 1rem 0 0" className="fas fa-sign-out-alt"></Icon>
      <StyledSpan>{children}</StyledSpan>
    </StyledLink>
  );
};

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0 0 0 5rem;
  font-weight: 700;
  font-size: 1.8rem;
  transition: all 0.2s ease-in-out;
  z-index: 10;
  cursor: pointer;

  ${({account}) =>
    account &&
    css`
      display: none;
      @media only screen and (max-width: ${variables.bpTablet}) {
        padding: 0;
        display: flex;
        justify-content: center;
        font-size: 1.4rem;
        background-color: ${variables.logoutButtonColor};
        border-radius: 4px;
        border: 2px solid ${variables.logoutButtonColor};
        &:hover {
          background-color: ${variables.colorWhite};
          color: ${variables.logoutButtonColor};
        }
      }
      @media only screen and (max-width: ${variables.bpLargeMobile}) {
        font-size: 1.2rem;
      }
    `}
`;

const StyledSpan = styled.span`
  @media only screen and (max-width: ${variables.bpDesktop}) {
    display: none;
  }
  @media only screen and (max-width: ${variables.bpTablet}) {
    display: block;
  }
`;

export default LogoutButton;
