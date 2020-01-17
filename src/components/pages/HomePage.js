import React, { useState, useEffect } from 'react';
import LastMeet from 'components/organisms/LastMeet';
import { getLastMeet } from 'api';

import styled from 'styled-components';

const HomeWrapper = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const [lastMeet, setLastMeet] = useState(null);

  useEffect(() => {
    getLastMeet()
      .then(resp => resp.json())
      .then(data => setLastMeet(data));
  }, []);

  return <HomeWrapper>{lastMeet && <LastMeet lastMeet={lastMeet}></LastMeet>}</HomeWrapper>;
};

export default Home;
