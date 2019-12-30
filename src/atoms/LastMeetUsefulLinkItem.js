import React from 'react';
import {UsefulLinkWrapper} from 'styledComponents/LastMeet';

const LastMeetUsefulLinkItem = ({children, href}) => {
  return (
    <UsefulLinkWrapper target="_blank" tag="a" href={href}>
      {children}
    </UsefulLinkWrapper>
  );
};

export default LastMeetUsefulLinkItem;
