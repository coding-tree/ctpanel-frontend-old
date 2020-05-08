import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import {routes} from 'routes';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input';
import Icon from 'components/atoms/Icon';

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledTableActions = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 27px 13px;
`;

const SchedulesTableMenu = () => (
  <StyledTableActions>
      <Button width="144px" height="42px" primary uppercase>
          Dodaj <Icon fontSize="1.4rem" padding="0 0 0 .5rem" className="fas fa-plus"></Icon>
      </Button>
    <Input></Input>
  </StyledTableActions>
);

const TopicDataBaseTableMenu = () => (
  <button>DODAJ +</button>
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
  switch(location.pathname){
    case routes.timetable: return <SchedulesTableMenu />
    case routes.topicDatabase: return <TopicDataBaseTableMenu />
    case routes.history: return <MeetingHistoryTableMenu />
  }
};

export default withRouter(TableMenu);