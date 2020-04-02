import React, {useState} from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import {useEffect} from 'react';
import {withRouter} from 'react-router-dom';

const AccountPage = ({history, location}) => {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    fetch('/user')
      .then(resp => resp.json())
      .then(data => setUser(JSON.stringify(data)))
      .catch(err => {
        history.push('/login');
        console.log(err);
      });
  });

  const logout = () => {
    window.location.href = 'http://localhost:3001/logout';
  };

  return (
    <MainTemplate>
      <h1>Twoje dane</h1>
      <h3>{user}</h3>
      <button onClick={() => logout()}>Wyloguj się</button>
    </MainTemplate>
  );
};

export default withRouter(AccountPage);
