import React, {useEffect, useState} from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import styled from 'styled-components';
import {connect} from 'react-redux';

const AccountPage = ({user}) => {
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

  const [userRole, setUserRole] = useState('Gość');
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
  flex-direction: column;
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

export default connect(mapStateToProps)(AccountPage);
