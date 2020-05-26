import React, {useContext} from 'react';
import {withRouter} from 'react-router';
import {routes} from 'routes';

import Topic from 'components/organisms/TopicModal';
import styled from 'styled-components';
import {SelectedElementContext} from 'components/context/SelectedElementContext';
import {AddModal, DeleteModal, EditModal} from 'components/molecules/Modal';
import AddMeeting from 'components/organisms/AddMeeting';
import EditMeeting from 'components/organisms/EditMeeting';
import variables from 'settings/variables';
import {DeleteMeeting} from 'components/molecules/MeetingForms';

const SchedulesTableMenu = () => {
  const [selectedElement] = useContext(SelectedElementContext);
  const leaders = ['Damian Ospara', 'Józef Rzadkosz', 'Jakub Wojtoń', 'Kazimierz Bagrowski'];

  return (
    <StyledTableActions>
      <AddModal title="Dodaj" icon="fas fa-plus" modalTitle="Zaplanuj nowe spotkanie">
        <AddMeeting column={2} leaders={leaders} destination="meetings"></AddMeeting>
      </AddModal>
      {selectedElement.length === 1 && (
        <EditModal title="Edytuj" icon="fas fa-pen" modalTitle="Edytuj spotkanie">
          <EditMeeting column={2} leaders={leaders} selectedElement={selectedElement} destination="meetings"></EditMeeting>
        </EditModal>
      )}
      {selectedElement.length > 0 && (
        <DeleteModal title="Usuń" icon="fas fa-minus" modalTitle="Usuń spotkanie">
          <DeleteMeeting selectedElement={selectedElement} destination="meetings"></DeleteMeeting>
        </DeleteModal>
      )}
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
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-column-gap: 2rem;
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
  color: ${variables.colorLink};
  font-size: 1.6rem;
  text-transform: ${({uppercase}) => uppercase && 'uppercase'};
  padding-right: 2rem;
`;
const StyledIcon = styled.i`
  font-size: 1.6rem;
  color: ${variables.colorLink};
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
  font-family: inherit;
  font-size: 1.4rem;
  display: block;
  width: 100%;
  border: 1px solid ${variables.colorLink};
  padding: 15px 30px;
  border-radius: 4px;
  &::placeholder {
    color: ${variables.colorLink};
  }
`;
