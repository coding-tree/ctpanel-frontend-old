import axios from 'axios';
import Title from 'components/atoms/Title';
import NextMeetInfo from 'components/molecules/NextMeetInfo';
import React, {useEffect, useState} from 'react';
import variables from 'settings/variables';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content minmax(min-content, max-content);
  column-gap: 3rem;
  grid-area: header;
  width: 100%;
  justify-content: space-between;
  padding: 5rem 10%;
  background-color: ${variables.colorWhite};

  @media only screen and (max-width: ${variables.bpLargeDesktop}) {
    padding: 5rem 5%;
  }
  @media only screen and (max-width: ${variables.bpTablet}) {
    grid-template-columns: 1fr;
    margin-bottom: 2rem;
    padding: 2rem 5%;
    justify-items: center;
    row-gap: 0.5rem;
    div {
      text-align: center;
      justify-content: center;
    }
  }

  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    row-gap: 3rem;
    div {
      font-size: 1.4rem;
    }
  }
`;

const NextMeet = () => {
  const [upcoming, setUpcoming] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/meetings/incoming`).then((resp) => setUpcoming(resp.data));
  }, []);

  return (
    <StyledWrapper>
      <Title important uppercase nobreak>
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
