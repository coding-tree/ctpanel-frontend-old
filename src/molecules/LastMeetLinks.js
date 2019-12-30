import React, {lazy} from 'react';
import {StyledWrapper, LinkWrapper} from 'styledComponents/LastMeet';

const LastMeetLinkTitle = lazy(() => import('atoms/LastMeetLinkTitle'));
const LastMeetLinkIndex = lazy(() => import('atoms/LastMeetLinkIndex'));
const LastMeetUsefulLinkItem = lazy(() => import('atoms/LastMeetUsefulLinkItem'));

const LastMeetLinks = ({usefulLinks}) => {
  return (
    <StyledWrapper>
      <LastMeetLinkTitle></LastMeetLinkTitle>
      {usefulLinks.map((el, index) => (
        <LinkWrapper key={el.id}>
          <LastMeetLinkIndex index={index}></LastMeetLinkIndex>
          <LastMeetUsefulLinkItem href={el.url}>{el.url}</LastMeetUsefulLinkItem>
        </LinkWrapper>
      ))}
    </StyledWrapper>
  );
};

export default LastMeetLinks;
