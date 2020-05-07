import React, {useState} from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import {useEffect} from 'react';
import {withRouter} from 'react-router-dom';

const AccountPage = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/user`, {credentials: 'include'})
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.table(user);

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
        <img style={{width: '150px', height: '150px', borderRadius: '50%'}} src={user.picture} />
      </div>
    </MainTemplate>
  );
};

export default withRouter(AccountPage);
