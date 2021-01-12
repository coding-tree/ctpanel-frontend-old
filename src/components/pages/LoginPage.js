import {PrimaryButton} from 'components/atoms/Button';
import Text from 'components/atoms/Text';
import Title from 'components/atoms/Title';
import SocialIcons from 'components/organisms/SocialIcons';
import React from 'react';
import variables from 'settings/variables';
import styled from 'styled-components';
import LoginStyle from 'theme/LoginStyle';

const StyledBackground = styled.div`
  display: flex;
  height: 100vh;
  height: -webkit-fill-available;
  width: 100%;
  justify-content: center;
  align-items: center;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    height: -webkit-fill-available;
    content: '';
    background-image: url('background_pattern.png');
    background-repeat: repeat;
    opacity: 0.5;
    z-index: -1;
  }
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  padding: 0 2rem;
`;

const StyledImage = styled.img`
  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    max-height: 10rem;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginPage = () => {
  const login = () => {
    window.location.href = `${process.env.REACT_APP_SERVER_URL}/login`;
  };

  return (
    <>
      <LoginStyle />
      <StyledBackground>
        <StyledWrapper>
          <StyledImage src="logo_login.svg"></StyledImage>
          <SocialIcons></SocialIcons>

          <StyledContainer>
            <Title uppercase fontSize="3.2rem" padding="50px 0">
              Menadżer Spotkań
            </Title>

            <Text margin="0 0 5rem 0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
              fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
              amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
              ad minima veniam, quis
            </Text>

            <PrimaryButton large onClick={() => login()}>
              Zaloguj się
            </PrimaryButton>
          </StyledContainer>
        </StyledWrapper>
      </StyledBackground>
    </>
  );
};

export default LoginPage;
