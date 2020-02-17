import React from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import {useAuth0} from 'react-auth0-spa';

const AccountPage = () => {
  const {user, loading, logout} = useAuth0();
  return (
    <MainTemplate>
      <h1>Twoje dane</h1>
      {loading && <div>Ładowanie...</div>}
      {!loading && user && (
        <div style={{flexDirection: 'column'}}>
          <h1>{user.name}</h1>
          <h2>{user.nickname}</h2>
          <h2>{user.email}</h2>
          <img style={{width: '100px', height: '100px'}} src={user.picture} alt="" />
          <div>
            <button onClick={() => logout()}>Wyloguj się</button>
          </div>
        </div>
      )}
    </MainTemplate>
  );
};

export default AccountPage;
