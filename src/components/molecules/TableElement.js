import React, {useState, useContext} from 'react';
import {withRouter} from 'react-router';
import styled, {css} from 'styled-components';
import {routes} from 'routes';
import Checkbox from 'components/atoms/Checkbox';
import variables from 'settings/variables';
import StyledDate from 'components/atoms/StyledDate';
import {PrimaryButton, CancelButton} from 'components/atoms/Button';
import {SelectedElementContext} from 'components/context/SelectedElementContext';


const StyledRow = styled.tr`
  align-items: center;
  height: 50px;
  padding: 0 10px;
  border-bottom: 1px solid ${variables.tableBorderColor};
  background-color: ${({isSelected}) => isSelected && variables.tableHeaderColor};
  transition: 0.2s ease-in-out;
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
      button:last-child {
        margin-left: 0.6rem;
      }
    `}
`;

const SchedulesTableElement = ({meetingData, index, isSelected, toggleSelection}) => {
  return (
    <StyledRow onClick={() => toggleSelection(meetingData, isSelected)} isSelected={isSelected}>
      <StyledTableData>
        <Checkbox type="checkbox" isSelected={isSelected}></Checkbox>
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
};

const TopicDataBaseTableElement = ({meetingData, toggleSelection, isSelected, index}) => {
  return (
    <StyledRow onClick={() => toggleSelection(meetingData, isSelected)} isSelected={isSelected}>
      <StyledTableData>
        <Checkbox isSelected={isSelected} type="checkbox"></Checkbox>
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
};


const MeetingHistoryTableElement = ({meetingData, isSelected, setSelection, index}) => (
  <StyledRow isSelected={isSelected}>
    <StyledTableData>
      <Checkbox type="checkbox" isSelected={isSelected} setSelection={setSelection}></Checkbox>
    </StyledTableData>
    <StyledTableData mainColor>#{index}</StyledTableData>
    <StyledTableData>
      <StyledDate format="DD MMMM YYYY" date={meetingData.date}></StyledDate>
    </StyledTableData>
    <StyledTableData>{meetingData.topic}</StyledTableData>
    <StyledTableData>{meetingData.leader}</StyledTableData>
    <StyledTableData right>
      <PrimaryButton>Dodaj</PrimaryButton>
    </StyledTableData>
  </StyledRow>
);

const TableElement = ({location, meetingData, index}) => {
  const [selectedElement, toggleSelection] = useContext(SelectedElementContext);

  const isSelected = selectedElement && selectedElement.includes(meetingData);

  const handleSelection = (singleElem, selectedElem) => {
    return toggleSelection(prev => {
      if (selectedElem) {
        return prev.filter(elem => elem._id !== singleElem._id);
      }
      return [...prev, singleElem];
    });
    return '';
  };

  switch (location.pathname) {
    case routes.timetable:
      return <SchedulesTableElement isSelected={isSelected} toggleSelection={handleSelection} index={index} meetingData={meetingData} />;
    case routes.topicDatabase:
      return <TopicDataBaseTableElement isSelected={isSelected} toggleSelection={handleSelection} index={index} meetingData={meetingData} />;
    case routes.history:
      return <MeetingHistoryTableElement index={index} meetingData={meetingData} />;
    default:
      return console.log('something went wrong');
  }
};

export default withRouter(TableElement);
