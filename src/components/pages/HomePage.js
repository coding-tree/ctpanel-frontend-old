import React, {useState, useEffect} from 'react';
import LastMeet from 'components/organisms/LastMeet';
import {getLastMeet} from 'api';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

const HomeWrapper = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Home = ({history, location}) => {
  useEffect(() => {
    fetch('/user')
      .then(resp => resp.json())
      .then(data => console.log(data))
      .catch(err => {
        history.push('/login');
        console.log(err);
      });
  });
  const [lastMeet, setLastMeet] = useState(null);

  useEffect(() => {
    getLastMeet().then(data => setLastMeet(data));
  }, []);

  return <HomeWrapper>{lastMeet && <LastMeet lastMeet={lastMeet}></LastMeet>}</HomeWrapper>;
};

export default withRouter(Home);
