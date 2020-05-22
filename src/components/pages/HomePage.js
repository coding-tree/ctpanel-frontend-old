import React, {useState, useEffect} from 'react';
import LastMeet from 'components/organisms/LastMeet';
import {getLastMeet} from 'api';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  justify-content: center;
`;

const Home = () => {
  const [lastMeet, setLastMeet] = useState({});

  useEffect(() => {
    getLastMeet().then((data) => setLastMeet(data));
  }, []);

  return (
    <HomeWrapper>
      <LastMeet lastMeet={lastMeet}></LastMeet>
    </HomeWrapper>
  );
};

export default Home;
