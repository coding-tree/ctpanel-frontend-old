import React, {lazy} from 'react';
import styled from 'styled-components';
import variables from 'settings/variables';
import LastMeetHeader from 'components/molecules/LastMeetHeader';

const Text = lazy(() => import('components/atoms/Text'));
const DownloadButton = lazy(() => import('components/molecules/DownloadButton'));
const LastMeetLinks = lazy(() => import('components/molecules/LastMeetLinks'));

const LastMeetWrapper = styled.div`
  display: grid;
  grid-column-gap: 3.5rem;
  grid-row-gap: 7rem;
  grid-template-columns: repeat(6, 1fr);
  width: 80%;
  max-width: 1400px;
  padding: 7rem 5rem;
  background-color: ${variables.colorWhite};
  border-radius: 1rem;
  box-shadow: 0 0 10px ${variables.boxShadowColor};

  @media only screen and (max-width: ${variables.bpLargeDesktop}) {
    width: 90%;
  }

  @media only screen and (max-width: ${variables.bpTablet}) {
    grid-template-columns: 1fr;
    padding: 3rem;
    width: 96%;
    row-gap: 5rem;
  }

  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    padding: 2rem;
  }

  a {
    grid-column: 3/4;
    justify-self: end;
    align-self: end;
    @media only screen and (max-width: ${variables.bpTablet}) {
      grid-column: initial;
    }
  }

  > div:first-of-type {
    grid-column: 1/-1;
  }
  > div:last-of-type {
    grid-column: 1 / span 2;
    @media only screen and (max-width: ${variables.bpTablet}) {
      grid-column: 1/2;
    }
  }

  .lastmeet__description {
    grid-column: 1/7;
    @media only screen and (max-width: ${variables.bpTablet}) {
      grid-column: 1/2;
    }
  }
`;

const LastMeet = ({lastMeet}) => {
  const {leader, topic, date, description, usefulLinks, resourcesURL} = lastMeet;
  if (lastMeet) {
    return (
      <LastMeetWrapper>
        <LastMeetHeader leader={leader} topic={topic} date={date}></LastMeetHeader>
        <Text className="lastmeet__description">{description}</Text>
        <LastMeetLinks usefulLinks={usefulLinks}></LastMeetLinks>
        {resourcesURL && (
          <DownloadButton resourcesURL={resourcesURL} iconClassName="fas fa-download">
            Pobierz materiały
          </DownloadButton>
        )}
      </LastMeetWrapper>
    );
  } else {
    return (
      <LastMeetWrapper>
        <LastMeetHeader>Brak nadchodzących spotkań</LastMeetHeader>
      </LastMeetWrapper>
    );
  }
};

export default LastMeet;
