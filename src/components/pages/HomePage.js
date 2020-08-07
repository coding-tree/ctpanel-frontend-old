import React, {useState, useEffect} from 'react';
import LastMeet from 'components/organisms/LastMeet';
import {getLastMeet, getLastXMeets} from 'api';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  grid-area: body;
  flex-direction: column;
  align-items: center;
  div {
    margin-bottom: 1.7rem;
  }
`;

const Home = () => {
  const [lastMeet, setLastMeet] = useState({});
  const [lastMeets, setLastMeets] = useState([]);

  useEffect(() => {
    getLastMeet().then((data) => setLastMeet(data));
  }, []);

  useEffect(() => {
    getLastXMeets(3).then((data) => setLastMeets(data));
  }, []);

  const meetings = lastMeets.map((item, index) => {
    return <LastMeet key={index} lastMeet={item}></LastMeet>;
  });

  if (meetings.length > 0) {
    return <HomeWrapper>{meetings}</HomeWrapper>;
  } else {
    return <div>loading...</div>;
  }
};

export default Home;
