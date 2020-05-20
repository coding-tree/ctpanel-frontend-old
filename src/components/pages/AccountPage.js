import React from 'react';
import MainTemplate from 'components/templates/MainTemplate';

import {connect} from 'react-redux';

const AccountPage = ({user}) => {
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
        <img style={{width: '150px', height: '150px', borderRadius: '50%'}} src={user.meetings.picture} alt="user avatar" />
      </div>
    </MainTemplate>
  );
};

const mapStateToProps = ({user}) => ({
  user,
});

export default connect(mapStateToProps)(AccountPage);
