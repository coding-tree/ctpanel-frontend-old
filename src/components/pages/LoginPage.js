import React from 'react';
import styled from 'styled-components';
import {useAuth0} from 'react-auth0-spa';
import LoginTemplate from 'components/templates/LoginTemplate';

const StyledBackground = styled.div`
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;
const StyledWrapper = styled.div`
  flex-direction: column;
`;

const LoginPage = () => {
  const {loginWithRedirect} = useAuth0();
  return (
    <LoginTemplate>
      <StyledBackground>
        <StyledWrapper>
          <h1>Login page</h1>
          <button onClick={() => loginWithRedirect()}>Zaloguj się</button>
        </StyledWrapper>
      </StyledBackground>
    </LoginTemplate>
  );
};

export default LoginPage;
