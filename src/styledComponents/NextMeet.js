import styled from 'styled-components';
import variables from 'settings/variables';

export const StyledWrapper = styled.div`
  width: calc(100%);
  height: 113px;
  min-height: 113px;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
  background-color: ${variables.colorWhite};
`;

export const TitleWrapper = styled.div`
  color: ${variables.colorMain};
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const MeetWrapper = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.6rem;
`;

export const StyledMeetTitle = styled.span`
  color: ${variables.colorMain};
  padding-left: 0.5rem;
`;
