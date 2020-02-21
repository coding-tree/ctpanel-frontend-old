import React from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import {useEffect} from 'react';

const AccountPage = () => {
  useEffect(() => {
    fetch('/user')
      .then(resp => resp.json())
      .then(data => console.log(data));
  });
  const logout = () => {
    window.location.href = 'http://localhost:3001/logout';
  };

  return (
    <MainTemplate>
      <h1>Twoje dane</h1>
      <button onClick={() => logout()}>Wyloguj się</button>
    </MainTemplate>
  );
};

export default AccountPage;
