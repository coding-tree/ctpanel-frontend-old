import React, {useState} from 'react';
import {withRouter} from 'react-router';
import styled, {css} from 'styled-components';
import {routes} from 'routes';
import Checkbox from 'components/atoms/Checkbox';
import variables from 'settings/variables';
import StyledDate from 'components/atoms/StyledDate';
import {PrimaryButton, CancelButton} from 'components/atoms/Button';

const StyledRow = styled.tr`
  align-items: center;
  height: 50px;
  padding: 0 10px;
  border-bottom: 1px solid ${variables.tableBorderColor};
  background-color: ${({isSelected}) => isSelected && variables.tableHeaderColor};
  transition: 0.15s ease-in-out;
  &:hover {
    background-color: ${variables.tableHeaderColor};
    cursor: pointer;
    color: ${variables.colorMain};
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

const SchedulesTableElement = ({meetingData, isSelected, setSelection, index}) => (
  <StyledRow isSelected={isSelected}>
    <StyledTableData>
      <Checkbox
        type="checkbox"
        isSelected={isSelected}
        setSelection={setSelection}
        id={meetingData._id}
        onClick={() => console.log(meetingData._id)}
      ></Checkbox>
    </StyledTableData>
    <StyledTableData mainColor>#{index}</StyledTableData>
    <StyledTableData>
      <StyledDate format="DD MMMM YYYY" date={meetingData.date}></StyledDate>
    </StyledTableData>
    <StyledTableData>{meetingData.topic}</StyledTableData>
    <StyledTableData right>{meetingData.duration}</StyledTableData>
    <StyledTableData right>{meetingData.leader}</StyledTableData>
  </StyledRow>
);

const TopicDataBaseTableElement = ({meetingData, isSelected, setSelection, index}) => (
  <StyledRow isSelected={isSelected}>
    <StyledTableData>
      <Checkbox type="checkbox" isSelected={isSelected} setSelection={setSelection}></Checkbox>
    </StyledTableData>
    <StyledTableData mainColor>#{index}</StyledTableData>
    <StyledTableData>{meetingData.topic}</StyledTableData>
    <StyledTableData>Kategoria</StyledTableData>
    <StyledTableData>{meetingData.userAdded}</StyledTableData>
    <StyledTableData>{meetingData.votes}</StyledTableData>
    <StyledTableData buttonsTableData right>
      <PrimaryButton>+</PrimaryButton>
      <CancelButton>-</CancelButton>
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

const TableElement = ({location, meetingData, index}) => {
  const [isSelected, setSelection] = useState(false);

  switch (location.pathname) {
    case routes.timetable:
      return (
        <SchedulesTableElement
          index={index}
          meetingData={meetingData}
          isSelected={isSelected}
          setSelection={setSelection}
        />
      );
    case routes.topicDatabase:
      return (
        <TopicDataBaseTableElement
          index={index}
          meetingData={meetingData}
          isSelected={isSelected}
          setSelection={setSelection}
        />
      );
    case routes.history:
      return (
        <MeetingHistoryTableElement
          index={index}
          meetingData={meetingData}
          isSelected={isSelected}
          setSelection={setSelection}
        />
      );
    default:
      return console.log('something went wrong');
  }
};

export default withRouter(TableElement);
