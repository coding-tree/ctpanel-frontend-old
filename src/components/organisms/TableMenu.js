import React, {useState} from 'react';
import {withRouter} from 'react-router';
import {routes} from 'routes';
import Meeting from 'components/pages/Meeting';
import Topic from 'components/pages/Topic';
import styled from 'styled-components';

const SchedulesTableMenu = () => {
  return (
    <StyledTableActions>
      <Meeting />
    </StyledTableActions>
  );
};

const TopicDataBaseTableMenu = () => (
  <StyledTableActions>
    <Topic />
  </StyledTableActions>
);

const MeetingHistoryTableMenu = () => (
  <>
    <span>data</span>
    <select>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <select>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <input type="text" />
  </>
);

const TableMenu = ({location}) => {
  switch (location.pathname) {
    case routes.timetable:
      return <SchedulesTableMenu />;
    case routes.topicDatabase:
      return <TopicDataBaseTableMenu />;
    case routes.history:
      return <MeetingHistoryTableMenu />;
    default:
      return console.log('something went wrong');
  }
};

export default withRouter(TableMenu);

// Styles

const StyledTableActions = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 27px 13px;
`;
