import React, {lazy} from 'react';
import styled from 'styled-components';
import variables from 'settings/variables';

const Text = lazy(() => import('atoms/Text'));
const DownloadButton = lazy(() => import('molecules/DownloadButton'));
const LastMeetHeader = lazy(() => import('molecules/LastMeetHeader'));
const LastMeetLinks = lazy(() => import('molecules/LastMeetLinks'));

const LastMeetWrapper = styled.div`
  position: relative;
  width: 80%;
  max-width: 1400px;
  padding: 7rem 5rem;
  background-color: ${variables.colorWhite};
  flex-direction: column;
  border-radius: 1rem;
`;

const LastMeet = ({lastMeet}) => {
  const {leader, topic, date, description, usefulLinks, resourcesURL} = lastMeet;

  return (
    <LastMeetWrapper>
      <LastMeetHeader leader={leader} topic={topic} date={date}></LastMeetHeader>
      <Text columnView margin="0 0 5rem 0">
        {description}
      </Text>
      <LastMeetLinks usefulLinks={usefulLinks}></LastMeetLinks>

      <DownloadButton resourcesURL={resourcesURL} iconClassName="fas fa-download">
        Pobierz materiały
      </DownloadButton>
    </LastMeetWrapper>
  );
};

export default LastMeet;
