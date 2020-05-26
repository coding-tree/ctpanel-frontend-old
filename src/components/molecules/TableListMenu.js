import React, {useContext} from 'react';
import {withRouter} from 'react-router';
import styled from 'styled-components';
import {routes} from 'routes';
import Icon from 'components/atoms/Icon';
import variables from 'settings/variables';
import Checkbox from 'components/atoms/Checkbox';
import {SelectedElementContext} from 'components/context/SelectedElementContext';

const StyledWrapper = styled.thead`
  align-items: center;
  height: 50px;
  padding: 0 10px;
  border-top: 1px solid #f3eef0;
  border-bottom: 1px solid #f3eef0;
  background-color: #fcfbfc;
  color: ${variables.colorLink};
`;

const StyledTableRow = styled.tr`
  height: 50px;
`;

const StyledTableHead = styled.th`
  text-align: left;
  padding: 0 3rem;
  min-width: 20px;
  white-space: nowrap;
  &:first-child {
    padding: 0 0 0 2rem;
  }
  text-align: ${({right}) => right && 'right'};
`;

const SchedulesTableListMenu = ({handleSelection, isSelected}) => {
  return (
    <StyledWrapper>
      <StyledTableRow>
        <StyledTableHead>
          <Checkbox onClick={handleSelection} isSelected={isSelected}></Checkbox>
        </StyledTableHead>
        <StyledTableHead>
          ID <Icon className="fas fa-sort"></Icon>
        </StyledTableHead>
        <StyledTableHead>
          Data <Icon className="fas fa-sort"></Icon>
        </StyledTableHead>
        <StyledTableHead>
          Temat spotkania <Icon className="fas fa-sort"></Icon>
        </StyledTableHead>
        <StyledTableHead right>
          Planowany czas trwania <Icon className="fas fa-sort"></Icon>
        </StyledTableHead>
        <StyledTableHead right>
          Prowadzący <Icon className="fas fa-sort"></Icon>
        </StyledTableHead>
      </StyledTableRow>
    </StyledWrapper>
  );
};

const TopicDataBaseTableListMenu = ({handleSelection, isSelected}) => (
  <StyledWrapper>
    <StyledTableRow>
      <StyledTableHead>
        <Checkbox onClick={handleSelection} isSelected={isSelected}></Checkbox>
      </StyledTableHead>
      <StyledTableHead>
        ID <Icon className="fas fa-sort"></Icon>
      </StyledTableHead>
      <StyledTableHead>Temat spotkania</StyledTableHead>
      <StyledTableHead>
        Kategoria <Icon className="fas fa-sort"></Icon>
      </StyledTableHead>
      <StyledTableHead>
        Inicjator <Icon className="fas fa-sort"></Icon>
      </StyledTableHead>
      <StyledTableHead right>
        Ocena <Icon className="fas fa-sort"></Icon>
      </StyledTableHead>
      <StyledTableHead right>
        Zagłosuj <Icon className="fas fa-sort"></Icon>
      </StyledTableHead>
    </StyledTableRow>
  </StyledWrapper>
);

const MeetingHistoryTableListMenu = ({handleSelection, isSelected}) => (
  <StyledWrapper>
    <StyledTableRow>
      <StyledTableHead>
        <Checkbox onClick={handleSelection} isSelected={isSelected}></Checkbox>
      </StyledTableHead>
      <StyledTableHead>
        ID <Icon className="fas fa-sort"></Icon>
      </StyledTableHead>
      <StyledTableHead>
        Data <Icon className="fas fa-sort"></Icon>
      </StyledTableHead>
      <StyledTableHead>
        Temat spotkania <Icon className="fas fa-sort"></Icon>
      </StyledTableHead>
      <StyledTableHead>
        Prowadzący <Icon className="fas fa-sort"></Icon>
      </StyledTableHead>
      <StyledTableHead right>
        Materiały <Icon className="fas fa-sort"></Icon>
      </StyledTableHead>
    </StyledTableRow>
  </StyledWrapper>
);

const TableListMenu = ({location, meetingsList}) => {
  const [selectedElement, setSelectedElement] = useContext(SelectedElementContext);

  const isSelected = meetingsList && selectedElement && meetingsList.length === selectedElement.length;

  const markAll = () => {
    if (selectedElement.length === 0) {
      setSelectedElement(meetingsList);
    } else {
      setSelectedElement([]);
    }
  };

  switch (location.pathname) {
    case routes.timetable:
      return <SchedulesTableListMenu handleSelection={markAll} isSelected={isSelected} meetingsList={meetingsList} />;
    case routes.topicDatabase:
      return <TopicDataBaseTableListMenu handleSelection={markAll} isSelected={isSelected} meetingsList={meetingsList} />;
    case routes.history:
      return <MeetingHistoryTableListMenu handleSelection={markAll} isSelected={isSelected} meetingsList={meetingsList} />;
    default:
      return console.log('something went wrong');
  }
};

export default withRouter(TableListMenu);
