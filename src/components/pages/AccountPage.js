import React, {useState} from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import {useEffect} from 'react';
import {withRouter} from 'react-router-dom';

const AccountPage = ({history, location}) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`${process.env.REACT_APP_PREFIX}/user`)
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.table(user);
  const logout = () => {
    window.location.href = `${process.env.REACT_APP_API}/logout`;
  };
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
        {/* <img style={{width: '150px', height: '150px', borderRadius: '50%'}} src={user.picture} /> */}
        <button style={{display: 'block', width: '150px', marginTop: '24px'}} onClick={() => logout()}>
          Wyloguj się
        </button>
      </div>
    </MainTemplate>
  );
};

export default withRouter(AccountPage);
