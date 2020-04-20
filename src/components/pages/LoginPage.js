import React from 'react';
import styled from 'styled-components';
import LoginTemplate from 'components/templates/LoginTemplate';
import variables from 'settings/variables';
import Title from 'components/atoms/Title';
import SocialIcons from 'components/organisms/SocialIcons';
import Text from 'components/atoms/Text';
import Button from 'components/atoms/Button/Button';

const StyledBackground = styled.div`
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    content: '';
    background-image: url('background_pattern.png');
    background-repeat: repeat;
    opacity: 0.5;
    z-index: -1;
  }
`;
const StyledWrapper = styled.div`
  flex-direction: column;
  max-width: 800px;
`;

const StyledImage = styled.img``;

const StyledContainer = styled.div`
  flex-direction: column;
  align-items: center;
`;

const LoginPage = ({originalUrl}) => {
  const login = () => {
    window.location.href = 'http://localhost:3001/login';
  };
  return (
    <LoginTemplate>
      <StyledBackground>
        <StyledWrapper>
          <StyledImage src="logo_login.svg"></StyledImage>
          <SocialIcons></SocialIcons>

          <StyledContainer>
            <Title uppercase fontSize="3.2rem" padding="50px 0">
              Menadżer Spotkań
            </Title>

            <Text>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
              dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
              incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            </Text>
            <Title uppercase fontSize="3.2rem" padding="50px 0">
              Zobacz live demo
            </Title>

            <Button primary standard onClick={() => login()}>
              Zaloguj się
            </Button>
          </StyledContainer>
        </StyledWrapper>
      </StyledBackground>
    </LoginTemplate>
  );
};

export default LoginPage;
