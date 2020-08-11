import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router';
import {routes} from 'routes';

import {SelectedElementContext} from 'components/context/SelectedElementContext';
import {AddModal, DeleteModal, EditModal, JoinModal} from 'components/molecules/Modal';
import AddMeeting from 'components/organisms/AddMeeting';
import EditMeeting from 'components/organisms/EditMeeting';
import DeleteMeeting from 'components/organisms/DeleteMeeting';
import variables from 'settings/variables';
import AddTopic from './AddTopic';
import EditTopic from './EditTopic';
import DeleteTopic from './DeleteTopic';
import axios from 'axios';
import JoinMeeting from './JoinMeeting';

const SchedulesTableMenu = () => {
  const [selectedElement] = useContext(SelectedElementContext);
  const leaders = ['Damian Ospara', 'Józef Rzadkosz', 'Jakub Wojtoń', 'Kazimierz Bagrowski'];
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/topics`)
      .then((response) => {
        setTopics(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const topicNames = topics.map((topic) => topic.topic);

  return (
    <StyledTableActions>
      <AddModal title="Dodaj" icon="fas fa-plus" modalTitle="Zaplanuj nowe spotkanie">
        <AddMeeting column={2} leaders={leaders} topicNames={topicNames} destination="meetings"></AddMeeting>
      </AddModal>
      {selectedElement.length > 0 && (
        <DeleteModal title="Usuń" icon="fas fa-minus" modalTitle="Usuń spotkanie">
          <DeleteMeeting selectedElement={selectedElement} destination="meetings"></DeleteMeeting>
        </DeleteModal>
      )}
      {selectedElement.length === 1 && (
        <>
          <EditModal title="Edytuj" icon="fas fa-pen" modalTitle="Edytuj spotkanie">
            <EditMeeting column={2} leaders={leaders} topicNames={topicNames} selectedElement={selectedElement} destination="meetings"></EditMeeting>
          </EditModal>
          <JoinModal title="Dołącz" modalTitle="Dołącz do spotkania">
            <JoinMeeting href={selectedElement[0].meetingHref}></JoinMeeting>
          </JoinModal>
        </>
      )}
      {/* TODO: Dni wstecz */}
      {/* <StyledNumberInput
        type="text"
        placeholder="ile dni wstecz wyświetlić?"
        onChange={e => {
          if (e.target.value > 0) {
            console.log(e.target.value);
          } else {
            e.target.value = '';
          }
        }}
      /> */}
      {/* TODO: Implement Search */}
      {/* <StyledInput placeholder="Wyszukaj" /> */}
    </StyledTableActions>
  );
};

const TopicDataBaseTableMenu = () => {
  const [selectedElement] = useContext(SelectedElementContext);

  return (
    <StyledTableActions>
      <AddModal title="Dodaj" icon="fas fa-plus" modalTitle="Dodaj nowy temat">
        <AddTopic></AddTopic>
      </AddModal>
      {selectedElement.length === 1 && (
        <EditModal title="Edytuj" icon="fas fa-pen" modalTitle="Edytuj temat">
          <EditTopic selectedElement={selectedElement}></EditTopic>
        </EditModal>
      )}
      {selectedElement.length > 0 && (
        <DeleteModal title="Usuń" icon="fas fa-minus" modalTitle="Usuń temat">
          <DeleteTopic selectedElement={selectedElement} destination="topics"></DeleteTopic>
        </DeleteModal>
      )}
    </StyledTableActions>
  );
};

const MeetingHistoryTableMenu = () => (
  <StyledTableActions>
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
    {/* TODO: Implement Search */}
    {/* <StyledInput placeholder="Wyszukaj" /> */}
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
  grid-template-columns: repeat(4, max-content) 1fr max-content;
  grid-column-gap: 2rem;
  align-items: center;
  padding: 0 30px 27px 13px;

  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 1rem;
    > button {
      width: 100%;
    }
  }
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

const StyledNumberInput = styled.input`
  padding: 1.5rem 3rem;
  width: auto;
  border: 1px solid ${variables.borderColor};
  grid-column-start: 5;
  margin-left: auto;
`;

// TODO: Enable Input
// const StyledInput = styled.input`
//   font-family: inherit;
//   font-size: 1.4rem;
//   display: block;
//   width: 100%;
//   border: 1px solid ${variables.colorLink};
//   padding: 15px 30px;
//   width: 36rem;
//   border-radius: 4px;
//   justify-self: end;
//   grid-column: 5/-1;

//   &::placeholder {
//     color: ${variables.colorLink};
//   }
// `;
