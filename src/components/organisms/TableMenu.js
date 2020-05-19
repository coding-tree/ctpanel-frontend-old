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
  <StyledTableActions>
    <StyledHeader>
      <StyledContainer>
        <StyledBox>
          <StyledIcon className="far fa-calendar"></StyledIcon>
          <StyledLabel uppercase>data</StyledLabel>
          <StyledSelect uppercase>
            <StyledOption>OSTATNI TYDZIEŃ</StyledOption>
            <StyledOption>2</StyledOption>
            <StyledOption>3</StyledOption>
          </StyledSelect>
        </StyledBox>
        <StyledBox>
          <StyledIcon className="fas fa-list-alt"></StyledIcon>
          <StyledLabel uppercase>kategoria</StyledLabel>
          <StyledSelect uppercase>
            <StyledOption>kategoria</StyledOption>
            <StyledOption>2</StyledOption>
            <StyledOption>3</StyledOption>
          </StyledSelect>
        </StyledBox>
      </StyledContainer>
      <StyledBox>
        <StyledInput placeholder="Wyszukaj" />
      </StyledBox>
    </StyledHeader>
  </StyledTableActions>
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

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  > div:last-child {
    flex: 0 0 36rem;
  }
`;
const StyledContainer = styled.div`
  flex: 0 0 45%;
  justify-content: space-between;
`;
const StyledBox = styled.div`
  display: flex;
  align-items: center;
`;
const StyledLabel = styled.label`
  color: #9d9ea3;
  font-size: 1.6rem;
  text-transform: ${({uppercase}) => uppercase && 'uppercase'};
  padding-right: 2rem;
`;
const StyledIcon = styled.i`
  font-size: 1.6rem;
  color: #9d9ea3;
  padding-right: 1rem;
`;
const StyledSelect = styled.select`
  text-transform: ${({uppercase}) => uppercase && 'uppercase'};
  border: none;
  font-size: 1.6rem;
  font-family: inherit;
`;
const StyledOption = styled.option``;
const StyledInput = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #9d9ea3;
  padding: 15px 30px;
  border-radius: 4px;
  &::placeholder {
    color: #9d9ea3;
  }
`;
