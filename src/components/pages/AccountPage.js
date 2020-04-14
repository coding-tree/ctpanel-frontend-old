import React, {useState} from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import {useEffect} from 'react';
import {withRouter} from 'react-router-dom';

const AccountPage = ({history, location}) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch('/user')
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);
  const logout = () => {
    window.location.href = 'http://localhost:3001/logout';
  };
  const {displayName, id, nickname, picture, role} = user;
  return (
    <MainTemplate>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          lineHeight: '2',
          marginLeft: '24px',
        }}
      >
        <h1>Twoje dane</h1>
        <h3>{displayName}</h3>
        <p>{role}</p>
        <img style={{width: '150px', height: '150px', borderRadius: '50%'}} src={picture} />
        <button style={{display: 'block', width: '150px', marginTop: '24px'}} onClick={() => logout()}>
          Wyloguj się
        </button>
      </div>
    </MainTemplate>
  );
};

export default withRouter(AccountPage);
