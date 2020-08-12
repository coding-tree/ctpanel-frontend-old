import React, {useState, useEffect} from 'react';
import LastMeet from 'components/organisms/LastMeet';
import {getLastXMeets} from 'api';
import styled from 'styled-components';
import variables from 'settings/variables';

const HomeWrapper = styled.div`
  grid-area: body;
  align-items: center;
  justify-items: center;
  display: grid;
  row-gap: 3rem;
  padding-bottom: 10rem;

  @media only screen and (max-width: ${variables.bpLargeDesktop}) {
    padding-bottom: 5rem;
  }
  @media only screen and (max-width: ${variables.bpTablet}) {
    padding-bottom: 13rem;
  }

  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    padding-bottom: 12rem;
    row-gap: 1rem;
  }
`;

const Home = () => {
  const [lastMeets, setLastMeets] = useState([]);

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
