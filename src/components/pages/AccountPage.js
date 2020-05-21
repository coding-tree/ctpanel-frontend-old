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
      <StyledContainer>
        <StyledUser>
          <StyledAvatar src={user.meetings.picture} alt="user avatar" />
          <StyledNickName>{user.meetings.nickname}</StyledNickName>
          <StyledBeltName>{userRole}</StyledBeltName>
        </StyledUser>
        <StyledEditSection>
          <StyledTextArea placeholder="Wpisz swój opis"></StyledTextArea>
          <Button standard>Zapisz opis</Button>
        </StyledEditSection>
      </StyledContainer>
    </MainTemplate>
  );
};

const mapStateToProps = ({user}) => ({
  user,
});

const StyledContainer = styled.div`
  background-color: #ffffff;
  border-radius: 3rem;
  padding: 2.8rem 2.2rem;
  margin: 7rem;
`;

const StyledUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  flex-direction: column;
`;
const StyledEditSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledAvatar = styled.img`
  height: 12rem;
  width: 12rem;
  border-radius: 50%;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
`;

const StyledNickName = styled.h3`
  font-size: 3.2rem;
`;

const StyledBeltName = styled.h6`
  font-size: 2rem;
`;

const StyledTextArea = styled.textarea`
  font-family: inherit;
  font-size: 1.6rem;
  border-radius: 4px;
  border: 1px solid ${variables.borderColor};
  padding: 12px;
  margin-bottom: 2.8rem;
  height: 20rem;
  color: ${variables.colorFont};
  resize: none;
  &::placeholder {
    color: ${variables.colorLink};
  }
`;

export default connect(mapStateToProps)(AccountPage);
