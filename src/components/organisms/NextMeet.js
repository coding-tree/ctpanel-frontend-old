import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import variables from 'settings/variables';

import Title from 'components/atoms/Title';
import NextMeetInfo from 'components/molecules/NextMeetInfo';
import axios from 'axios';

const StyledWrapper = styled.div`
  width: calc(100%);
  height: 113px;
  min-height: 113px;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
  background-color: ${variables.colorWhite};
  margin-bottom: 100px;
`;

const NextMeet = () => {
  const [upcoming, setUpcoming] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/meetings/incoming`).then(resp => setUpcoming(resp.data));
  }, []);

  return (
    <StyledWrapper>
      <Title important uppercase>
        Najbliższe spotkanie
      </Title>
      {upcoming ? (
        <NextMeetInfo date={upcoming.date} title={upcoming.topic}></NextMeetInfo>
      ) : (
        <Title important uppercase fontSize="1.6rem">
          Brak nadchodzących spotkań
        </Title>
      )}
    </StyledWrapper>
  );
};

export default NextMeet;
