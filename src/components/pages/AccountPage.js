import React, {useEffect, useState} from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import variables from 'settings/variables';
import {PrimaryButton} from 'components/atoms/Button';
import axios from 'axios';
import Header from 'components/atoms/Header';
import LogoutButton from 'components/molecules/LogoutButton';

const AccountPage = () => {
  const {pending, meetings, error} = useSelector((state) => state.user);
  const [userRole, setUserRole] = useState('Gość');
  const [userCredentials, setUserCredentials] = useState(undefined);

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

  console.log(meetings.nickname);

  useEffect(() => {
    const userRoles = meetings._json['https://codingtree.pl/oauth2/roles'];
    setUserRole(parseRoleIdToBeltColor(userRoles));
  }, [meetings]);

  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER_URL}/user/${meetings.nickname}`;
    axios
      .get(url)
      .then((res) => setUserCredentials(res.data))
      .catch((err) => console.log(err));
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
                <StyledButtonContainer>
                  <PrimaryButton>Edytuj</PrimaryButton>
                  <LogoutButton account>Wyloguj</LogoutButton>
                </StyledButtonContainer>
              </StyledUserDataTitleContainer>
            </StyledUserDataContainer>
          </StyledContainer>
        </StyledWrapper>
      </MainTemplate>
    );
  } else {
    return <div>loading...</div>;
  }
};

export default AccountPage;

const StyledWrapper = styled.div`
  grid-area: body;
  margin: 0 auto;
  display: flex;
  width: 80%;
  max-width: 1400px;
  flex-direction: column;
  @media only screen and (max-width: ${variables.bpLargeDesktop}) {
    width: 95%;
  }

  @media only screen and (max-width: ${variables.bpTablet}) {
    padding-bottom: 8rem;
  }

  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    width: 100%;
    padding-bottom: 15rem;
  }
`;

const StyledContainer = styled.div`
  box-shadow: 0 0 10px ${variables.boxShadowColor};
  padding: 5rem;
  border-radius: 3rem;
  background-color: ${variables.colorWhite};

  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 10rem;

  @media only screen and (max-width: ${variables.bpTablet}) {
    gap: 3rem;
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    padding: 3rem;
    border-radius: 0;
  }
`;

const StyledUser = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledAvatar = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
`;

const StyledNickName = styled.h3`
  font-size: 3.2rem;
  @media only screen and (max-width: ${variables.bpMobile}) {
    font-size: 2rem;
  }
`;

const StyledBeltName = styled.span`
  font-size: 2rem;
  @media only screen and (max-width: ${variables.bpMobile}) {
    font-size: 1.4rem;
  }
`;

const StyledUserDataContainer = styled.div``;

const StyledUserDataTitleContainer = styled.div`
  display: grid;
  gap: 2rem;
  width: 100%;
`;

const StyledUserDataTitle = styled.h3`
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  gap: 1rem;
  font-size: 1.6rem;

  @media only screen and (max-width: ${variables.bpTablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  @media only screen and (max-width: ${variables.bpMobile}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const StyledUserDataDescription = styled.span`
  width: 100%;
  font-weight: 300;
`;

const StyledTitle = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
`;

const StyledButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  @media only screen and (max-width: ${variables.bpTablet}) {
    > button {
      width: 100%;
    }
  }
  @media only screen and (max-width: ${variables.bpMobile}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
