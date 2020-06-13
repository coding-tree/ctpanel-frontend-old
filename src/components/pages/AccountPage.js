import React, {useEffect, useState} from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import styled from 'styled-components';
import {connect} from 'react-redux';
import variables from 'settings/variables';
import {PrimaryButton} from 'components/atoms/Button';
import axios from 'axios';
import Header from 'components/atoms/Header';

const AccountPage = ({userReducer}) => {
  const {pending, meetings, error} = userReducer;
  const [userRole, setUserRole] = useState('Gość');
  const [userCredentials, setUserCredentials] = useState(undefined);

  const parseRoleIdToBeltColor = userRolesArray => {
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
    const userRoles = meetings._json['https://codingtree.pl/oauth2/roles'];
    setUserRole(parseRoleIdToBeltColor(userRoles));
  }, [meetings]);

  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER_URL}/user/${meetings.nickname}`;
    axios
      .get(url)
      .then(res => setUserCredentials(res.data))
      .catch(err => console.log(err));
  }, [meetings]);

  if (userCredentials) {
    return (
      <MainTemplate>
        <StyledWrapper>
          <Header tableTitle>Konto</Header>
          <StyledContainer>
            <StyledUser>
              <StyledAvatar src={meetings.picture} alt="user avatar" />
              <StyledNickName>{userCredentials.userNickName}</StyledNickName>
              <StyledBeltName>{userRole}</StyledBeltName>
            </StyledUser>
            <StyledEditSection>
              <StyledUserDataContainer>
                <StyledUserDataTitleContainer>
                  <StyledUserDataTitle>
                    <StyledTitle>Imię i nazwisko:</StyledTitle>
                    <StyledUserDataDescription>
                      {userCredentials.userFirstName} {userCredentials.userSecondName}
                    </StyledUserDataDescription>
                  </StyledUserDataTitle>
                  <StyledUserDataTitle>
                    <StyledTitle>Wiek:</StyledTitle>
                    <StyledUserDataDescription>{userCredentials.userAge} lat</StyledUserDataDescription>
                  </StyledUserDataTitle>
                  <StyledUserDataTitle>
                    <StyledTitle>Technologie:</StyledTitle>
                    <StyledUserDataDescription>{userCredentials.userTechnologies.join(', ')}</StyledUserDataDescription>
                  </StyledUserDataTitle>
                  <StyledUserDataTitle>
                    <StyledTitle>Opis:</StyledTitle>
                    <StyledUserDataDescription>{userCredentials.userDescription}</StyledUserDataDescription>
                  </StyledUserDataTitle>
                  {Object.entries(userCredentials.userSocials).map((el, index) => (
                    <StyledUserDataTitle key={index}>
                      <StyledTitle>{el[0]}</StyledTitle>
                      <StyledUserDataDescription>{el[1]}</StyledUserDataDescription>
                    </StyledUserDataTitle>
                  ))}
                </StyledUserDataTitleContainer>
              </StyledUserDataContainer>
            </StyledEditSection>
            <PrimaryButton>Edytuj</PrimaryButton>
          </StyledContainer>
        </StyledWrapper>
      </MainTemplate>
    );
  } else {
    return <div>loading...</div>;
  }
};

const mapStateToProps = ({userReducer}) => ({
  userReducer,
});

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
  background-color: ${variables.colorWhite};
  button {
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

const StyledBeltName = styled.span`
  font-size: 2rem;
`;

const StyledEditSection = styled.div`
  padding: 2rem;
  width: 70%;
  display: flex;
  flex-direction: row;
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

const StyledTitle = styled.span`
  width: 20rem;
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 700;
`;

export default connect(mapStateToProps)(AccountPage);
