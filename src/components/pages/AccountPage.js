import React, {useEffect, useState} from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import styled from 'styled-components';
import {connect} from 'react-redux';
import variables from 'settings/variables';
import Button from 'components/atoms/Button/Button';

const AccountPage = ({user}) => {
  const [userRole, setUserRole] = useState('Gość');
  const parseRoleIdToBeltColor = (userRolesArray) => {
    if (userRolesArray.includes('628160498050793482')) return 'Czarny pas';
    if (userRolesArray.includes('627565298794496030')) return 'Brązowy pas';
    if (userRolesArray.includes('630434499418914841')) return 'Zielony pas';
    if (userRolesArray.includes('630434372956192769')) return 'Żółty pas';
    if (userRolesArray.includes('630849554300010513')) return 'Niebieski pas';
    if (userRolesArray.includes('630851096772083722')) return 'Biały pas';
    if (userRolesArray.includes('627055978067525632')) return 'Członek CT';
    else return 'Gość';
  };

  useEffect(() => {
    const userRoles = user.meetings._json['https://codingtree.pl/oauth2/roles'];
    setUserRole(parseRoleIdToBeltColor(userRoles));
  }, [user]);

  return (
    <MainTemplate>
      <StyledWrapper>
        <StyledHeader>Konto</StyledHeader>
        <StyledContainer>
          <StyledUser>
            <StyledAvatar src={user.meetings.picture} alt="user avatar" />
            <StyledNickName>{user.meetings.nickname}</StyledNickName>
            <StyledBeltName>{userRole}</StyledBeltName>
          </StyledUser>
          <StyledEditSection>
            <StyledUserDataContainer>
              <StyledUserDataTitleContainer>
                <StyledUserDataTitle>
                  <StyledTitle>Imię i nazwisko:</StyledTitle>
                  <StyledUserDataDescription>Kazimierz Bagrowski</StyledUserDataDescription>
                </StyledUserDataTitle>
                <StyledUserDataTitle>
                  <StyledTitle>Wiek:</StyledTitle>
                  <StyledUserDataDescription>23 lat</StyledUserDataDescription>
                </StyledUserDataTitle>
                <StyledUserDataTitle>
                  <StyledTitle>Technologie:</StyledTitle>
                  <StyledUserDataDescription>
                    Node.js, Express, React, JavaScript, MongoDB, Mongoose (MERN stack)
                  </StyledUserDataDescription>
                </StyledUserDataTitle>
                <StyledUserDataTitle>
                  <StyledTitle>Opis:</StyledTitle>
                  <StyledUserDataDescription>
                    Jestem studentem, jak i starostą 3 roku informatyki i dobrze się czuję w środowisku JavaScript
                    zarówno po stronie klienta, jak i serwera. Brakuje mi nieco zdolności artystycznych, więc grafik ze
                    mnie żaden, lecz ekipa mówi że mam dobre pomysły i tym nadrabiam. Chcę tworzyć aplikacje, dzięki
                    którym codzienne czynności stają się prostsze i przyjemniejsze. Wolne chwile spędzam z naszą Panią
                    Grafik, kotem, rowerem oraz oczywiście poszerzam horyzonty czytając różnorakie artykuły techniczne.
                  </StyledUserDataDescription>
                </StyledUserDataTitle>
                <StyledUserDataTitle>
                  <StyledTitle>Github:</StyledTitle>
                  <StyledUserDataDescription>https://github.com/kazbag</StyledUserDataDescription>
                </StyledUserDataTitle>
                <StyledUserDataTitle>
                  <StyledTitle>LinkedIn:</StyledTitle>
                  <StyledUserDataDescription>
                    http://linkedin.com/in/kazimierz-bagrowski-0b1023173
                  </StyledUserDataDescription>
                </StyledUserDataTitle>
                <StyledUserDataTitle>
                  <StyledTitle>Facebook:</StyledTitle>
                  <StyledUserDataDescription>https://www.facebook.com/kazimierz.bagrowski/</StyledUserDataDescription>
                </StyledUserDataTitle>
              </StyledUserDataTitleContainer>
            </StyledUserDataContainer>
          </StyledEditSection>
          <Button standard primary>
            Edytuj
          </Button>
        </StyledContainer>
      </StyledWrapper>
    </MainTemplate>
  );
};

const mapStateToProps = ({user}) => ({
  user,
});

const StyledHeader = styled.h3`
  padding-bottom: 3rem;
  font-size: 2em;
`;

const StyledWrapper = styled.div`
  margin: 0 auto;
  display: flex;

  width: 80%;
  max-width: 1400px;
  flex-direction: column;
`;

const StyledContainer = styled.div`
  box-shadow: 0 0 10px ${variables.boxShadowColor};
  padding: 2.8rem 2.2rem;
  border-radius: 3rem;
  background-color: #ffffff;
  Button {
    margin-left: auto;
    margin-top: auto;
  }
`;

const StyledUser = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledAvatar = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
`;

const StyledNickName = styled.h3`
  font-size: 3.2rem;
`;

const StyledBeltName = styled.h6`
  font-size: 2rem;
`;

const StyledEditSection = styled.div`
  padding: 2rem;
  width: 70%;
  display: flex;
  flex-direction: row;
`;

const StyledUserData = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledUserDataContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledUserDataTitleContainer = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
`;

const StyledUserDataTitle = styled.h3`
  font-size: 1.6rem;
  display: flex;
  margin-bottom: 1rem;
`;

const StyledUserDataDescription = styled.span`
  width: 100%;
  font-weight: 300;
`;

const StyledTitle = styled.h6`
  width: 20rem;
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 700;
`;

export default connect(mapStateToProps)(AccountPage);
