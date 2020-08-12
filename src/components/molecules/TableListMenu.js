import React, {useContext} from 'react';
import {withRouter} from 'react-router';
import styled, {css} from 'styled-components';
import {routes} from 'routes';
import Icon from 'components/atoms/Icon';
import variables from 'settings/variables';
import Checkbox from 'components/atoms/Checkbox';
import {SelectedElementContext} from 'components/context/SelectedElementContext';

const StyledWrapper = styled.div`
  display: grid;
  border-top: 1px solid ${variables.tableBorderColor};
  border-bottom: 1px solid ${variables.tableBorderColor};
  background-color: ${variables.tableHeaderColor};
  color: ${variables.colorLink};
  font-weight: bold;
  @media only screen and (max-width: ${variables.bpTablet}) {
    font-size: 1.4rem;
  }
`;

const StyledTableHead = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: 1rem;
  white-space: nowrap;
  align-items: center;
  justify-self: ${({right}) => right && 'end'};

  grid-column: ${({columns}) => (columns ? `span ${columns}` : 'span 1')};

  @media only screen and (max-width: ${variables.bpTablet}) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    font-size: 1.2rem;
  }

  ${({noTablet}) =>
    noTablet &&
    css`
      @media only screen and (max-width: ${variables.bpTablet}) {
        display: none;
      }
    `}
  ${({noMobile}) =>
    noMobile &&
    css`
      @media only screen and (max-width: ${variables.bpLargeMobile}) {
        display: none;
      }
    `}
`;

const StyledTableRow = styled.div`
  display: grid;
  grid-template-columns: 2rem minmax(2rem, 3rem);
  grid-auto-columns: minmax(1rem, 1fr);
  grid-auto-flow: column;
  column-gap: 2rem;
  grid-template-rows: 5rem;
  align-items: center;
  padding: 0 1rem;

  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    column-gap: 1rem;
    grid-template-columns: 2rem minmax(1rem, 2rem);

    ${StyledTableHead}:not(:first-child) ${Icon} {
      display: none;
    }
  }

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
        <StyledTableHead columns={2}>
          Data <Icon className="fas fa-sort"></Icon>
        </StyledTableHead>
        <StyledTableHead columns={3}>
          Temat spotkania <Icon className="fas fa-sort"></Icon>
        </StyledTableHead>
        <StyledTableHead noTablet columns={2} right>
          Czas trwania <Icon className="fas fa-sort"></Icon>
        </StyledTableHead>
        <StyledTableHead noMobile columns={2} right>
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
      <StyledTableHead columns={5}>Temat spotkania</StyledTableHead>
      <StyledTableHead noTablet columns={2} right>
        Kategoria <Icon className="fas fa-sort"></Icon>
      </StyledTableHead>
      <StyledTableHead noTablet columns={2}>
        Inicjator <Icon className="fas fa-sort"></Icon>
      </StyledTableHead>
      <StyledTableHead right>
        Ocena <Icon className="fas fa-sort"></Icon>
      </StyledTableHead>
      <StyledTableHead noMobile columns={2} right>
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
      <StyledTableHead columns={3}>
        Data <Icon className="fas fa-sort"></Icon>
      </StyledTableHead>
      <StyledTableHead columns={5}>
        Temat spotkania <Icon className="fas fa-sort"></Icon>
      </StyledTableHead>
      <StyledTableHead columns={3} noTablet>
        Prowadzący <Icon className="fas fa-sort"></Icon>
      </StyledTableHead>
      <StyledTableHead columns={3} right noMobile>
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
