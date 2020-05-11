import React, {useState} from 'react';
import {withRouter} from 'react-router';
import styled, {css} from 'styled-components';
import {routes} from 'routes';
import Checkbox from 'components/atoms/Checkbox';
import variables from 'settings/variables';
import StyledDate from 'components/atoms/StyledDate';
import Button from 'components/atoms/Button/Button';

const StyledRow = styled.tr`
  align-items: center;
  height: 50px;
  padding: 0 10px;
  border-bottom: 1px solid ${variables.tableBorderColor};
  background-color: ${({isSelected}) => isSelected && variables.tableHeaderColor};

  &:hover {
    background-color: ${variables.tableHeaderColor};
  }
`;

const StyledTableData = styled.td`
  border: 1px solid;
  padding: 1rem 3rem;
  border: none;
  white-space: nowrap;

  &:first-child {
    padding: 0 0 0 2rem;
  }
  &:nth-child(4n) {
    white-space: initial;
  }

  text-align: ${({right}) => right && 'right'};
  color: ${({mainColor}) => mainColor && variables.colorLink};

  ${({buttonsTableData}) =>
    buttonsTableData &&
    css`
      display: flex;
      justify-content: space-around;
    `}
`;

const SchedulesTableElement = ({meetingData, isSelected, setSelection}) => (
  <StyledRow isSelected={isSelected}>
    <StyledTableData>
      <Checkbox type="checkbox" isSelected={isSelected} setSelection={setSelection}></Checkbox>
    </StyledTableData>
    <StyledTableData mainColor>#{meetingData.id}</StyledTableData>
    <StyledTableData>
      <StyledDate format="DD MMMM YYYY" date={meetingData.date}></StyledDate>
    </StyledTableData>
    <StyledTableData>{meetingData.topic}</StyledTableData>
    <StyledTableData right>{meetingData.duration}</StyledTableData>
    <StyledTableData right>{meetingData.leader}</StyledTableData>
  </StyledRow>
);

const TopicDataBaseTableElement = ({meetingData, isSelected, setSelection}) => (
  <StyledRow isSelected={isSelected}>
    <StyledTableData>
      <Checkbox type="checkbox" isSelected={isSelected} setSelection={setSelection}></Checkbox>
    </StyledTableData>
    <StyledTableData mainColor>#{meetingData.id}</StyledTableData>
    <StyledTableData>{meetingData.topic}</StyledTableData>
    <StyledTableData>Kategoria</StyledTableData>
    <StyledTableData>{meetingData.userAdded}</StyledTableData>
    <StyledTableData>{meetingData.votes}</StyledTableData>
    <StyledTableData buttonsTableData>
      <Button meetVote meetVoteUp>
        +
      </Button>
      <Button meetVote meetVoteDown>
        -
      </Button>
    </StyledTableData>
  </StyledRow>
);

const MeetingHistoryTableElement = () => (
  <StyledRow>
    <StyledTableData></StyledTableData>
    <StyledTableData></StyledTableData>
    <StyledTableData></StyledTableData>
    <StyledTableData></StyledTableData>
    <StyledTableData></StyledTableData>
    <StyledTableData></StyledTableData>
  </StyledRow>
);

const TableElement = ({location, meetingData}) => {
  const [isSelected, setSelection] = useState(false);
  switch (location.pathname) {
    case routes.timetable:
      return <SchedulesTableElement meetingData={meetingData} isSelected={isSelected} setSelection={setSelection} />;
    case routes.topicDatabase:
      return (
        <TopicDataBaseTableElement meetingData={meetingData} isSelected={isSelected} setSelection={setSelection} />
      );
    case routes.history:
      return <MeetingHistoryTableElement />;
    default:
      return console.log('something went wrong');
  }
};

export default withRouter(TableElement);
