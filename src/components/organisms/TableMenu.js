import axios from 'axios';
import {AddModal, DeleteModal, EditModal, JoinModal} from 'components/molecules/Modal';
import AddMeeting from 'components/organisms/AddMeeting';
import DeleteMeeting from 'components/organisms/DeleteMeeting';
import EditMeeting from 'components/organisms/EditMeeting';
import React, {useEffect, useState} from 'react';
import variables from 'settings/variables';
import styled, {css} from 'styled-components';
import AddTopic from './AddTopic';
import DeleteTopic from './DeleteTopic';
import EditTopic from './EditTopic';
import JoinMeeting from './JoinMeeting';

export const SchedulesTableMenu = () => {
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
      <DeleteModal title="Usuń" icon="fas fa-minus" modalTitle="Usuń spotkanie">
        <DeleteMeeting destination="meetings"></DeleteMeeting>
      </DeleteModal>
      )}
      <>
        <EditModal title="Edytuj" icon="fas fa-pen" modalTitle="Edytuj spotkanie">
          <EditMeeting column={2} leaders={leaders} topicNames={topicNames} destination="meetings"></EditMeeting>
        </EditModal>
        <JoinModal title="Dołącz" modalTitle="Dołącz do spotkania">
          <JoinMeeting></JoinMeeting>
        </JoinModal>
      </>
    </StyledTableActions>
  );
};

export const TopicDataBaseTableMenu = () => {
  return (
    <StyledTableActions>
      <AddModal title="Dodaj" icon="fas fa-plus" modalTitle="Dodaj nowy temat">
        <AddTopic></AddTopic>
      </AddModal>

      <EditModal title="Edytuj" icon="fas fa-pen" modalTitle="Edytuj temat">
        <EditTopic></EditTopic>
      </EditModal>

      <DeleteModal title="Usuń" icon="fas fa-minus" modalTitle="Usuń temat">
        <DeleteTopic destination="topics"></DeleteTopic>
      </DeleteModal>
    </StyledTableActions>
  );
};

export const MeetingHistoryTableMenu = () => (
  <StyledTableActions history>
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

  ${({history}) =>
    history &&
    css`
      @media only screen and (max-width: ${variables.bpLargeMobile}) {
        grid-template-columns: 1fr;
      }
    `}
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
