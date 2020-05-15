import React, {useState} from 'react';
import {withRouter} from 'react-router';
import {routes} from 'routes';
import Button from 'components/atoms/Button/Button';
import Icon from 'components/atoms/Icon';
import Contact from 'components/pages/Formik';
import {StyledTableActions} from 'styledComponents/ModalStyled/';

const SchedulesTableMenu = () => {
  return (
    <StyledTableActions>
      <Contact />
    </StyledTableActions>
  );
};

const TopicDataBaseTableMenu = () => <button>DODAJ +</button>;

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
